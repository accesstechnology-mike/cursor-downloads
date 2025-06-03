import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Check if email already exists
    const existingEmail = await kv.get(`subscriber:${email}`);
    if (existingEmail) {
      return res.status(200).json({ message: 'Already subscribed!' });
    }

    // Store email with timestamp
    await kv.set(`subscriber:${email}`, {
      email,
      subscribedAt: new Date().toISOString(),
      active: true
    });

    // Add to subscribers list
    await kv.sadd('subscribers', email);

    return res.status(200).json({ message: 'Successfully subscribed!' });
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 