import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Service {
  name: string;
  description: string;
  image: string;
  href: string;
  anchor?: string;
  color: string;
  hoverColor: string;
}

const services: Service[] = [
  {
    name: 'Courses',
    description: 'Specialized courses designed for licensed Ayurveda doctors to deepen their expertise in specific areas like Panchakarma, Rasayana, and Kshar Sutra therapies.',
    image: '/images/services/courses.webp',
    href: '/services',
    anchor: 'courses',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    hoverColor: 'hover:bg-blue-100'
  },
  {
    name: 'Online Classes',
    description: 'Stay ahead with our upcoming and fast-track Ayurveda online courses, designed exclusively for Ayurveda doctors. Stay updated, grow your skills, and elevate your practice with certified, expert-led programs.',
    image: '/images/services/online-classes.webp',
    href: '/services',
    anchor: 'online-classes',
    color: 'bg-green-50 text-green-700 border-green-200',
    hoverColor: 'hover:bg-green-100'
  },
  {
    name: 'Marketing & Branding',
    description: 'Grow your practice with tailored marketing and branding services designed for Ayurveda practitioners and clinics, helping you attract more patients and build trust through impactful digital campaigns.',
    image: '/images/services/marketing.webp',
    href: '/services',
    anchor: 'marketing-branding',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
    hoverColor: 'hover:bg-purple-100'
  },
  {
    name: 'Thesis Writing',
    description: 'Are you a postgraduate or Ph.D. student of Ayurveda struggling with your thesis? Don\'t let the stress weigh you down! We are here to provide professional thesis writing and support services tailored to your academic and research needs.',
    image: '/images/services/thesis.webp',
    href: '/services',
    anchor: 'thesis-writing',
    color: 'bg-orange-50 text-orange-700 border-orange-200',
    hoverColor: 'hover:bg-orange-100'
  },
  {
    name: 'Scientific Paper Writing',
    description: 'Boost your credibility with expert scientific writing services, including research papers, case studies, and journal articles rooted in authentic Ayurvedic principles.',
    image: '/images/services/scientific.webp',
    href: '/services',
    anchor: 'scientific-paper-writing',
    color: 'bg-red-50 text-red-700 border-red-200',
    hoverColor: 'hover:bg-red-100'
  },
  {
    name: 'Online Consultation',
    description: 'Get personalized health solutions through one-on-one online consultations with experienced Ayurveda experts, from the comfort of your home.',
    image: '/images/services/online-consulation.jpeg',
    href: '/services',
    anchor: 'online-consultation',
    color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    hoverColor: 'hover:bg-indigo-100'
  }
];

const stats = [
  { name: 'Students Enrolled', value: '1,000+' },
  { name: 'Expert Practitioners', value: '50+' },
  { name: 'Courses Available', value: '25+' },
  { name: 'Success Stories', value: '500+' }
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-50 to-green-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl font-poppins">
                India's First{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-green-600">
                  EdTech Platform
                </span>{' '}
                Dedicated to Ayurveda
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl">
                AyurWings is a dedicated digital marketing agency specializing in Ayurveda. 
                Empower your practice with advance marketing strategies, courses, and consultation services 
                designed exclusively for Ayurveda practitioners.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/services"
                  className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
                >
                  Explore Services
                </Link>
                <Link
                  href="/videos"
                  className="text-sm font-semibold leading-6 text-slate-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Watch Videos <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            
            {/* Image - Right Side */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/images/hero-bg.jpeg"
                  alt="Ayurveda Education Platform"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-blue-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-blue-200 to-green-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-poppins">
                Trusted by Ayurveda Community Worldwide
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Join our growing community of Ayurveda enthusiasts and professionals
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col bg-slate-50 p-8">
                  <dt className="text-sm font-semibold leading-6 text-slate-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-blue-600 font-poppins">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-poppins">
              Our Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Comprehensive solutions for Ayurvedic education, practice, and research
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className={`group relative rounded-2xl border-2 ${service.color} p-8 shadow-sm transition-all duration-300 ${service.hoverColor} hover:shadow-lg`}
              >
                <div>
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight mb-3 font-poppins">
                    <Link href={service.anchor ? `${service.href}#${service.anchor}` : service.href} className="focus:outline-none hover:text-blue-600 transition-colors duration-200">
                      {service.name}
                    </Link>
                  </h3>
                  <p className="text-sm leading-6 opacity-90">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-poppins">
              Meet Our Founders
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Leading experts in Ayurveda and digital innovation
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <div className="mx-auto h-32 w-32 rounded-full overflow-hidden mb-6">
                <img 
                  src="/images/team/founder.png" 
                  alt="Vaidya Pooja Kohli"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 font-poppins">
                Founder & Director Vaidya Pooja Kohli
              </h3>
              <p className="text-blue-600 font-medium mb-3">
                Ayurveda Expert with 20+ Years of Experience
              </p>
              <p className="text-sm text-slate-600">
                Leading Ayurvedic practitioner with extensive experience in traditional healing and modern healthcare integration.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <div className="mx-auto h-32 w-32 rounded-full overflow-hidden mb-6">
                <img 
                  src="/images/team/co-founder.png" 
                  alt="Dr. Yash Chaudhary"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 font-poppins">
                Co-Founder & Director Dr. Yash Chaudhary
              </h3>
              <p className="text-blue-600 font-medium mb-3">
                Ayurveda Expert with 4+ Years of Experience
              </p>
              <p className="text-sm text-slate-600">
                Young and dynamic Ayurvedic doctor focused on integrating modern technology with traditional Ayurvedic practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="px-6 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-poppins">
              Ready to Start Your Ayurveda Journey?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Join our community and discover the ancient wisdom of Ayurveda through modern, 
              interactive learning experiences designed by experts.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/services"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
              >
                Get Started Today
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors duration-200"
              >
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}