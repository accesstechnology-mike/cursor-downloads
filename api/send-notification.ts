import { kv } from '@vercel/kv';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Verify the request is from your update script (simple auth)
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.NOTIFICATION_SECRET}`) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { 
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { version, releaseDate } = await req.json();

    if (!version) {
      return new Response(JSON.stringify({ error: 'Version is required' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get all subscribers
    const subscribers = await kv.smembers('subscribers');
    
    if (!subscribers || subscribers.length === 0) {
      return new Response(JSON.stringify({ message: 'No subscribers to notify' }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create email content
    const subject = `New Cursor ${version} is now available!`;
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
          
          <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
            <h2 style="margin-top: 0; color: #2c3e50;">Cursor ${version} is now available</h2>
            <p style="font-size: 1.1rem; margin-bottom: 1rem;">
              A new version of Cursor has been released${releaseDate ? ` on ${new Date(releaseDate).toLocaleDateString()}` : ''}. 
              The site will automatically detect your platform and show the right download for you.
            </p>
            <p>
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

    // Send emails in batches to avoid rate limits
    const batchSize = 50;
    const batches = [];
    
    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize);
      batches.push(batch);
    }

    let sentCount = 0;
    let errorCount = 0;

    for (const batch of batches) {
      try {
        const emailPromises = batch.map(email => 
          resend.emails.send({
            from: 'Cursor Updates <noreply@downloadcursor.app>',
            to: email,
            subject,
            html: htmlContent.replace('{{email}}', encodeURIComponent(email))
          })
        );

        await Promise.allSettled(emailPromises);
        sentCount += batch.length;
      } catch (error) {
        console.error('Batch send error:', error);
        errorCount += batch.length;
      }
    }

    // Store notification record
    await kv.set(`notification:${version}`, {
      version,
      releaseDate,
      sentAt: new Date().toISOString(),
      recipientCount: sentCount,
      errorCount
    });

    return new Response(JSON.stringify({ 
      message: 'Notifications sent', 
      sent: sentCount, 
      errors: errorCount 
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Send notification error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 