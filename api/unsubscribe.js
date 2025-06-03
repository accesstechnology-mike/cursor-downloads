import { kv } from '@vercel/kv';

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Remove from subscribers list
    await kv.srem('subscribers', email);
    
    // Mark as inactive but keep record
    await kv.set(`subscriber:${email}`, {
      email,
      active: false,
      unsubscribedAt: new Date().toISOString()
    });

    return new Response(JSON.stringify({ message: 'Successfully unsubscribed!' }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 