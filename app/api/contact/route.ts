import { NextResponse } from 'next/server';
import { Resend } from 'resend';


const enquiryLabels: Record<string, string> = {
  'ab-health': 'AB Health Edible Oils (Soyabean & Rice Bran)',
  'jeevan-rekha': 'Jeevan Rekha (Rice Bran & Mustard Oil)',
  'ab-dorb': 'AB DORB Animal Feed (Magik / Platinum / Premium)',
  'industrial-wax': 'Rice Bran Wax Industrial Inquiry',
  'industrial-gums': 'Rice Bran Gums Industrial Inquiry',
  'industrial-lecithin': 'Rice Bran Lecithin Inquiry',
  'industrial-fatty-acid': 'Rice Bran Fatty Acid Inquiry',
  'industrial-spent-earth': 'Spent Bleaching Earth Inquiry',
  'bulk-packaging': 'Bulk Packaging / Co-Packing Services',
  'distributorship': 'Distributorship / Agency Application',
  'retail': '🛒 Retail Order',
  'bulk': '📦 Bulk / B2B Order',
  'distribution': '🚚 Distribution Inquiry',
  'partnership': '🤝 Partnership Proposal',
  'other': 'General B2B Inquiry',
};

// -----------------------------------------------------------------------------
// Security Layer 1: In-Memory IP Rate Limiting (Max 5 requests per 10 min per IP)
// -----------------------------------------------------------------------------
interface RateLimitRecord {
  count: number;
  resetTime: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 Minutes
  const maxRequests = 5;

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count += 1;
  return false;
}

// Clean up expired rate limit entries every 5 minutes
if (process.env.NODE_ENV !== 'test') {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateLimitMap.entries()) {
      if (now > record.resetTime) {
        rateLimitMap.delete(ip);
      }
    }
  }, 5 * 60 * 1000);
}

// -----------------------------------------------------------------------------
// POST Handler Endpoint
// -----------------------------------------------------------------------------
export async function POST(request: Request) {
  try {
    // 1. IP Rate Limiting Check
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      request.headers.get('cf-connecting-ip') ||
      '127.0.0.1';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a few minutes before submitting again.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { fname, company, email, phone, product, volume, message, website_url } = body;

    // 2. Honeypot Anti-Spam Check: If bot autofilled hidden website_url field, return fake 200 without sending
    if (website_url && String(website_url).trim().length > 0) {
      return NextResponse.json({ success: true, id: 'hp-filtered' });
    }

    // 3. Strict Server-Side Input Validation & Length Boundaries
    if (!fname?.trim() || typeof fname !== 'string') {
      return NextResponse.json({ error: 'Full name is required' }, { status: 400 });
    }
    if (fname.trim().length > 100) {
      return NextResponse.json({ error: 'Full name is too long (max 100 characters)' }, { status: 400 });
    }

    if (!email?.trim() || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: 'Valid corporate email address is required' }, { status: 400 });
    }
    if (email.trim().length > 150) {
      return NextResponse.json({ error: 'Email address is too long (max 150 characters)' }, { status: 400 });
    }

    if (!message?.trim() || typeof message !== 'string') {
      return NextResponse.json({ error: 'Commercial message details are required' }, { status: 400 });
    }
    if (message.trim().length > 3000) {
      return NextResponse.json({ error: 'Message details are too long (max 3000 characters)' }, { status: 400 });
    }

    // 4. Header Injection Prevention (Strip CRLF \r and \n)
    const sanitizeHeader = (str: string) => str.replace(/[\r\n]/g, '').trim();

    const cleanFname = sanitizeHeader(fname);
    const cleanEmail = sanitizeHeader(email);
    const cleanCompany = company && typeof company === 'string' ? sanitizeHeader(company).slice(0, 150) : '';
    const cleanPhone = phone && typeof phone === 'string' ? sanitizeHeader(phone).slice(0, 30) : '';
    const cleanVolume = volume && typeof volume === 'string' ? sanitizeHeader(volume).slice(0, 100) : '';

    const productFormatted = enquiryLabels[product] || (product ? sanitizeHeader(String(product)) : 'General B2B Inquiry');
    const companyFormatted = cleanCompany ? cleanCompany : 'N/A';
    const phoneFormatted = cleanPhone ? cleanPhone : 'N/A';
    const volumeFormatted = cleanVolume ? cleanVolume : 'N/A';

    // Format Subject Line with mandatory [AB Udyog B2B Desk] Prefix
    const cleanSubjectTitle = productFormatted.replace(/^[^\w\s]+\s*/, '');
    const subject = `[AB Udyog B2B Desk] ${cleanSubjectTitle} from ${cleanFname}`;

    // Target Inbox & Authenticated Domain Sender
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'info@abudyog.in';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'AB Udyog B2B Desk <onboarding@resend.dev>';

    // Submission Timestamp (IST)
    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-IN', {
      dateStyle: 'full',
      timeStyle: 'medium',
      timeZone: 'Asia/Kolkata',
    }).format(now);

    // Escape HTML Special Characters to Prevent Injection in Email Clients
    const sanitizeHtml = (str: string) =>
      str.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m] || m));

    const cleanMessageText = sanitizeHtml(message.trim()).replace(/\n/g, '<br />');

    // HTML Email Template (Compatible with Gmail, Outlook, Apple Mail)
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${sanitizeHtml(subject)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f5f2; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1c2e22; -webkit-font-smoothing: antialiased;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f5f2; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="640" border="0" cellspacing="0" cellpadding="0" style="max-width: 640px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e6df;">
          
          <!-- BRAND HEADER -->
          <tr>
            <td style="background-color: #122a1c; padding: 28px 32px; text-align: left;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px;">
                      AB Udyog <span style="color: #d4af37;">Pvt. Ltd.</span>
                    </div>
                    <div style="font-size: 11px; color: #a4b8ab; text-transform: uppercase; letter-spacing: 2px; margin-top: 4px;">
                      Refinery &amp; Commercial B2B Trade Desk
                    </div>
                  </td>
                  <td align="right" valign="top">
                    <span style="background-color: rgba(212, 175, 55, 0.15); border: 1px solid #d4af37; color: #f4e8c1; font-size: 10px; font-weight: 700; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; letter-spacing: 1px;">
                      Commercial Lead
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ACCENT STRIP -->
          <tr>
            <td style="background-color: #d4af37; height: 3px; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- BODY CONTENT -->
          <tr>
            <td style="padding: 32px;">
              <h2 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 700; color: #122a1c;">
                New B2B Inquiry Received
              </h2>
              <p style="margin: 0 0 22px 0; font-size: 13.5px; color: #5a685e; line-height: 1.5;">
                A new commercial query has been submitted via the official trade desk on <strong>abudyog.in</strong>.
              </p>

              <!-- INQUIRY BADGE -->
              <div style="background-color: #f7f9f6; border-left: 4px solid #122a1c; padding: 12px 16px; border-radius: 0 6px 6px 0; margin-bottom: 22px;">
                <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #6e7c72; font-weight: 700;">Inquiry Category</div>
                <div style="font-size: 15px; font-weight: 700; color: #122a1c; margin-top: 2px;">
                  ${sanitizeHtml(productFormatted)}
                </div>
              </div>

              <!-- DETAILS GRID TABLE -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 22px; border-collapse: collapse;">
                <tr>
                  <td width="48%" valign="top" style="padding-right: 2%;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #fafbf9; border: 1px solid #e8ebe5; border-radius: 6px; padding: 12px;">
                      <tr>
                        <td>
                          <div style="font-size: 10px; text-transform: uppercase; color: #78877c; font-weight: 700; letter-spacing: 0.5px;">Full Name</div>
                          <div style="font-size: 13.5px; font-weight: 600; color: #122a1c; margin-top: 3px;">${sanitizeHtml(cleanFname)}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="48%" valign="top" style="padding-left: 2%;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #fafbf9; border: 1px solid #e8ebe5; border-radius: 6px; padding: 12px;">
                      <tr>
                        <td>
                          <div style="font-size: 10px; text-transform: uppercase; color: #78877c; font-weight: 700; letter-spacing: 0.5px;">Organization</div>
                          <div style="font-size: 13.5px; font-weight: 600; color: #122a1c; margin-top: 3px;">${sanitizeHtml(companyFormatted)}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td height="10" style="font-size: 0; line-height: 0;">&nbsp;</td></tr>
                <tr>
                  <td width="48%" valign="top" style="padding-right: 2%;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #fafbf9; border: 1px solid #e8ebe5; border-radius: 6px; padding: 12px;">
                      <tr>
                        <td>
                          <div style="font-size: 10px; text-transform: uppercase; color: #78877c; font-weight: 700; letter-spacing: 0.5px;">Email Address</div>
                          <div style="font-size: 13.5px; font-weight: 600; color: #122a1c; margin-top: 3px;">
                            <a href="mailto:${sanitizeHtml(cleanEmail)}" style="color: #122a1c; text-decoration: none;">${sanitizeHtml(cleanEmail)}</a>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="48%" valign="top" style="padding-left: 2%;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #fafbf9; border: 1px solid #e8ebe5; border-radius: 6px; padding: 12px;">
                      <tr>
                        <td>
                          <div style="font-size: 10px; text-transform: uppercase; color: #78877c; font-weight: 700; letter-spacing: 0.5px;">Phone Number</div>
                          <div style="font-size: 13.5px; font-weight: 600; color: #122a1c; margin-top: 3px;">
                            ${phoneFormatted !== 'N/A' ? `<a href="tel:${sanitizeHtml(phoneFormatted)}" style="color: #122a1c; text-decoration: none;">${sanitizeHtml(phoneFormatted)}</a>` : 'N/A'}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td height="10" style="font-size: 0; line-height: 0;">&nbsp;</td></tr>
                <tr>
                  <td colspan="2" valign="top">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #fafbf9; border: 1px solid #e8ebe5; border-radius: 6px; padding: 12px;">
                      <tr>
                        <td>
                          <div style="font-size: 10px; text-transform: uppercase; color: #78877c; font-weight: 700; letter-spacing: 0.5px;">Order Volume / Requirements</div>
                          <div style="font-size: 13.5px; font-weight: 600; color: #122a1c; margin-top: 3px;">${sanitizeHtml(volumeFormatted)}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- MESSAGE BOX -->
              <div style="margin-bottom: 22px;">
                <div style="font-size: 11px; text-transform: uppercase; color: #6e7c72; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 6px;">
                  Commercial Specifications &amp; Details
                </div>
                <div style="background-color: #ffffff; border: 1px solid #e2e6df; border-radius: 6px; padding: 16px; font-size: 13.5px; line-height: 1.6; color: #1c2e22; white-space: pre-wrap;">${cleanMessageText}</div>
              </div>

              <!-- REPLY TIP -->
              <div style="background-color: #f4f7f2; border: 1px dashed #b8c7bc; border-radius: 6px; padding: 12px; text-align: center;">
                <div style="font-size: 12.5px; color: #122a1c; font-weight: 600;">
                  💡 Tip: Clicking <strong>&quot;Reply&quot;</strong> in your email client will reply directly to <u>${sanitizeHtml(cleanEmail)}</u>.
                </div>
              </div>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color: #fafbf9; border-top: 1px solid #e8ebe5; padding: 18px 32px; text-align: center;">
              <div style="font-size: 11.5px; color: #78877c; line-height: 1.5;">
                Submitted on ${formattedDate}<br />
                AB Udyog Private Limited · Kolkata Refinery Complex<br />
                <a href="https://abudyog.in" style="color: #122a1c; text-decoration: none; font-weight: 700;">abudyog.in</a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // 5. Dispatch via Resend API
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('RESEND_API_KEY environment variable is not set.');
      return NextResponse.json(
        { error: 'Email delivery service is currently not configured.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const data = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      replyTo: cleanEmail,
      subject: subject,
      html: htmlContent,
    });

    if (data.error) {
      console.error('Resend API Error:', data.error);
      return NextResponse.json({ error: data.error.message || 'Failed to dispatch email via Resend' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (err: unknown) {
    console.error('Contact Form Server Error:', err);
    const errorMessage = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
