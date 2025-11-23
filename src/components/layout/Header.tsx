'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Disclosure } from '@headlessui/react';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'About Us', 
    href: '/about' 
  },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Courses', href: '/services/courses' },
      { name: 'Online Classes', href: '/services/online-classes' },
      {
        name: 'Marketing & Branding',
        href: '/services/marketing-branding',
        children: [
          { name: 'Marketing of Ayurveda Practitioners', href: '/services/marketing-branding/marketing-of-ayurveda-practitioners' },
          { name: 'Ayurveda Clinics & Hospitals', href: '/services/marketing-branding/ayurveda-clinics-hospitals' },
          { name: 'Marketing of Ayurveda Startup', href: '/services/marketing-branding/marketing-of-ayurveda-startup' },
          { name: 'Ayurveda Colleges/Institutes', href: '/services/marketing-branding/ayurveda-colleges-institutes' },
          { name: 'Ayurveda Events', href: '/services/marketing-branding/ayurveda-events' },
          { name: 'Medical Camps', href: '/services/marketing-branding/medical-camps' },
          { name: 'Ayurveda NGO & Organizations', href: '/services/marketing-branding/ayurveda-ngo-organizations' },
          { name: 'Product Marketing', href: '/services/marketing-branding/product-marketing' },
        ]
      },
      { name: 'Thesis Writing', href: '/services/thesis-writing' },
      { name: 'Scientific Paper Writing', href: '/services/scientific-paper-writing' },
      { name: 'Online Consultation', href: '/services/online-consultation' },
    ]
  },
  {
    name: 'Videos',
    href: '/videos',
    children: [
      { name: 'Basti Chikitsa', href: '/videos/basti-chikitsa' },
      { name: 'Charak Path Vyakhyaanmala-2', href: '/videos/charak-path-vyakhyaanmala-2' },
      { name: 'Gynecological Disorders', href: '/videos/gynecological-disorders' },
      { name: 'Pain Management', href: '/videos/pain-management' },
      { name: 'Raktamokshan', href: '/videos/raktamokshan' },
    ]
  },
  { name: 'Contact Us', href: '/contact' },
  { name: 'News & Jobs', href: '/news-jobs' },
];

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm border-b border-gray-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <div className="relative w-20 h-12">
                    <Image
                      src="/images/logo/logo.png"
                      alt="AyurWings - India's First Edtech Ayurveda Platform"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="ml-3">
                    <h1 className="text-sm font-medium text-teal-800 hidden sm:block">
                      India's First Edtech Ayurveda Platform!!
                    </h1>
                  </div>
                </Link>
              </div>

              {/* Desktop navigation */}
              <div className="hidden lg:flex lg:items-center lg:space-x-8">
                {navigation.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.children ? (
                      <>
                        <button className="flex items-center text-slate-700 hover:text-blue-600 font-medium py-2 px-1 transition-colors duration-200">
                          {item.name}
                          <ChevronDownIcon className="ml-1 h-4 w-4" />
                        </button>
                        <div className="absolute left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                          <div className="bg-white rounded-lg shadow-xl border py-4">
                            {item.children.map((child) => (
                              <div key={child.name} className="relative group/sub">
                                {child.children ? (
                                  <>
                                    <div className="flex items-center justify-between px-4 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                      <span>{child.name}</span>
                                      <ChevronRightIcon className="h-4 w-4" />
                                    </div>
                                    <div className="absolute left-full top-0 ml-1 w-64 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-50">
                                      <div className="bg-white rounded-lg shadow-xl border py-4">
                                        {child.children.map((grandchild) => (
                                          <Link
                                            key={grandchild.name}
                                            href={grandchild.href}
                                            className="block px-4 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                                          >
                                            {grandchild.name}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <Link
                                    href={child.href}
                                    className="block px-4 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                                  >
                                    {child.name}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-slate-700 hover:text-blue-600 font-medium py-2 px-1 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <Disclosure>
                      {({ open: submenuOpen }) => (
                        <>
                          <Disclosure.Button className="flex justify-between items-center w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                            {item.name}
                            <ChevronDownIcon 
                              className={`${submenuOpen ? 'rotate-180' : ''} ml-2 h-4 w-4 transition-transform duration-200`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="pl-4">
                            {item.children.map((child) => (
                              <div key={child.name}>
                                {child.children ? (
                                  <Disclosure>
                                    {({ open: subSubmenuOpen }) => (
                                      <>
                                        <Disclosure.Button className="flex justify-between items-center w-full text-left px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                                          {child.name}
                                          <ChevronDownIcon 
                                            className={`${subSubmenuOpen ? 'rotate-180' : ''} h-4 w-4 transition-transform duration-200`}
                                          />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="pl-4">
                                          {child.children.map((grandchild) => (
                                            <Link
                                              key={grandchild.name}
                                              href={grandchild.href}
                                              className="block px-3 py-2 text-xs text-slate-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                                            >
                                              {grandchild.name}
                                            </Link>
                                          ))}
                                        </Disclosure.Panel>
                                      </>
                                    )}
                                  </Disclosure>
                                ) : (
                                  <Link
                                    href={child.href}
                                    className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                                  >
                                    {child.name}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}