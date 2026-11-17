export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request?.json?.();
    const name = (body?.name ?? '')?.trim?.() ?? '';
    const email = (body?.email ?? '')?.trim?.() ?? '';
    const phone = (body?.phone ?? '')?.trim?.() ?? '';
    const service = (body?.service ?? '')?.trim?.() ?? '';
    const message = (body?.message ?? '')?.trim?.() ?? '';

    if (!name || !message) {
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      );
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone,
        service,
        message,
      },
    });

    return NextResponse.json({ success: true, id: submission?.id ?? '' });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit. Please try again.' },
      { status: 500 }
    );
  }
}
