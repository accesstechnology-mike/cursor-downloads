#!/usr/bin/env node

// Simple test script to send a test email notification
async function testEmailNotification() {
  const NOTIFICATION_SECRET = process.env.NOTIFICATION_SECRET || 'test-secret-123';
  
  // Use the Vercel preview URL for testing
  const baseUrl = 'https://downloadcursor-app-git-te-81b504-accesstechnologymikes-projects.vercel.app';
  
  console.log('🧪 Testing email notification...');
  console.log('📡 Sending test notification to:', `${baseUrl}/api/send-notification`);
  
  try {
    const response = await fetch(`${baseUrl}/api/send-notification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${NOTIFICATION_SECRET}`,
      },
      body: JSON.stringify({
        version: '0.99.9-test',
        releaseDate: new Date().toISOString().split('T')[0], // Today's date
      }),
    });

    console.log('📥 Response status:', response.status);
    
    if (response.ok) {
      const result = await response.json();
      console.log('✅ Success!', result);
    } else {
      const error = await response.text();
      console.error('❌ Error:', error);
    }
  } catch (error) {
    console.error('💥 Request failed:', error.message);
  }
}

// Run the test
testEmailNotification(); 