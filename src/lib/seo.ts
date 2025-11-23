// SEO configuration for AyurWings
export const seoConfig = {
  title: "AyurWings - India's First EdTech Platform Dedicated to Ayurveda",
  description: "Empowering ancient wisdom through modern education. Join thousands of students and practitioners in their journey to master the science of Ayurveda with comprehensive courses, expert guidance, and cutting-edge digital learning tools.",
  keywords: "Ayurveda, EdTech, Online Learning, Courses, Education, Ancient Medicine, Natural Healing, Ayurvedic Medicine, Traditional Medicine, Healthcare Education",
  author: "AyurWings Team",
  siteUrl: "https://ayurwings.com",
};

// JSON-LD structured data for organization
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://ayurwings.com/#organization',
  name: 'Ayurwings Branding And Marketing Solutions',
  url: 'https://ayurwings.com/',
  logo: {
    '@type': 'ImageObject',
    url: 'https://ayurwings.com/images/ayurwings-logo.png',
    width: 1724,
    height: 1210,
  },
  sameAs: [
    'https://www.facebook.com/abmssolution',
    'https://www.instagram.com/abmsmarketingsolution/',
    'https://www.linkedin.com/company/105048864/',
  ],
};

// JSON-LD for educational organization
export const educationalOrganizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'AyurWings',
  description: 'India\'s First EdTech Platform Dedicated to Ayurveda',
  url: 'https://ayurwings.com/',
  sameAs: [
    'https://www.facebook.com/abmssolution',
    'https://www.instagram.com/abmsmarketingsolution/',
    'https://www.linkedin.com/company/105048864/',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'info@ayurwings.com',
  },
};