/**
 * Generates the HTML body for the KrediLoop waitlist confirmation email.
 *
 * Uses inline CSS throughout for maximum compatibility across email clients
 * (Gmail, Outlook, Apple Mail, Yahoo, etc.).
 *
 * @param {string} firstName - The subscriber's first name, used in the greeting.
 * @returns {string} A complete HTML string ready to send via Nodemailer.
 */
export function waitlistEmailTemplate(firstName) {
  // Sanitise the first name — strip any HTML tags to prevent injection
  const safeName = String(firstName).replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return /* html */ `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>You're on the KrediLoop Waitlist!</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    /* Reset & base */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    body { margin: 0 !important; padding: 0 !important; background-color: #EBF0FF; }

    /* Responsive */
    @media only screen and (max-width: 600px) {
      .email-container { width: 100% !important; }
      .card { border-radius: 20px !important; padding: 36px 24px !important; }
      .hero-heading { font-size: 32px !important; line-height: 40px !important; }
      .body-text { font-size: 15px !important; }
      .cta-button { padding: 14px 32px !important; font-size: 15px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#EBF0FF;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

  <!-- Outer wrapper -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#EBF0FF;">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <!-- Email container -->
        <table role="presentation" class="email-container" cellspacing="0" cellpadding="0" border="0" width="580" style="max-width:580px;width:100%;">

          <!-- ── LOGO BAR ── -->
          <tr>
            <td align="center" style="padding-bottom:28px;">
              <!-- Logo badge -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <img src="https://krediloop.xyz/medal.png" alt="KrediLoop Medal" width="64" height="64" style="display:block; width:64px; max-width:64px; height:auto; border:0;" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── CARD ── -->
          <tr>
            <td>
              <table role="presentation" class="card" cellspacing="0" cellpadding="0" border="0" width="100%"
                style="background-color:#ffffff;border-radius:28px;padding:56px 48px;box-shadow:0 8px 40px rgba(47,92,240,0.10);">

                <!-- Top accent line -->
                <tr>
                  <td style="padding-bottom:40px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="height:4px;background:linear-gradient(90deg,#2F5CF0 0%,#6C8FF8 100%);border-radius:100px;"></td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Heading -->
                <tr>
                  <td align="center" style="padding-bottom:8px;">
                    <h1 class="hero-heading"
                      style="margin:0;font-size:40px;line-height:48px;font-weight:700;color:#0B163A;letter-spacing:-0.5px;">
                      You&rsquo;re in! 🎉
                    </h1>
                  </td>
                </tr>

                <!-- Subheading -->
                <tr>
                  <td align="center" style="padding-bottom:40px;">
                    <p style="margin:0;font-size:16px;line-height:24px;color:#6B7280;font-weight:400;">
                      Welcome to the KrediLoop waitlist
                    </p>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding-bottom:40px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr><td style="height:1px;background-color:#EBF0FF;"></td></tr>
                    </table>
                  </td>
                </tr>

                <!-- Greeting + body -->
                <tr>
                  <td style="padding-bottom:32px;">
                    <p class="body-text" style="margin:0 0 16px 0;font-size:16px;line-height:28px;color:#1F2937;">
                      Hi <strong>${safeName}</strong>,
                    </p>
                    <p class="body-text" style="margin:0 0 16px 0;font-size:16px;line-height:28px;color:#1F2937;">
                      You&rsquo;re officially on the <strong>KrediLoop</strong> waitlist!
                      Thank you for joining early.
                    </p>
                    <p class="body-text" style="margin:0 0 16px 0;font-size:16px;line-height:28px;color:#374151;">
                      We&rsquo;re building a better way for Africans to <strong>save together</strong>,
                      <strong>access credit</strong>, and <strong>use stablecoins</strong> through a modern
                      digital experience inspired by traditional <em>Ajo</em> savings.
                    </p>
                    <p class="body-text" style="margin:0;font-size:16px;line-height:28px;color:#374151;">
                      You&rsquo;ll be among the <strong>first to know</strong> when KrediLoop launches.
                      We can&rsquo;t wait to welcome you aboard.
                    </p>
                  </td>
                </tr>

                <!-- CTA Button -->
                <tr>
                  <td align="center" style="padding-bottom:48px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="border-radius:12px;background-color:#2F5CF0;">
                          <a class="cta-button"
                            href="https://krediloop.xyz"
                            target="_blank"
                            style="display:inline-block;padding:16px 40px;font-size:16px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:12px;letter-spacing:0.2px;">
                            Visit KrediLoop &rarr;
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding-bottom:32px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr><td style="height:1px;background-color:#EBF0FF;"></td></tr>
                    </table>
                  </td>
                </tr>

                <!-- Signature -->
                <tr>
                  <td>
                    <p style="margin:0 0 4px 0;font-size:15px;line-height:24px;color:#1F2937;font-weight:600;">
                      — Desmond
                    </p>
                    <p style="margin:0;font-size:14px;line-height:22px;color:#6B7280;">
                      Founder, KrediLoopNG
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- ── FOOTER ── -->
          <tr>
            <td align="center" style="padding-top:32px;padding-bottom:16px;">
              <p style="margin:0 0 8px 0;font-size:12px;line-height:20px;color:#9CA3AF;">
                You received this email because you joined the KrediLoop waitlist.
              </p>
              <p style="margin:0;font-size:12px;line-height:20px;color:#9CA3AF;">
                &copy; ${new Date().getFullYear()} KrediLoop. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
        <!-- /Email container -->

      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}
