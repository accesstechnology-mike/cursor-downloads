import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export default async function handler(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Remove from subscribers list
    await kv.srem('subscribers', email);
    
    // Mark as inactive but keep record
    await kv.set(`subscriber:${email}`, {
      email,
      active: false,
      unsubscribedAt: new Date().toISOString()
    });

    return NextResponse.json({ message: 'Successfully unsubscribed!' }, { status: 200 });
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 