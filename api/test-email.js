const { kv } = require('@vercel/kv');
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('🧪 TEST EMAIL: Starting test email notification');

    // Get all subscribers
    const subscribers = await kv.smembers('subscribers');
    console.log('📧 Found subscribers:', subscribers?.length || 0);
    
    if (!subscribers || subscribers.length === 0) {
      return res.status(200).json({ 
        message: 'No subscribers to notify',
        subscribersFound: 0 
      });
    }

    // Use EXACT same email template as production, just with test version
    const version = '0.99.9-TEST';
    const releaseDate = new Date().toISOString().split('T')[0];
    const subject = `New Cursor ${version} is now available!`;
    
    // This is the EXACT same template used in api/send-notification.js
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Cursor Version Available</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2rem; border-radius: 10px; text-align: center; margin-bottom: 2rem;">
            <h1 style="color: white; margin: 0; font-size: 2rem;">New Cursor Version!</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; text-align: center;">
            <h2 style="margin-top: 0; color: #2c3e50; text-align: center;">Cursor ${version} is now available</h2>
            <p style="font-size: 1.1rem; margin-bottom: 1rem; text-align: center;">
              A new version of Cursor has been released${releaseDate ? ` on ${new Date(releaseDate).toLocaleDateString()}` : ''}. 
              The site will automatically detect your platform and show the right download for you.
            </p>
            <p style="text-align: center;">
              <a href="https://downloadcursor.app" 
                 style="display: inline-block; background: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: 600;">
                Visit Download Page
              </a>
            </p>
          </div>
          
          <div style="text-align: center; color: #666; font-size: 0.9rem;">
            <p>
              You're receiving this because you subscribed to Cursor version notifications at 
              <a href="https://downloadcursor.app" style="color: #007bff;">downloadcursor.app</a>
            </p>
            <p>
              <a href="https://downloadcursor.app/unsubscribe?email={{email}}" style="color: #666;">Unsubscribe</a>
            </p>
          </div>
        </body>
      </html>
    `;

    // Send to first subscriber only for testing
    const testEmail = subscribers[0];
    console.log('📤 Sending test email to:', testEmail);

    const result = await resend.emails.send({
      from: 'Cursor Updates <noreply@downloadcursor.app>',
      to: testEmail,
      subject,
      html: htmlContent.replace('{{email}}', encodeURIComponent(testEmail))
    });

    console.log('✅ Test email sent successfully:', result);

    return res.status(200).json({ 
      message: 'Test email sent successfully!', 
      sentTo: testEmail,
      emailId: result.id,
      totalSubscribers: subscribers.length
    });

  } catch (error) {
    console.error('💥 Test email error:', error);
    return res.status(500).json({ 
      error: 'Failed to send test email', 
      details: error.message 
    });
  }
}; 