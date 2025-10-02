# EmailJS Setup Guide for Quent Labs

This guide will help you set up EmailJS to send seamless email notifications when users join the beta program.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended)
4. Connect your Gmail account (`abhilashsiyer@gmail.com`)
5. Note down your **Service ID** (e.g., `service_quentlabs`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

**Template ID**: `template_beta_signup`

**Subject**: `New Quent Labs Beta Signup - {{from_name}}`

**Content**:
```
New Beta Signup for Quent Labs!

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Use Case: {{use_case}}

Message:
{{message}}

This person wants to join the Quent Labs beta program.
```

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `user_xxxxxxxxxxxxx`)

## Step 5: Update Code Configuration

Update the following values in `src/components/ReadyToTransform.tsx`:

```typescript
const serviceId = 'service_quentlabs'; // Your service ID from step 2
const templateId = 'template_beta_signup'; // Your template ID from step 3
const publicKey = 'your_public_key'; // Your public key from step 4
```

## Step 6: Test the Integration

1. Start your development server: `npm start`
2. Fill out the beta signup form
3. Click "Join Beta Program"
4. Check your Gmail for the notification email

## EmailJS Free Plan Limits

- **200 emails/month**
- **2 email services**
- **2 email templates**
- Perfect for beta testing!

## Troubleshooting

### Common Issues:

1. **"Service not found"**: Check your Service ID
2. **"Template not found"**: Check your Template ID  
3. **"Invalid public key"**: Check your Public Key
4. **CORS errors**: Make sure your domain is added to EmailJS allowed origins

### Testing Locally:

1. Add `localhost:3000` to EmailJS allowed origins
2. Or use `127.0.0.1:3000` if localhost doesn't work

## Production Deployment

When deploying to production:

1. Add your production domain to EmailJS allowed origins
2. Update the configuration with production values
3. Test the email functionality on the live site

## Security Notes

- Never commit your EmailJS keys to version control
- Use environment variables for production
- Consider upgrading to a paid plan for production use

## Alternative: Netlify Forms

If you prefer a simpler solution, you can also use Netlify Forms:

1. Add `netlify` attribute to your form
2. Add hidden input for spam protection
3. No additional setup required

Example:
```html
<form name="beta-signup" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="beta-signup" />
  <!-- your form fields -->
</form>
```

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/
- Quent Labs Support: Contact your development team

---

**Next Steps**: After setting up EmailJS, your beta signup form will automatically send email notifications to `abhilashsiyer@gmail.com` whenever someone joins the beta program! 🚀
