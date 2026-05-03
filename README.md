# Tuition Centre Website Template

A modern, responsive, and high-conversion 5-page website template built with Next.js 14, TypeScript, and Tailwind CSS. Perfect for tuition centres, education businesses, and tutoring services in Malaysia.

## 🚀 Features

- **5 Complete Pages**: Home, About Us, Courses, Announcements, Contact
- **Fully Responsive**: Mobile-first design that works on all devices
- **Fast & Optimized**: Built with Next.js 14 App Router for optimal performance
- **SEO-Friendly**: Proper metadata structure for better search rankings
- **Easy Customization**: CSS variables and clear comments for quick changes
- **WhatsApp Integration**: Direct enquiry buttons with pre-filled messages
- **Modern UI**: Clean, professional design with smooth animations
- **TypeScript**: Type-safe code for better development experience
- **Production-Ready**: Vercel-friendly setup for easy deployment

## 📋 Pages Overview

1. **Homepage** - Hero section, about intro, course highlights, announcements, testimonials
2. **About Us** - Story, mission/vision, core values, team, statistics
3. **Courses** - Complete programme listings with detailed features
4. **Announcements** - News, achievements, and events in card grid layout
5. **Contact** - Contact form with WhatsApp integration, location info, operating hours

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.3
- **Language**: TypeScript 5.4.5
- **Styling**: Tailwind CSS 3.4.3
- **Carousel**: Embla Carousel React 8.0.2
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Easy Customization Guide

### 1. Brand Colors

Edit `tailwind.config.ts` to change your brand colors:

```typescript
colors: {
  primary: { ... },    // Main brand color
  secondary: { ... },  // Secondary brand color
  accent: { ... },     // Accent/CTA color
}
```

Or edit CSS variables in `app/globals.css`:

```css
:root {
  --color-primary: 14 165 233;
  --color-secondary: 217 70 239;
  --color-accent: 249 115 22;
}
```

### 2. Contact Information

Update all contact details in these files:

- `components/header.tsx` - WhatsApp number in navigation
- `components/footer.tsx` - Phone, email, address, social links
- `app/contact/page.tsx` - All contact information and form WhatsApp integration

**Search for**: `60123456789` and replace with your WhatsApp number
**Search for**: `info@excellencetuition.com` and replace with your email

### 3. Logo & Branding

Replace the placeholder logo in `components/header.tsx` and `components/footer.tsx`:

```tsx
// Current placeholder:
<div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg">
  <span className="text-white font-bold text-xl">E</span>
</div>

// Replace with your logo:
<Image src="/logo.png" alt="Your Logo" width={40} height={40} />
```

### 4. Images

Replace placeholder images with your own:

- **Hero backgrounds**: Search for `images.unsplash.com` URLs in page files
- **Team photos**: Update in `app/about/page.tsx`
- **Add images to**: `/public` folder and reference as `/image-name.jpg`

### 5. Content Updates

#### Homepage (`app/page.tsx`)
- Update `courses` array with your actual programmes
- Update `announcements` array with your latest news
- Modify hero title and subtitle

#### About Page (`app/about/page.tsx`)
- Edit story, mission, vision text
- Update team member information
- Change statistics in the stats section

#### Courses Page (`app/courses/page.tsx`)
- Modify `allCourses` array with your programmes
- Update features and descriptions

#### Announcements Page (`app/announcements/page.tsx`)
- Update `allAnnouncements` array with your news

#### Contact Page (`app/contact/page.tsx`)
- Update operating hours
- Add Google Maps embed (replace placeholder)
- Modify form subject options

### 6. Testimonials

Edit testimonials in `components/testimonial-carousel.tsx`:

```typescript
const testimonials: Testimonial[] = [
  {
    name: "Your Student Name",
    role: "Parent of SPM Student",
    content: "Your testimonial here...",
    rating: 5,
  },
  // Add more...
];
```

### 7. Metadata & SEO

Update SEO information in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Tuition Centre Name",
  description: "Your description...",
  // Update all metadata fields
};
```

## 📱 WhatsApp Integration

The template includes WhatsApp integration in multiple places:

1. **Header**: "Enquire Now" button
2. **Homepage**: CTA sections
3. **Contact Form**: Submits to WhatsApp with form data

**To customize**: Search for `wa.me/60123456789` and replace the number.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

Or use Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
windsurf-project/
├── app/
│   ├── about/
│   │   └── page.tsx           # About Us page
│   ├── announcements/
│   │   └── page.tsx           # Announcements page
│   ├── contact/
│   │   └── page.tsx           # Contact page
│   ├── courses/
│   │   └── page.tsx           # Courses page
│   ├── globals.css            # Global styles & CSS variables
│   ├── layout.tsx             # Root layout with header/footer
│   └── page.tsx               # Homepage
├── components/
│   ├── announcement-card.tsx  # Announcement card component
│   ├── course-card.tsx        # Course card component
│   ├── footer.tsx             # Footer component
│   ├── header.tsx             # Header/navigation component
│   ├── hero.tsx               # Hero section component
│   └── testimonial-carousel.tsx # Testimonials carousel
├── public/                    # Static assets (add your images here)
├── next.config.mjs            # Next.js configuration
├── package.json               # Dependencies
├── tailwind.config.ts         # Tailwind configuration
└── tsconfig.json              # TypeScript configuration
```

## 🎯 Key Components

### Header (`components/header.tsx`)
- Sticky navigation
- Mobile responsive menu
- WhatsApp CTA button

### Footer (`components/footer.tsx`)
- Contact information
- Quick links
- Social media links
- Certifications badges

### Hero (`components/hero.tsx`)
- Reusable hero component
- Customizable height
- Background image support
- CTA button

### Course Card (`components/course-card.tsx`)
- Icon display
- Feature list
- CTA button

### Testimonial Carousel (`components/testimonial-carousel.tsx`)
- Auto-playing carousel
- Manual navigation
- Star ratings

## 💡 Tips

1. **Images**: Use high-quality images from your Facebook/Instagram or professional photos
2. **Colors**: Stick to 2-3 brand colors for consistency
3. **Content**: Keep text concise and benefit-focused
4. **CTAs**: Make WhatsApp numbers and contact buttons prominent
5. **Mobile**: Always test on mobile devices - most visitors will be on mobile
6. **Loading**: Optimize images before uploading (use WebP format when possible)

## 🔧 Common Customizations

### Change Font

Edit `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({ subsets: ["latin"] });
```

### Add New Page

1. Create folder in `app/` directory
2. Add `page.tsx` file
3. Update navigation in `components/header.tsx`

### Modify Button Styles

Edit button classes in `app/globals.css`:

```css
.btn-primary {
  @apply bg-primary-500 hover:bg-primary-600 ...;
}
```

## 📞 Support

For questions or issues:
- Check the comments in the code (marked with `// EASY CUSTOMIZATION`)
- All customizable sections are clearly marked
- Contact information is centralized in specific files

## 📄 License

This template is free to use for your tuition centre or education business.

---

**Built with ❤️ for education businesses in Malaysia**
