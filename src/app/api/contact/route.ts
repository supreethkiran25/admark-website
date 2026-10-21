import { NextRequest, NextResponse } from 'next/server';

// In-memory rate limiting map
const submissionStore = new Map<string, { count: number; resetAt: number }>();

function getRateLimitKey(req: NextRequest): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const record = submissionStore.get(key);

  if (!record || now > record.resetAt) {
    submissionStore.set(key, { count: 1, resetAt: now + 60 * 60 * 1000 }); // 1 hour window
    return false;
  }

  if (record.count >= 10) return true; // max 10 submissions per hour per IP

  submissionStore.set(key, { count: record.count + 1, resetAt: record.resetAt });
  return false;
}

function sanitize(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, 5000);
}

export async function POST(req: NextRequest) {
  try {
    // Rate limit check
    const ipKey = getRateLimitKey(req);
    if (isRateLimited(ipKey)) {
      return NextResponse.json(
        { message: 'Submission limit reached. Please wait before submitting another brief.' },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 });
    }

    // Honeypot check: if bot filled this hidden field, silently return 200 OK
    if (body.honeypot || body.websiteHoneypot) {
      return NextResponse.json(
        { message: 'Your project brief has been recorded.' },
        { status: 200 }
      );
    }

    // Server-side field validation
    const fullName = sanitize(body.fullName);
    const workEmail = sanitize(body.workEmail);
    const company = sanitize(body.company);
    const service = sanitize(body.service);
    const budget = sanitize(body.budget);
    const timeline = sanitize(body.timeline);
    const projectDetails = sanitize(body.projectDetails || body.message);

    const errors: Record<string, string> = {};
    if (!fullName) errors.fullName = 'Full name is required.';
    if (!workEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail)) {
      errors.workEmail = 'A valid work email is required.';
    }
    if (!projectDetails || projectDetails.length < 5) {
      errors.projectDetails = 'Please provide details about your project objectives.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ message: 'Validation failed.', errors }, { status: 422 });
    }

    const submission = {
      fullName,
      workEmail,
      company: company || 'Not provided',
      service: service || 'General Technical Inquiry',
      budget: budget || 'To be scoped',
      timeline: timeline || 'Within 1 Month',
      projectDetails,
      submittedAt: new Date().toISOString(),
      ipAddress: ipKey,
    };

    // Server log (visible in production logs)
    const logPayload = { ...submission };
    delete (logPayload as Record<string, unknown>).ipAddress;
    console.log('[AdMark Dossier Brief]', JSON.stringify(logPayload));

    // Optional webhook forwarder
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(logPayload),
          signal: AbortSignal.timeout(4000),
        });
      } catch (webhookErr) {
        console.error('[Contact Webhook Error]', webhookErr);
      }
    }

    return NextResponse.json(
      { message: 'Project brief transmitted successfully. Technical review in progress.' },
      { status: 200 }
    );
  } catch (err) {
    console.error('[Contact API Error]', err);
    return NextResponse.json(
      { message: 'An internal error occurred. Please email direct to info@admarkdigitals.com' },
      { status: 500 }
    );
  }
}
