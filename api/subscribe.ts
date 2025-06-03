import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export default async function handler(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const { email } = await req.json();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Check if email already exists
    const existingEmail = await kv.get(`subscriber:${email}`);
    if (existingEmail) {
      return NextResponse.json({ message: 'Already subscribed!' }, { status: 200 });
    }

    // Store email with timestamp
    await kv.set(`subscriber:${email}`, {
      email,
      subscribedAt: new Date().toISOString(),
      active: true
    });

    // Add to subscribers list
    await kv.sadd('subscribers', email);

    return NextResponse.json({ message: 'Successfully subscribed!' }, { status: 200 });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 