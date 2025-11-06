// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Get these from your EmailJS dashboard
  SERVICE_ID: 'service_quentlabs', // Replace with your service ID
  TEMPLATE_ID: 'template_beta_signup', // Replace with your template ID
  PUBLIC_KEY: 'your_public_key', // Replace with your public key
  
  // Email recipient
  TO_EMAIL: 'abhilashsiyer@gmail.com',
  
  // Email subject
  SUBJECT: 'New Quent Labs Beta Signup',
};

// Email template variables
export const EMAIL_TEMPLATE = {
  from_name: '{{from_name}}',
  from_email: '{{from_email}}',
  company: '{{company}}',
  use_case: '{{use_case}}',
  message: '{{message}}',
};







