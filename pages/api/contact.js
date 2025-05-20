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
    
    // Log form submission for record keeping
    console.log('Form submission received:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    
    // Store the message details in a format that can be accessed later
    // In a real application, this could be stored in a database
    const timestamp = new Date().toISOString();
    const messageDetails = {
      id: `msg_${Date.now()}`,
      name,
      email,
      message,
      timestamp,
      status: 'received'
    };
    
    console.log('Message details stored:', messageDetails);
    
    // For development/demo purposes, we'll simulate a successful submission
    // In production, you would integrate with a real email service or database
    
    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon.',
      messageId: messageDetails.id
    });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Something went wrong while processing your message. Please try again.' 
    });
  }
}