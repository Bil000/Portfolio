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
      from: '"Portfolio Contact Form" <clebiodesouza22@gmail.com>',
      to: 'clebiodesouza22@gmail.com',
      replyTo: email,
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
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };
    
    // Create transporter (email sending service) for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'clebiodesouza22@gmail.com', // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD // Your Gmail App Password (will be provided by user)
      }
    });
    
    // Send the email
    const info = await transporter.sendMail(emailContent);
    
    console.log('Message sent: %s', info.messageId);
    
    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon.'
    });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Something went wrong while sending your message. Please try again.' 
    });
  }
}