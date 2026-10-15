// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Get these from your EmailJS dashboard (https://dashboard.emailjs.com)
  // IMPORTANT: Replace these placeholder values with your actual EmailJS credentials
  SERVICE_ID: 'service_8v5522y', // e.g., 'service_abc123' - from EmailJS Email Services
  TEMPLATE_ID: 'template_9p3yzdk', // e.g., 'template_xyz789' - from EmailJS Email Templates
  PUBLIC_KEY: 'Us0kivYwplvWAa24t', // e.g., 'user_abc123xyz' - from EmailJS Account > General
  
  // Email recipient - where beta signups will be sent
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







