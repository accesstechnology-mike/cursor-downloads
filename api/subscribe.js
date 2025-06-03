const { kv } = require('@vercel/kv');

module.exports = async (req, res) => {
  console.log('=== API DEBUG START ===');
  console.log('Method:', req.method);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  console.log('URL:', req.url);
  
  if (req.method !== 'POST') {
    console.log('❌ Method not allowed:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('📧 Processing subscription...');
    const { email } = req.body;
    console.log('Email from body:', email);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      console.log('❌ Invalid email:', email);
      return res.status(400).json({ error: 'Invalid email address' });
    }

    console.log('✅ Email validation passed');

    // Check if email already exists
    console.log('🔍 Checking if email exists...');
    const existingEmail = await kv.get(`subscriber:${email}`);
    if (existingEmail) {
      console.log('⚠️ Email already subscribed');
      return res.status(200).json({ message: 'Already subscribed!' });
    }

    // Store email with timestamp
    console.log('💾 Storing email...');
    await kv.set(`subscriber:${email}`, {
      email,
      subscribedAt: new Date().toISOString(),
      active: true
    });

    // Add to subscribers list
    console.log('📋 Adding to subscribers list...');
    await kv.sadd('subscribers', email);

    console.log('🎉 Subscription successful!');
    return res.status(200).json({ message: 'Successfully subscribed!' });
  } catch (error) {
    console.error('💥 SUBSCRIPTION ERROR:', error);
    console.error('Error stack:', error.stack);
    return res.status(500).json({ error: 'Internal server error', debug: error.message });
  }
}; 