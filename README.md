# AyurWings - Next.js EdTech Platform

## Overview
AyurWings is India's First EdTech Platform Dedicated to Ayurveda, built with Next.js 16 and modern web technologies. This platform empowers ancient wisdom through modern education, providing comprehensive courses, expert guidance, and cutting-edge digital learning tools.

## Tech Stack
- **Framework**: Next.js 16.0.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Headless UI v2.2.9
- **Icons**: Heroicons v2.2.0, Lucide React v0.554.0
- **Fonts**: Google Fonts (Inter, Poppins)

## Features
- 🎓 **Comprehensive Courses**: Structured Ayurvedic education programs
- 💻 **Online Classes**: Interactive live sessions with experts
- 📱 **Responsive Design**: Mobile-first approach with modern UI
- 🔍 **SEO Optimized**: Built-in metadata and structured data
- ⚡ **Performance**: Fast loading with Next.js optimizations
- 🎨 **Modern UX**: Clean, accessible design with smooth animations

## Project Structure
```
ayurwings-nextjs/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx   # Navigation header
│   │   │   ├── Footer.tsx   # Site footer
│   │   │   └── Layout.tsx   # Main layout wrapper
│   │   └── HomePage.tsx     # Homepage component
│   └── lib/
│       └── seo.ts           # SEO configuration
├── public/                  # Static assets
├── package.json             # Dependencies
└── README.md                # This file
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone <repository-url>
cd ayurwings-nextjs
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Components

### Homepage Features
- **Hero Section**: Compelling introduction with call-to-action buttons
- **Services Grid**: Six main service offerings with interactive cards
- **Statistics**: Trust indicators and community metrics
- **CTA Section**: Conversion-focused bottom section

### Navigation
- **Desktop Menu**: Full navigation with dropdown menus
- **Mobile Menu**: Hamburger menu with accessible design
- **Service Categories**: Organized service and video categories

### SEO & Performance
- **Metadata**: Comprehensive SEO tags and Open Graph data
- **Structured Data**: JSON-LD for enhanced search results
- **Font Optimization**: Efficient Google Fonts loading
- **Image Optimization**: Next.js Image component usage

## Services Offered
1. **Courses** - Comprehensive Ayurvedic education programs
2. **Online Classes** - Interactive sessions with expert practitioners  
3. **Marketing & Branding** - Strategic solutions for Ayurvedic businesses
4. **Thesis Writing** - Academic research assistance
5. **Scientific Paper Writing** - Publication support
6. **Online Consultation** - Connect with qualified Ayurvedic doctors

## Design Principles
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Mobile-First**: Responsive design optimized for all devices
- **Performance**: Optimized loading and rendering
- **User Experience**: Intuitive navigation and clear information hierarchy

## Future Enhancements
- [ ] User authentication and profiles
- [ ] Course enrollment system
- [ ] Video streaming platform
- [ ] Payment integration
- [ ] Learning management system (LMS)
- [ ] Community forums
- [ ] Mobile app development

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License
This project is proprietary and confidential.

## Contact
For questions or support, please contact the AyurWings team.

---

Built with ❤️ for the Ayurvedic community
