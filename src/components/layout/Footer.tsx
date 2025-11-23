import React from 'react';
import Link from 'next/link';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon 
} from '@heroicons/react/24/outline';

const footerNavigation = {
  services: [
    { name: 'Courses', href: '/services/courses' },
    { name: 'Online Classes', href: '/services/online-classes' },
    { name: 'Marketing & Branding', href: '/services/marketing-branding' },
    { name: 'Thesis Writing', href: '/services/thesis-writing' },
    { name: 'Scientific Paper Writing', href: '/services/scientific-paper-writing' },
    { name: 'Online Consultation', href: '/services/online-consultation' },
  ],
  videos: [
    { name: 'Ayurvedic Dermatology', href: '/videos/ayurvedic-dermatology' },
    { name: 'Ayurvedic Urology', href: '/videos/ayurvedic-urology' },
    { name: 'Pain Management', href: '/videos/pain-management' },
    { name: 'Gynecological Disorders', href: '/videos/gynecological-disorders' },
    { name: 'Basti Chikitsa', href: '/videos/basti-chikitsa' },
    { name: 'Raktamokshan', href: '/videos/raktamokshan' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'News & Jobs', href: '/news-jobs' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/abmssolution',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/abmsmarketingsolution/',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.017 0C8.396 0 7.929.01 7.694.048 7.461.085 7.252.16 7.073.252 6.894.344 6.746.461 6.638.572 6.529.683 6.459.834 6.429 1.002 6.4 1.171 6.4 1.641 6.4 2.017v19.966c0 .375 0 .845.029 1.013.03.168.1.32.209.43.108.111.256.228.435.32.179.092.388.167.621.204.235.037.702.048 4.323.048s4.088-.01 4.323-.048c.233-.037.442-.112.621-.204.179-.092.327-.209.435-.32.109-.11.179-.262.209-.43.029-.168.029-.638.029-1.013V2.017c0-.376 0-.846-.029-1.014-.03-.168-.1-.32-.209-.43-.108-.111-.256-.228-.435-.32-.179-.092-.388-.167-.621-.204C16.105.01 15.638 0 12.017 0zm0 1.8c3.608 0 4.034.011 4.261.047.224.009.346.041.427.069.107.041.184.091.264.171.08.08.13.157.171.264.028.081.06.203.069.427.036.227.047.653.047 4.261s-.011 4.034-.047 4.261c-.009.224-.041.346-.069.427-.041.107-.091.184-.171.264-.08.08-.157.13-.264.171-.081.028-.203.06-.427.069-.227.036-.653.047-4.261.047s-4.034-.011-4.261-.047c-.224-.009-.346-.041-.427-.069-.107-.041-.184-.091-.264-.171-.08-.08-.13-.157-.171-.264-.028-.081-.06-.203-.069-.427-.036-.227-.047-.653-.047-4.261s.011-4.034.047-4.261c.009-.224.041-.346.069-.427.041-.107.091-.184.171-.264.08-.08.157-.13.264-.171.081-.028.203-.06.427-.069.227-.036.653-.047 4.261-.047z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/105048864/',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-gray-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 font-poppins">
                AyurWings
              </h3>
              <p className="text-sm text-slate-600 mt-2 max-w-sm">
                India's First EdTech Platform Dedicated to Ayurveda. Empowering ancient wisdom through modern education.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-slate-600">India</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-slate-600">+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-slate-600">info@ayurwings.com</span>
              </div>
            </div>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-600 transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-slate-900">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-slate-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-slate-900">Videos</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.videos.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-slate-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-slate-900">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-slate-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-200 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-slate-500 text-center">
            &copy; {new Date().getFullYear()} AyurWings. All rights reserved. Empowering Ayurveda through digital innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}