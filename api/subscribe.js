import { kv } from '@vercel/kv';

export async function POST(req) {
  try {
    const { email } = await req.json();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check if email already exists
    const existingEmail = await kv.get(`subscriber:${email}`);
    if (existingEmail) {
      return new Response(JSON.stringify({ message: 'Already subscribed!' }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Store email with timestamp
    await kv.set(`subscriber:${email}`, {
      email,
      subscribedAt: new Date().toISOString(),
      active: true
    });

    // Add to subscribers list
    await kv.sadd('subscribers', email);

    return new Response(JSON.stringify({ message: 'Successfully subscribed!' }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 