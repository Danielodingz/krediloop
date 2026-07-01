import { createClient } from '@supabase/supabase-js';

/**
 * Server-only Supabase client.
 *
 * Uses the SERVICE ROLE KEY which bypasses Row Level Security.
 * ⚠️  Never import this file in any 'use client' component or expose it
 *     to the browser. It is for API routes and Server Components only.
 *
 * Required environment variables (set in .env.local):
 *   NEXT_PUBLIC_SUPABASE_URL       – your Supabase project URL
 *   SUPABASE_SERVICE_ROLE_KEY      – secret service role key (never expose to client)
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error(
    'Missing Supabase environment variables. ' +
    'Ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in .env.local'
  );
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    // Disable auto token refresh — not needed for server-side service role usage
    autoRefreshToken: false,
    persistSession: false,
  },
});
