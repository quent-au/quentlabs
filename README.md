# Quent Labs Landing Page

A modern, responsive landing page for Quent Labs - Where AI builds quality.

## Features

- **Modern Design**: Clean, professional design with Tailwind CSS
- **Mobile Friendly**: Fully responsive design that works on all devices
- **TypeScript**: Type-safe React components
- **Performance**: Optimized for fast loading and smooth interactions
- **SEO Ready**: Proper meta tags and semantic HTML

## Tech Stack

- React 18 with TypeScript
- Tailwind CSS for styling
- Firebase Hosting for deployment
- Custom domain support

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn
- Firebase CLI

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Deployment

### Firebase Hosting Setup

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase in your project:
```bash
firebase init hosting
```

4. Build the project:
```bash
npm run build
```

5. Deploy to Firebase:
```bash
firebase deploy
```

### Custom Domain Setup

1. In Firebase Console, go to Hosting
2. Click "Add custom domain"
3. Enter your domain: `quentlabs.com`
4. Follow the verification steps
5. Update DNS records as instructed by Firebase
6. Wait for SSL certificate to be provisioned

### Domain Configuration

For `quentlabs.com` domain:

1. **A Record**: Point to Firebase hosting IP
2. **CNAME Record**: For www subdomain
3. **SSL Certificate**: Firebase automatically provisions Let's Encrypt certificates

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── WhyChooseQuent.tsx
│   ├── HowQuentWorks.tsx
│   ├── CLIExamples.tsx
│   ├── LocalVsCloud.tsx
│   ├── FocusOnFeatures.tsx
│   ├── ReadyToTransform.tsx
│   └── Footer.tsx
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles with Tailwind
```

## Customization

### Colors
Update `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  accent: {
    // Your accent colors  
  }
}
```

### Content
Edit the component files to update text, images, and links.

### Styling
Use Tailwind utility classes or add custom CSS in `src/index.css`.

## Performance Optimization

- Images are optimized for web
- CSS is purged in production
- JavaScript is minified
- Static assets are cached

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2024 Quent Labs. All rights reserved.







