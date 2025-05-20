import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests for this endpoint
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }
    
    // Log form submission for debugging
    console.log('Form submission received:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    
    // Create email content
    const emailContent = {
      from: email,
      to: 'clebiodesouza22@gmail.com',
      subject: `Portfolio Contact Form: Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\\n/g, '<br>')}</p>
      `
    };
    
    // Create a test account on Ethereal for development/testing
    // In production, you'd use your actual email credentials
    const testAccount = await nodemailer.createTestAccount();
    
    // Create transporter (email sending service)
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });
    
    // Send the email
    const info = await transporter.sendMail(emailContent);
    
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon.',
      previewUrl: nodemailer.getTestMessageUrl(info) // This is for testing only
    });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Something went wrong while sending your message. Please try again.' 
    });
  }
}