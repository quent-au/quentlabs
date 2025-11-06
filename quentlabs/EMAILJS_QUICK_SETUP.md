# 🚀 EmailJS Quick Setup for Quent Labs

Follow these exact steps to get EmailJS working in 5 minutes:

## Step 1: Create EmailJS Account (2 minutes)

1. **Go to**: https://www.emailjs.com/
2. **Click**: "Sign Up" (top right)
3. **Enter**: Your email and password
4. **Verify**: Check your email and click the verification link

## Step 2: Connect Gmail Service (1 minute)

1. **In EmailJS Dashboard**: Click "Email Services" in the left menu
2. **Click**: "Add New Service"
3. **Select**: "Gmail" from the list
4. **Connect**: Your Gmail account (abhilashsiyer@gmail.com)
5. **Copy**: The Service ID (looks like `service_xxxxxxxxx`)

## Step 3: Create Email Template (2 minutes)

1. **Click**: "Email Templates" in the left menu
2. **Click**: "Create New Template"
3. **Template ID**: Name it `template_beta_signup`
4. **Subject**: `New Quent Labs Beta Signup - {{from_name}}`
5. **Content**: Copy and paste this exactly:

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

6. **Save**: Click "Save" button

## Step 4: Get Public Key (30 seconds)

1. **Click**: "Account" in the left menu
2. **Copy**: Your Public Key (looks like `user_xxxxxxxxxxxxx`)

## Step 5: Update Code (30 seconds)

1. **Open**: `src/config/emailjs.ts`
2. **Replace** these values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_your_actual_service_id', // From Step 2
  TEMPLATE_ID: 'template_beta_signup', // From Step 3
  PUBLIC_KEY: 'user_your_actual_public_key', // From Step 4
  TO_EMAIL: 'abhilashsiyer@gmail.com',
  SUBJECT: 'New Quent Labs Beta Signup',
};
```

## Step 6: Test It! 🎉

1. **Start your app**: `npm start`
2. **Go to**: http://localhost:3000
3. **Scroll down**: To the beta signup form
4. **Fill out**: The form with test data
5. **Click**: "Join Beta Program"
6. **Check**: Your Gmail inbox!

## ✅ Success Indicators

- Button shows "Joining Beta..." while processing
- Green success message appears
- Form clears automatically
- You receive email in Gmail inbox

## 🔧 Troubleshooting

**If you get errors:**

1. **"Service not found"**: Check your Service ID
2. **"Template not found"**: Check your Template ID
3. **"Invalid public key"**: Check your Public Key
4. **CORS error**: Add `localhost:3000` to allowed origins in EmailJS

**To fix CORS:**
1. Go to EmailJS Dashboard → Account → General
2. Add `localhost:3000` to "Allowed Origins"
3. Save changes

## 📧 What You'll Receive

When someone joins the beta, you'll get an email like this:

**Subject**: New Quent Labs Beta Signup - John Doe

**Content**:
```
New Beta Signup for Quent Labs!

Name: John Doe
Email: john@company.com
Company: Tech Corp
Use Case: Mobile App Testing

Message:
New Beta Signup:

Name: John Doe
Email: john@company.com
Company: Tech Corp
Use Case: Mobile App Testing

This person wants to join the Quent Labs beta program.
```

## 🎯 That's It!

Your beta signup form now sends emails automatically to `abhilashsiyer@gmail.com` without users needing to open their email client!

**Free Plan Limits:**
- 200 emails/month
- Perfect for beta testing
- No credit card required

---

**Need Help?** Check the full setup guide in `EMAILJS_SETUP.md` or contact your development team.







