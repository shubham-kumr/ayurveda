'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';

const newsCategories = [
  {
    id: 1,
    name: "Industry Updates",
    description: "Latest news and developments in Ayurveda industry",
    color: "bg-blue-100 text-blue-800"
  },
  {
    id: 2,
    name: "Research & Studies",
    description: "New research findings and clinical studies in Ayurveda",
    color: "bg-green-100 text-green-800"
  },
  {
    id: 3,
    name: "Events & Conferences",
    description: "Upcoming Ayurveda events, conferences, and workshops",
    color: "bg-purple-100 text-purple-800"
  },
  {
    id: 4,
    name: "Government Updates",
    description: "Policy changes and government initiatives in Ayurveda",
    color: "bg-orange-100 text-orange-800"
  }
];

const jobCategories = [
  {
    id: 1,
    title: "BAMS Graduates",
    description: "Opportunities for Bachelor of Ayurvedic Medicine and Surgery graduates",
    openings: "15+ positions",
    icon: "🎓"
  },
  {
    id: 2,
    title: "Ayurveda Practitioners",
    description: "Clinical positions for experienced Ayurvedic doctors",
    openings: "8+ positions", 
    icon: "👨‍⚕️"
  },
  {
    id: 3,
    title: "Research Positions",
    description: "Research opportunities in Ayurvedic medicine and drug development",
    openings: "5+ positions",
    icon: "🔬"
  },
  {
    id: 4,
    title: "Teaching Faculty",
    description: "Academic positions in Ayurveda colleges and institutions",
    openings: "12+ positions",
    icon: "📚"
  },
  {
    id: 5,
    title: "Product Development",
    description: "Opportunities in Ayurvedic product formulation and quality control",
    openings: "6+ positions",
    icon: "⚗️"
  },
  {
    id: 6,
    title: "Marketing & Sales",
    description: "Business development roles in Ayurvedic companies",
    openings: "10+ positions",
    icon: "📈"
  }
];

const featuredNews = [
  {
    id: 1,
    title: "WHO Recognizes Traditional Medicine Systems",
    excerpt: "World Health Organization acknowledges the importance of traditional medicine including Ayurveda in global healthcare.",
    date: "March 15, 2025",
    category: "Industry Updates",
    image: "/images/news/who-recognition.jpg",
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "New AYUSH Ministry Guidelines for Digital Health",
    excerpt: "Updated guidelines for telemedicine and digital health services in Ayurveda practice.",
    date: "March 10, 2025",
    category: "Government Updates",
    image: "/images/news/ayush-digital.jpg",
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "International Ayurveda Conference 2025",
    excerpt: "Register now for the largest global gathering of Ayurveda professionals and researchers.",
    date: "March 5, 2025",
    category: "Events & Conferences",
    image: "/images/news/conference-2025.jpg",
    readTime: "2 min read"
  }
];

const featuredJobs = [
  {
    id: 1,
    title: "Senior Ayurveda Consultant",
    company: "AyurVeda Wellness Center",
    location: "Delhi, India",
    type: "Full-time",
    experience: "5+ years",
    salary: "₹8-12 LPA",
    postedDate: "2 days ago",
    requirements: ["BAMS/MD Ayurveda", "Clinical experience", "Good communication skills"]
  },
  {
    id: 2,
    title: "Research Scientist - Ayurvedic Medicines",
    company: "Herbal Research Institute",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹6-10 LPA",
    postedDate: "1 week ago",
    requirements: ["PhD in Ayurveda/Pharmacy", "Research background", "Publication record"]
  },
  {
    id: 3,
    title: "Assistant Professor - Panchakarma",
    company: "National Ayurveda College",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹5-8 LPA",
    postedDate: "3 days ago",
    requirements: ["MD Panchakarma", "Teaching experience", "NET qualified"]
  }
];

export default function NewsJobs() {
  const [activeTab, setActiveTab] = React.useState('news');

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-poppins">
            News & Jobs
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Stay updated with the latest news in Ayurveda and discover exciting career 
            opportunities in the traditional medicine sector.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="flex rounded-lg border border-gray-200 bg-gray-50 p-1">
            <button
              onClick={() => setActiveTab('news')}
              className={`flex-1 rounded-md px-4 py-2 text-center font-medium transition-colors duration-200 ${
                activeTab === 'news'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📰 Latest News
            </button>
            <button
              onClick={() => setActiveTab('jobs')}
              className={`flex-1 rounded-md px-4 py-2 text-center font-medium transition-colors duration-200 ${
                activeTab === 'jobs'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              💼 Job Opportunities
            </button>
          </div>
        </div>

        {/* News Section */}
        {activeTab === 'news' && (
          <div className="mx-auto mt-16 max-w-7xl">
            {/* News Categories */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 font-poppins mb-8">
                News Categories
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {newsCategories.map((category) => (
                  <div key={category.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${category.color}`}>
                      {category.name}
                    </span>
                    <p className="text-gray-600 text-sm">
                      {category.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured News */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 font-poppins mb-8">
                Featured News
              </h2>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {featuredNews.map((article) => (
                  <div key={article.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
                    <div className="h-48 bg-gray-200 relative">
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="text-sm bg-black/30 px-2 py-1 rounded">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-slate-900 font-poppins mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest Ayurveda news, 
                research updates, and industry insights directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Jobs Section */}
        {activeTab === 'jobs' && (
          <div className="mx-auto mt-16 max-w-7xl">
            {/* Job Categories */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 font-poppins mb-8">
                Job Categories
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {jobCategories.map((category) => (
                  <div key={category.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{category.icon}</div>
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded-full">
                        {category.openings}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {category.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Jobs */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 font-poppins mb-8">
                Featured Job Openings
              </h2>
              <div className="space-y-6">
                {featuredJobs.map((job) => (
                  <div key={job.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-1">
                              {job.title}
                            </h3>
                            <p className="text-blue-600 font-medium mb-2">
                              {job.company}
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center">
                                📍 {job.location}
                              </span>
                              <span className="flex items-center">
                                💼 {job.type}
                              </span>
                              <span className="flex items-center">
                                🎯 {job.experience}
                              </span>
                              <span className="flex items-center font-semibold text-green-600">
                                💰 {job.salary}
                              </span>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">
                            {job.postedDate}
                          </span>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-slate-900 mb-2">
                            Requirements:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.requirements.map((req, index) => (
                              <span
                                key={index}
                                className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                              >
                                {req}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 mt-4 lg:mt-0 lg:ml-6">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                          Apply Now
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium">
                          Save Job
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Search & Filters */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 font-poppins mb-6">
                Find Your Dream Job in Ayurveda
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Select Location</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                  <option>Kolkata</option>
                </select>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Experience Level</option>
                  <option>Fresher</option>
                  <option>1-2 years</option>
                  <option>3-5 years</option>
                  <option>5+ years</option>
                </select>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                  Search Jobs
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Can't find the right opportunity? Let employers find you!
                </p>
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
                  Upload Your Resume
                </button>
              </div>
            </div>

            {/* Career Resources */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Resume Writing Guide</h3>
                <p className="text-gray-600 text-sm">
                  Learn how to craft a compelling resume for Ayurveda positions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Interview Preparation</h3>
                <p className="text-gray-600 text-sm">
                  Get ready for your Ayurveda job interviews with expert tips.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Career Guidance</h3>
                <p className="text-gray-600 text-sm">
                  Explore different career paths in the Ayurveda field.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="bg-linear-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white font-poppins mb-4">
              Have News or Job Listings to Share?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Submit your Ayurveda news stories, research updates, or job openings 
              to be featured on our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors duration-200">
                📰 Submit News
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-200">
                💼 Post a Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}