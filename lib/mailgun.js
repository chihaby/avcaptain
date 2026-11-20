// Sends one email through the Mailgun HTTP API. Server-side only.
export async function sendMail({ subject, text, replyTo }) {
  const { MAILGUN_API_KEY, MAILGUN_DOMAIN, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  const base = process.env.MAILGUN_API_BASE || 'https://api.mailgun.net';

  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    throw new Error('Mailgun environment variables are not set.');
  }

  const body = new URLSearchParams({
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    subject,
    text,
    'h:Reply-To': replyTo,
  });

  const res = await fetch(`${base}/v3/${MAILGUN_DOMAIN}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')}`,
    },
    body,
  });

  if (!res.ok) throw new Error(`Mailgun responded with ${res.status}`);
}
