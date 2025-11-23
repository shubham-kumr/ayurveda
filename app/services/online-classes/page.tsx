'use client';
import { useState } from 'react';
import Layout from '../../../src/components/layout/Layout';
import ServiceModal from '../../../src/components/ServiceModal';
import Image from 'next/image';
import Link from 'next/link';

export default function OnlineClassesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = () => {
    setIsModalOpen(true);
  };
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Online Classes
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-7 sm:leading-8">
              Join our comprehensive online Ayurveda courses led by renowned practitioners and experts. 
              Learn from the comfort of your home with live demonstrations and interactive sessions.
            </p>
          </div>

          {/* Upcoming Online Class */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-linear-to-r from-blue-600 to-green-600 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Our Upcoming Online Class:
                </h2>
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                      Clinical Management of Gynaecological Disorders through Ayurveda!
                    </h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-6 sm:leading-7">
                      Comprehensive course covering traditional Ayurvedic approaches to women's health issues, 
                      combining ancient wisdom with modern understanding.
                    </p>
                    <Link
                      href="https://forms.gle/vKBmHeM3DmnuGAzQ8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                    >
                      Register Now
                    </Link>
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/online-classes/gynaecological-disorders.jpeg"
                      alt="Clinical Management of Gynaecological Disorders"
                      width={500}
                      height={500}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Currently Running Online Class */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-linear-to-r from-green-600 to-teal-600 px-8 py-6">
                <h2 className="text-3xl font-bold text-white">
                  Our Running Online Class:
                </h2>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <Image
                      src="/images/online-classes/pain-management-course.jpeg"
                      alt="Certificate Course In Pain Management"
                      width={500}
                      height={500}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Certificate Course In Pain Management through Ayurveda
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Join our comprehensive course & become a Certified Natural Pain Healer.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Learn & grow with renowned International Speaker & Practitioner <strong>Vd. Prashant Tiwari Sir</strong>.
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Live Demonstrations Include:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Agnikarma</li>
                        <li>• Viddhakarma</li>
                        <li>• Alabu (Cupping) Therapy</li>
                        <li>• Potli making</li>
                        <li>• Upnaha making</li>
                        <li>• Many more techniques for pain management</li>
                      </ul>
                    </div>
                    
                    <Link
                      href="https://forms.gle/AnAVvtLxbmGENGfc7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Past Online Classes */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Past Online Classes:
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our previously conducted courses that have helped hundreds of practitioners 
                enhance their knowledge and skills in Ayurvedic medicine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Basti Chikitsa */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src="/images/online-classes/basti-chikitsa.jpeg"
                    alt="Clinical Application Of Basti Chikitsa"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Clinical Application Of Basti Chikitsa
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Comprehensive course on the therapeutic applications of Basti therapy in clinical practice.
                  </p>
                  <button
                    onClick={() => handleLearnMore()}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200"
                  >
                    Learn More →
                  </button>
                </div>
              </div>

              {/* Charak Vyakhyan Mala Part-1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src="/images/online-classes/charak-vyakhyan-1.jpeg"
                    alt="Charak Samhita Vyakhan Mala Part-I"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Charak Samhita Vyakhan Mala Part-I
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Deep dive into the fundamental principles of Charak Samhita with expert commentary.
                  </p>
                  <button
                    onClick={() => handleLearnMore()}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200"
                  >
                    Learn More →
                  </button>
                </div>
              </div>

              {/* Raktamokshan */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src="/images/online-classes/raktamokshan.jpeg"
                    alt="Online Certificate Course in Raktamokshan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Online Certificate Course in Raktamokshan
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Master the ancient art of bloodletting therapy with modern safety protocols.
                  </p>
                  <button
                    onClick={() => handleLearnMore()}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200"
                  >
                    Learn More →
                  </button>
                </div>
              </div>

              {/* Charak Vyakhyan Mala Part-2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src="/images/online-classes/charak-vyakhyan-2.jpeg"
                    alt="Charak Samhita Vyakhan Mala Part-2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Charak Samhita Vyakhan Mala Part-2
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Advanced concepts and practical applications from Charak Samhita.
                  </p>
                  <button
                    onClick={() => handleLearnMore()}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-16 bg-linear-to-r from-blue-600 to-green-600 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Ayurveda Journey?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of practitioners who have enhanced their skills through our comprehensive online courses. 
              Learn from experts, gain practical knowledge, and earn certifications.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us for More Information
            </Link>
          </section>
        </div>
      </div>
      
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Layout>
  );
}