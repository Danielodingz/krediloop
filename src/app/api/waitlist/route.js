import { supabaseAdmin } from '@/lib/supabase';
import { waitlistEmailTemplate } from '@/lib/emails/waitlistTemplate';
import nodemailer from 'nodemailer';

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Very simple email format validation.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Creates a reusable Nodemailer transporter configured for Gmail SMTP.
 * Credentials are read from environment variables — never hardcoded.
 */
function createMailTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/waitlist
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Handles waitlist form submissions.
 *
 * Flow:
 *  1. Parse + validate input (firstName, lastName, email)
 *  2. Insert row into Supabase `waitlist` table
 *  3. Detect duplicate emails via the UNIQUE constraint
 *  4. Send a branded HTML confirmation email via Gmail SMTP
 *  5. Return a JSON response with an appropriate HTTP status code
 *
 * @param {Request} request - The incoming Next.js App Router Request object
 * @returns {Response} JSON response
 */
export async function POST(request) {
  // ── 1. Parse body ──────────────────────────────────────────────────────────
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const { firstName, lastName, email } = body;

  // ── 2. Validate inputs ────────────────────────────────────────────────────
  const errors = {};

  if (!firstName || typeof firstName !== 'string' || !firstName.trim()) {
    errors.firstName = 'First name is required.';
  }
  if (!lastName || typeof lastName !== 'string' || !lastName.trim()) {
    errors.lastName = 'Last name is required.';
  }
  if (!email || typeof email !== 'string' || !email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!isValidEmail(email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (Object.keys(errors).length > 0) {
    return Response.json(
      { success: false, error: 'Validation failed.', fields: errors },
      { status: 422 }
    );
  }

  // Sanitise strings
  const cleanFirst = firstName.trim();
  const cleanLast = lastName.trim();
  const cleanEmail = email.trim().toLowerCase();

  // ── 3. Insert into Supabase ───────────────────────────────────────────────
  const { error: dbError } = await supabaseAdmin
    .from('waitlist')
    .insert({
      first_name: cleanFirst,
      last_name: cleanLast,
      email: cleanEmail,
    });

  if (dbError) {
    // Supabase surfaces Postgres unique-constraint violations as code '23505'
    if (dbError.code === '23505') {
      return Response.json(
        {
          success: false,
          error: 'You are already on the waitlist.',
          code: 'DUPLICATE_EMAIL',
        },
        { status: 409 }
      );
    }

    // Any other database error
    console.error('[waitlist] Supabase insert error:', dbError);
    return Response.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }

  // ── 4. Send confirmation email ────────────────────────────────────────────
  try {
    const transporter = createMailTransporter();

    await transporter.sendMail({
      from: `"KrediLoop" <${process.env.GMAIL_EMAIL}>`,
      to: cleanEmail,
      subject: "You're on the KrediLoop waitlist! 🎉",
      // Plain-text fallback for email clients that don't render HTML
      text: `Hi ${cleanFirst},\n\nYou're officially on the KrediLoop waitlist! Thank you for joining early.\n\nWe're building a better way for Africans to save together, access credit, and use stablecoins through a modern digital experience inspired by traditional Ajo savings.\n\nYou'll be among the first to know when KrediLoop launches.\n\n— Desmond\nFounder, KrediLoop`,
      html: waitlistEmailTemplate(cleanFirst),
    });
  } catch (emailError) {
    // The user IS saved in the database — log the email failure but don't
    // surface it as a fatal error to the user. They can still be on the waitlist.
    console.error('[waitlist] Email send error:', emailError);
    // Still return success — the record is persisted.
    return Response.json(
      {
        success: true,
        warning: 'You have been added to the waitlist, but we could not send a confirmation email.',
      },
      { status: 200 }
    );
  }

  // ── 5. All good ───────────────────────────────────────────────────────────
  return Response.json(
    { success: true, message: 'You have been added to the waitlist!' },
    { status: 201 }
  );
}
