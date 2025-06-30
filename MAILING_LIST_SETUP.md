# Mailing List Setup Guide

This guide explains how to set up the email notification system for new Cursor releases.

## Required Services

### 1. Vercel KV (Redis Database)

- Go to your [Vercel Dashboard](https://vercel.com/dashboard)
- Select your project
- Go to **Storage** → **Create Database** → **KV**
- Create a new KV database (free tier available)
- This will automatically set the required environment variables

### 2. Resend (Email Service)

- Sign up at [Resend](https://resend.com)
- Go to [API Keys](https://resend.com/api-keys)
- Create a new API key
- Add the domain `downloadcursor.app` to your [domains](https://resend.com/domains)
- Verify the domain (follow Resend's instructions)

## Environment Variables

Set these in your Vercel project settings (**Settings** → **Environment Variables**):

```bash
# Resend API Key for sending emails
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx

# Secret token for authenticating notification requests
# Generate with: openssl rand -hex 32
NOTIFICATION_SECRET=your-random-secret-here
```

The Vercel KV variables (`KV_REST_API_URL`, `KV_REST_API_TOKEN`, etc.) are automatically set when you add the KV database.

## How It Works

### Email Collection

- Users can subscribe via the form on the main page
- Emails are stored in Vercel KV (Redis)
- Duplicate subscriptions are handled gracefully

### Notifications

- When the update script (`scripts/update-links.ts`) detects a new version, it calls `/api/send-notification`
- The API sends emails to all subscribers using Resend
- Emails include direct links back to the website for platform-specific downloads

### Unsubscribe

- Each email includes an unsubscribe link: `/unsubscribe?email=user@example.com`
- Users can also unsubscribe manually at `/unsubscribe.html`

## API Endpoints

- `POST /api/subscribe` - Subscribe an email address
- `POST /api/unsubscribe` - Unsubscribe an email address
- `POST /api/send-notification` - Send notifications (requires auth header)

## Security

- The notification endpoint requires a secret token to prevent abuse
- Email validation is performed on both frontend and backend
- Emails are stored securely in Vercel KV

## Testing

In development, the notification system will log messages but not send actual emails unless `NODE_ENV=production` is set.

## Cost Considerations

- **Vercel KV**: Free tier includes 30,000 commands/month
- **Resend**: Free tier includes 3,000 emails/month
- Both should be sufficient for most use cases

## Deployment

1. Set up the required services (Vercel KV + Resend)
2. Add environment variables to Vercel
3. Deploy your site
4. Test the subscription form
5. Verify notifications work by manually triggering the update script

The mailing list will automatically send notifications when new Cursor versions are detected during the regular update process.
