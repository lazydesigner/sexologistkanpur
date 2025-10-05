// app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message, preferredTime, urgency } = body;

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone number are required' },
        { status: 400 }
      );
    }

    // Phone validation (Indian format)
    const phoneRegex = /^(\+91|91)?[6789]\d{9}$/;
    if (!phoneRegex.test(phone.replace(/\s|-/g, ''))) {
      return NextResponse.json(
        { error: 'Please enter a valid Indian phone number' },
        { status: 400 }
      );
    }

    // Email validation if provided
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: 'Please enter a valid email address' },
          { status: 400 }
        );
      }
    }

    // Prepare form data for processing
    const formData = {
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim() || '',
      service: service || 'General Consultation',
      message: message?.trim() || '',
      preferredTime: preferredTime || '',
      urgency: urgency || 'normal',
      submittedAt: new Date().toISOString(),
      source: 'Website Contact Form'
    };

    // Here you would integrate with your preferred service:
    // Option 1: Send email via SendGrid, Mailgun, or similar
    // Option 2: Save to database
    // Option 3: Send to CRM system
    // Option 4: Forward to WhatsApp Business API
    
    // For now, we'll simulate successful submission
    // Replace this with your actual integration
    
    // Example email integration (uncomment and configure):
    /*
    const emailResult = await sendEmail({
      to: 'info@drrmsingh.com',
      subject: `New Consultation Request - ${urgency === 'urgent' ? 'URGENT' : 'Regular'}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Preferred Time:</strong> ${formData.preferredTime}</p>
        <p><strong>Urgency:</strong> ${formData.urgency}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
        <p><strong>Submitted:</strong> ${formData.submittedAt}</p>
      `
    });
    */

    // Example database save (uncomment and configure):
    /*
    const dbResult = await saveToDatabase('contact_submissions', formData);
    */

    // Log the submission for now
    console.log('Contact form submission:', formData);

    // Send success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your consultation request has been submitted successfully. We will contact you within 2-4 hours.',
        data: {
          submissionId: generateSubmissionId(),
          estimatedCallback: getCallbackTime(urgency)
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      {
        error: 'There was an error processing your request. Please try calling us directly.',
        phone: '+91-99369-59955'
      },
      { status: 500 }
    );
  }
}

// Helper function to generate unique submission ID
function generateSubmissionId() {
  return 'CS' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
}

// Helper function to calculate callback time
function getCallbackTime(urgency) {
  const now = new Date();
  const hours = urgency === 'urgent' ? 2 : 4;
  const callbackTime = new Date(now.getTime() + (hours * 60 * 60 * 1000));
  
  return callbackTime.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Handle GET requests (optional - for form status check)
export async function GET(request) {
  return NextResponse.json(
    {
      status: 'Contact API is working',
      methods: ['POST'],
      requiredFields: ['name', 'phone'],
      optionalFields: ['email', 'service', 'message', 'preferredTime', 'urgency']
    },
    { status: 200 }
  );
}