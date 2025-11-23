'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';

export default function NewsJobsPage() {
  const [activeTab, setActiveTab] = useState('news');

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-linear-to-r from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              News &amp; Jobs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest Ayurveda news, career opportunities, and industry insights from India's First Edtech Ayurveda Platform
            </p>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setActiveTab('news')}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                    activeTab === 'news'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  News
                </button>
                <button
                  onClick={() => setActiveTab('jobs')}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                    activeTab === 'jobs'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Jobs
                </button>
              </div>
            </div>

            {/* News Tab Content */}
            {activeTab === 'news' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Ayurveda News</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Stay informed about the latest developments in Ayurveda research, education, and industry updates
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Featured News Article - Hello World */}
                  <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 lg:col-span-2">
                    <div className="aspect-video bg-linear-to-br from-green-100 to-blue-100 flex items-center justify-center">
                      <span className="text-5xl">🌿</span>
                    </div>
                    <div className="p-6">
                      <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                        Featured News
                      </span>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        Welcome to Ayurwings - India's First Edtech Ayurveda Platform
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Cupid in Flight48" x 48" Giclee print on archival paper. Discover the revolutionary approach to Ayurveda education and practice through our comprehensive digital platform. We are bridging traditional knowledge with modern technology to make Ayurveda accessible to everyone.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>March 23, 2025</span>
                        <span className="mx-2">•</span>
                        <span>By abmsmarketingsolution@gmail.com</span>
                      </div>
                    </div>
                  </article>

                  {/* News Categories Sidebar */}
                  <div className="space-y-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">News Categories</h4>
                      <ul className="space-y-3">
                        <li>
                          <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                            Ayurveda Education
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                            Research Updates
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
                            <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                            Industry News
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
                            <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                            Government Policies
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <a href="#" className="text-green-600 hover:text-green-800 transition-colors">
                            📰 Latest Press Releases
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-green-600 hover:text-green-800 transition-colors">
                            🎓 Educational Updates
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-green-600 hover:text-green-800 transition-colors">
                            🔬 Research Publications
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-green-600 hover:text-green-800 transition-colors">
                            🌍 Global Ayurveda News
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Additional News Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                  <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <span className="text-4xl">📚</span>
                    </div>
                    <div className="p-6">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                        Education
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Ayurveda Curriculum Innovation in Digital Age
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        Explore how traditional Ayurveda education is being transformed through digital platforms, making ancient wisdom accessible to modern students worldwide.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>March 20, 2025</span>
                        <span className="mx-2">•</span>
                        <span>ABMS Team</span>
                      </div>
                    </div>
                  </article>

                  <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video bg-linear-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                      <span className="text-4xl">🏥</span>
                    </div>
                    <div className="p-6">
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                        Healthcare
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Integration of Ayurveda in Modern Healthcare
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        Government initiatives and private sector collaborations are paving the way for greater integration of Ayurvedic practices in contemporary medicine.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>March 18, 2025</span>
                        <span className="mx-2">•</span>
                        <span>ABMS Team</span>
                      </div>
                    </div>
                  </article>

                  <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video bg-linear-to-br from-green-100 to-teal-100 flex items-center justify-center">
                      <span className="text-4xl">🔬</span>
                    </div>
                    <div className="p-6">
                      <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                        Research
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Breakthrough Studies in Ayurvedic Pharmacology
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        Recent scientific validation of traditional Ayurvedic formulations opens new possibilities for evidence-based integrative medicine approaches.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>March 15, 2025</span>
                        <span className="mx-2">•</span>
                        <span>Research Team</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            )}

            {/* Jobs Tab Content */}
            {activeTab === 'jobs' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Ayurveda Career Opportunities</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover exciting career opportunities for Ayurveda students, practitioners, and professionals in the growing field of traditional medicine
                  </p>
                </div>

                {/* Featured Job - From Original Content */}
                <div className="bg-blue-50 rounded-lg p-8 mb-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
                        Featured Opportunity
                      </span>
                      <h3 className="text-2xl font-semibold text-gray-900">Ayurveda Jobs For Ayurveda Students</h3>
                      <p className="text-gray-600 mt-2">Multiple Positions Available Nationwide</p>
                    </div>
                    <span className="text-4xl">🎓</span>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Work is under process - We are actively developing comprehensive job opportunities specifically tailored for Ayurveda students and fresh graduates. Our platform connects talented individuals with leading healthcare institutions, research facilities, and wellness centers across India.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Student Friendly</span>
                    <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Multiple Locations</span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Career Development</span>
                    <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">Training Provided</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>📍 All India - Multiple Cities</span>
                    <span>Posted: March 23, 2025 by abmsmarketingsolution@gmail.com</span>
                  </div>
                </div>

                {/* Job Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Clinical Practice Jobs */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">👨‍⚕️</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Clinical Practice</h4>
                        <p className="text-sm text-gray-600">Healthcare & Treatment Roles</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Ayurveda Doctors (BAMS)</li>
                      <li>• Panchakarma Specialists</li>
                      <li>• Pulse Diagnosis Experts</li>
                      <li>• Ayurveda Consultants</li>
                      <li>• Hospital Staff Positions</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <span className="text-xs text-green-600 font-medium">15+ Active Positions</span>
                    </div>
                  </div>

                  {/* Education & Training Jobs */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">🎓</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Education & Training</h4>
                        <p className="text-sm text-gray-600">Academic & Learning Roles</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• College Lecturers</li>
                      <li>• Online Course Instructors</li>
                      <li>• Training Coordinators</li>
                      <li>• Curriculum Developers</li>
                      <li>• Student Mentors</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <span className="text-xs text-blue-600 font-medium">8+ Academic Positions</span>
                    </div>
                  </div>

                  {/* Research & Development Jobs */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">🔬</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Research & Development</h4>
                        <p className="text-sm text-gray-600">Scientific & Innovation Roles</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Research Associates</li>
                      <li>• Drug Development Scientists</li>
                      <li>• Quality Control Analysts</li>
                      <li>• Clinical Trial Coordinators</li>
                      <li>• Publication Writers</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <span className="text-xs text-purple-600 font-medium">6+ Research Roles</span>
                    </div>
                  </div>

                  {/* Wellness & Hospitality Jobs */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">🌿</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Wellness & Hospitality</h4>
                        <p className="text-sm text-gray-600">Spa & Resort Opportunities</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Spa Therapists</li>
                      <li>• Wellness Consultants</li>
                      <li>• Resort Ayurveda Doctors</li>
                      <li>• Retreat Coordinators</li>
                      <li>• Wellness Program Managers</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <span className="text-xs text-green-600 font-medium">12+ Wellness Jobs</span>
                    </div>
                  </div>

                  {/* Digital & Marketing Jobs */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">💻</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Digital & Marketing</h4>
                        <p className="text-sm text-gray-600">Online Platform Roles</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Content Writers</li>
                      <li>• Digital Marketers</li>
                      <li>• Social Media Managers</li>
                      <li>• E-learning Specialists</li>
                      <li>• Platform Developers</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <span className="text-xs text-indigo-600 font-medium">10+ Digital Roles</span>
                    </div>
                  </div>

                  {/* Entrepreneurship & Business */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">🚀</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Entrepreneurship</h4>
                        <p className="text-sm text-gray-600">Business & Startup Opportunities</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Clinic Franchise Opportunities</li>
                      <li>• Product Development</li>
                      <li>• Ayurveda Consultancy</li>
                      <li>• Online Practice Setup</li>
                      <li>• Business Partnerships</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <span className="text-xs text-orange-600 font-medium">Business Opportunities</span>
                    </div>
                  </div>
                </div>

                {/* Job Application Process */}
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Apply for Ayurveda Jobs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📝</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">1. Register</h4>
                      <p className="text-sm text-gray-600">Create your profile on our platform</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📄</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">2. Upload Resume</h4>
                      <p className="text-sm text-gray-600">Share your qualifications and experience</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🔍</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">3. Match Jobs</h4>
                      <p className="text-sm text-gray-600">Get matched with suitable positions</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">✅</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">4. Get Hired</h4>
                      <p className="text-sm text-gray-600">Connect with employers and start your career</p>
                    </div>
                  </div>
                </div>

                {/* Call to Action for Job Seekers */}
                <div className="bg-blue-50 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Launch Your Ayurveda Career?</h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Join thousands of Ayurveda professionals who have found their dream jobs through our platform. From fresh graduates to experienced practitioners, we have opportunities for everyone.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Submit Your Resume
                    </button>
                    <button className="px-8 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                      Set Job Alerts
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    No registration fees • Free career guidance • Direct employer contact
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected with Ayurwings</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest Ayurveda news, job opportunities, and educational updates delivered straight to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Join 10,000+ Ayurveda professionals in our community
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}