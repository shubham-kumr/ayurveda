import React from 'react';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: "Courses",
    description: "Professional Ayurveda courses and certifications designed for students, practitioners, and healthcare professionals. Comprehensive educational content and training programs.",
    image: "/images/services/courses.webp",
    features: [
      "Expert-designed curricula",
      "Interactive learning modules", 
      "Professional certifications",
      "Practical training components"
    ],
    link: "/services/courses"
  },
  {
    id: 2,
    title: "Online Classes",
    description: "Live and recorded Ayurveda sessions with interactive learning modules and expert-led instruction for flexible, accessible education.",
    image: "/images/services/online-classes.webp",
    features: [
      "Live interactive sessions",
      "Recorded class access",
      "Expert instructors",
      "Flexible scheduling"
    ],
    link: "/services/online-classes"
  },
  {
    id: 3,
    title: "Marketing & Branding",
    description: "Comprehensive digital marketing and branding solutions specifically tailored for Ayurveda practitioners, clinics, colleges, and healthcare organizations.",
    image: "/images/services/marketing.webp",
    features: [
      "Digital marketing strategies",
      "Brand development",
      "Social media management",
      "Website optimization"
    ],
    link: "/services/marketing-branding"
  },
  {
    id: 4,
    title: "Thesis Writing",
    description: "Expert assistance with research papers, thesis writing, and academic publication support for Ayurveda students and researchers.",
    image: "/images/services/thesis.webp",
    features: [
      "Research methodology guidance",
      "Thesis structure support",
      "Academic writing assistance",
      "Publication guidance"
    ],
    link: "/services/thesis-writing"
  },
  {
    id: 5,
    title: "Scientific Paper Writing",
    description: "Professional support for academic publication, research papers, and scientific writing in the field of Ayurveda and traditional medicine.",
    image: "/images/services/scientific.webp", 
    features: [
      "Research paper development",
      "Journal submission support",
      "Peer review assistance",
      "Scientific methodology"
    ],
    link: "/services/scientific-paper-writing"
  },
  {
    id: 6,
    title: "Online Consultation",
    description: "Remote Ayurveda consultations with experienced practitioners, offering personalized health guidance and treatment plans.",
    image: "/images/services/courses.webp",
    features: [
      "Experienced practitioners",
      "Personalized treatment plans",
      "Convenient scheduling",
      "Follow-up support"
    ],
    link: "/services/online-consultation"
  }
];

const specializedServices = [
  {
    category: "For Practitioners",
    services: [
      "Marketing of Ayurveda Practitioners",
      "Personal branding and digital presence",
      "Professional portfolio development",
      "Patient engagement strategies"
    ]
  },
  {
    category: "For Healthcare Facilities", 
    services: [
      "Ayurveda Clinics & Hospitals Marketing",
      "Healthcare facility branding",
      "Patient acquisition campaigns",
      "Reputation management"
    ]
  },
  {
    category: "For Educational Institutions",
    services: [
      "Ayurveda Colleges/Institutes Marketing",
      "Student recruitment campaigns",
      "Academic program promotion",
      "Institutional branding"
    ]
  },
  {
    category: "For Organizations",
    services: [
      "Ayurveda NGO & Organizations",
      "Community outreach programs",
      "Health camp marketing",
      "Event promotion and management"
    ]
  }
];

const productMarketing = [
  {
    type: "B2B",
    description: "Business to Business marketing for wholesale and professional product distribution",
    focus: "Professional partnerships, bulk sales, distributor networks"
  },
  {
    type: "B2C", 
    description: "Business to Consumer marketing for direct customer engagement and sales",
    focus: "Consumer education, retail strategies, brand awareness"
  },
  {
    type: "D2C",
    description: "Direct to Consumer marketing for brand-direct sales and customer relationships",
    focus: "E-commerce optimization, customer loyalty, direct sales"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-poppins">
            Our Services - Empowering Ayurveda Growth
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            AyurWings offers comprehensive solutions for the Ayurveda industry with innovative services, 
            fostering growth, and empowering professionals across the entire ecosystem.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="mx-auto mt-20 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 font-poppins mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="font-semibold text-blue-600 mr-2">•</span>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Services Section */}
        <div className="mx-auto mt-20 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 font-poppins mb-16">
            Specialized Marketing & Branding Solutions
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {specializedServices.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-slate-900 font-poppins mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start">
                      <span className="font-semibold text-green-600 mr-2">✓</span>
                      <span className="text-slate-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Product Marketing Section */}
        <div className="mx-auto mt-20 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 font-poppins mb-16">
            Product Marketing Solutions
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {productMarketing.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">{product.type}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-poppins mb-3">
                  {product.type} Marketing
                </h3>
                <p className="text-slate-600 mb-4">
                  {product.description}
                </p>
                <p className="text-sm text-slate-500 italic">
                  Focus: {product.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Video Content Section */}
        <div className="mx-auto mt-20 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 font-poppins mb-16">
            Educational Video Content
          </h2>
          
          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Ayurvedic Dermatology",
                "Ayurvedic Urology", 
                "Charak Vyakhayan Mala Series",
                "Basti Chikitsa (Enema Therapy)",
                "Raktamokshan (Bloodletting)",
                "Pain Management",
                "Gynecological Disorders",
                "Menstrual Health",
                "Garbh Sanskar (Prenatal Care)"
              ].map((topic, index) => (
                <div key={index} className="flex items-center">
                  <span className="font-semibold text-blue-600 mr-2">▶</span>
                  <span className="text-slate-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mx-auto mt-20 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 font-poppins mb-16">
            Additional Services
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Digital Marketing",
                description: "Complete digital presence solutions for Ayurveda businesses"
              },
              {
                title: "Campaign Management", 
                description: "Marketing campaign strategy and execution"
              },
              {
                title: "Content Creation",
                description: "Educational and marketing content development"
              },
              {
                title: "Website Development",
                description: "Professional web presence creation"
              },
              {
                title: "Brand Strategy & Design",
                description: "Complete branding solutions for Ayurveda businesses"
              },
              {
                title: "Event Marketing",
                description: "Ayurveda event promotion and management"
              },
              {
                title: "Medical Camp Marketing",
                description: "Community outreach and health camp promotion"
              },
              {
                title: "Startup Marketing",
                description: "Business development and growth strategies for Ayurveda startups"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 font-poppins mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-20 max-w-7xl">
          <div className="bg-blue-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white font-poppins mb-4">
              Ready to Grow Your Ayurveda Business?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Join thousands of Ayurveda professionals who trust AyurWings for their growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors duration-200"
              >
                Get Started Today
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}