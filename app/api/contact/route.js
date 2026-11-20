import { NextResponse } from 'next/server';
import { validateContact } from '@/lib/validate';
import { isRateLimited } from '@/lib/rateLimit';
import { sendMail } from '@/lib/mailgun';

export const runtime = 'nodejs';

function formatMessage(v) {
  return [
    `Name: ${v.name}`,
    `Company: ${v.company || '-'}`,
    `Email: ${v.email}`,
    `Phone: ${v.phone || '-'}`,
    `Event type: ${v.eventType || '-'}`,
    `Rough date: ${v.eventDate || '-'}`,
    `Best call times: ${v.callTimes || '-'}`,
    '',
    v.message || '(no message)',
  ].join('\n');
}

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ errors: {} }, { status: 429 });
  }

  const form = await request.formData();

  // Honeypot: real visitors never fill this in. Pretend success for bots.
  if (form.get('website')) return NextResponse.json({ ok: true });

  const { values, errors } = validateContact(form);
  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  try {
    await sendMail({
      subject: `Call request from ${values.name}`,
      text: formatMessage(values),
      replyTo: values.email,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form email failed:', error.message);
    return NextResponse.json({ errors: {} }, { status: 502 });
  }
}
