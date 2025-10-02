# Deployment Guide for Quent Labs

This guide will walk you through deploying your Quent Labs landing page to Firebase Hosting and connecting it to your custom domain `quentlabs.com`.

## Prerequisites

- Node.js 16+ installed
- Firebase account
- Domain access to `quentlabs.com`
- Git (optional but recommended)

## Step 1: Install Dependencies

```bash
# Install project dependencies
npm install

# Install Firebase CLI globally
npm install -g firebase-tools
```

## Step 2: Firebase Setup

### 2.1 Login to Firebase
```bash
firebase login
```

### 2.2 Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name: `quentlabs`
4. Enable Google Analytics (optional)
5. Create project

### 2.3 Initialize Firebase in Your Project
```bash
# Navigate to your project directory
cd /Users/abhi/Code/quentlabs/quentlabs

# Initialize Firebase
firebase init hosting

# Select your project: quentlabs
# Public directory: build
# Single-page app: Yes
# Overwrite index.html: No
```

## Step 3: Build and Deploy

### 3.1 Build the Project
```bash
npm run build
```

### 3.2 Deploy to Firebase
```bash
firebase deploy
```

Your site will be available at: `https://quentlabs-[random-id].web.app`

## Step 4: Custom Domain Setup

### 4.1 Add Custom Domain in Firebase Console
1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Enter: `quentlabs.com`
4. Click "Continue"

### 4.2 Domain Verification
Firebase will provide you with DNS records to add:

**Option A: A Record (Recommended)**
```
Type: A
Name: @
Value: [Firebase IP address]
TTL: 3600
```

**Option B: CNAME Record**
```
Type: CNAME
Name: @
Value: [Firebase hosting URL]
TTL: 3600
```

### 4.3 Add www Subdomain (Optional)
```
Type: CNAME
Name: www
Value: quentlabs.com
TTL: 3600
```

### 4.4 Update DNS Records
1. Log into your domain registrar (GoDaddy, Namecheap, etc.)
2. Navigate to DNS management
3. Add the records provided by Firebase
4. Wait for DNS propagation (5-60 minutes)

### 4.5 SSL Certificate
Firebase automatically provisions SSL certificates via Let's Encrypt. This process takes 5-10 minutes after DNS propagation.

## Step 5: Verify Deployment

### 5.1 Check Domain Status
1. Go to Firebase Console → Hosting
2. Verify domain status shows "Connected"
3. SSL certificate should show "Valid"

### 5.2 Test Your Site
- Visit `https://quentlabs.com`
- Test all pages and functionality
- Check mobile responsiveness
- Verify form submissions (if any)

## Step 6: Continuous Deployment (Optional)

### 6.1 GitHub Actions Setup
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    - name: Install dependencies
      run: npm install
    - name: Build
      run: npm run build
    - name: Deploy to Firebase
      uses: FirebaseExtended/action-hosting-deploy@v0
      with:
        repoToken: '${{ secrets.GITHUB_TOKEN }}'
        firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
        channelId: live
        projectId: quentlabs
```

### 6.2 Manual Deployment
For manual deployments:
```bash
# Build and deploy
npm run build && firebase deploy

# Deploy only hosting
firebase deploy --only hosting
```

## Troubleshooting

### Common Issues

**1. Domain not connecting**
- Check DNS records are correct
- Wait for DNS propagation (up to 24 hours)
- Verify domain is not already in use

**2. SSL certificate issues**
- Ensure DNS is properly configured
- Wait for certificate provisioning (5-10 minutes)
- Check domain verification status

**3. Build failures**
- Ensure all dependencies are installed
- Check for TypeScript errors
- Verify environment variables

**4. Performance issues**
- Enable Firebase CDN
- Optimize images
- Check bundle size

### Performance Optimization

1. **Enable Firebase CDN**:
   - Go to Firebase Console → Hosting
   - Enable "Use Firebase Hosting CDN"

2. **Optimize Images**:
   - Use WebP format
   - Compress images
   - Use appropriate sizes

3. **Bundle Optimization**:
   - Enable code splitting
   - Remove unused dependencies
   - Use production build

## Monitoring and Analytics

### Firebase Analytics
1. Enable in Firebase Console
2. Add tracking code to your app
3. Monitor user behavior

### Performance Monitoring
1. Enable Firebase Performance
2. Monitor Core Web Vitals
3. Track loading times

## Security Considerations

1. **HTTPS**: Automatically enabled by Firebase
2. **Headers**: Configure security headers in `firebase.json`
3. **CSP**: Add Content Security Policy headers
4. **Rate Limiting**: Consider implementing for forms

## Backup and Recovery

1. **Code Backup**: Use Git for version control
2. **Firebase Backup**: Enable automatic backups
3. **Domain Backup**: Keep DNS records documented

## Support

- Firebase Documentation: https://firebase.google.com/docs/hosting
- Firebase Support: https://firebase.google.com/support
- Community: https://stackoverflow.com/questions/tagged/firebase-hosting

## Next Steps

After successful deployment:

1. Set up monitoring and analytics
2. Configure custom error pages
3. Implement A/B testing
4. Add login/dashboard features (future)
5. Set up CI/CD pipeline
6. Configure staging environment

Your Quent Labs landing page should now be live at `https://quentlabs.com`! 🚀
