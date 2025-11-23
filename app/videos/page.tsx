import React from 'react';
import Image from 'next/image';

const videoCategories = [
  {
    id: 1,
    title: "Ayurvedic Dermatology",
    description: "Comprehensive lectures on Ayurvedic approaches to skin health, dermatological conditions, and traditional treatments for various skin disorders.",
    videoCount: "12+ Videos",
    duration: "8 hours",
    level: "Intermediate",
    image: "/images/services/courses.webp"
  },
  {
    id: 2,
    title: "Ayurvedic Urology",
    description: "In-depth coverage of urological conditions and their Ayurvedic management, including kidney health and urinary system disorders.",
    videoCount: "10+ Videos", 
    duration: "6 hours",
    level: "Advanced",
    image: "/images/services/courses.webp"
  },
  {
    id: 3,
    title: "Charak Vyakhayan Mala Series",
    description: "Traditional commentary and explanation of Charak Samhita, the foundational text of Ayurveda, with expert interpretations.",
    videoCount: "25+ Videos",
    duration: "20 hours", 
    level: "All Levels",
    image: "/images/services/courses.webp"
  },
  {
    id: 4,
    title: "Basti Chikitsa (Enema Therapy)",
    description: "Detailed instruction on one of Panchakarma's most important therapies, including indications, procedures, and clinical applications.",
    videoCount: "8+ Videos",
    duration: "5 hours",
    level: "Advanced",
    image: "/images/services/courses.webp"
  },
  {
    id: 5,
    title: "Raktamokshan (Bloodletting)",
    description: "Traditional bloodletting techniques, their therapeutic applications, and modern clinical considerations in Ayurvedic practice.",
    videoCount: "6+ Videos",
    duration: "4 hours",
    level: "Advanced",
    image: "/images/services/courses.webp"
  },
  {
    id: 6,
    title: "Pain Management",
    description: "Ayurvedic approaches to pain relief, including herbal treatments, therapies, and holistic pain management strategies.",
    videoCount: "15+ Videos",
    duration: "10 hours",
    level: "Intermediate", 
    image: "/images/services/courses.webp"
  },
  {
    id: 7,
    title: "Gynecological Disorders",
    description: "Women's health in Ayurveda, covering reproductive health, menstrual disorders, and traditional treatments for gynecological conditions.",
    videoCount: "18+ Videos",
    duration: "12 hours",
    level: "Intermediate",
    image: "/images/services/courses.webp"
  },
  {
    id: 8,
    title: "Menstrual Health",
    description: "Comprehensive guidance on menstrual health from an Ayurvedic perspective, including natural remedies and lifestyle recommendations.",
    videoCount: "10+ Videos",
    duration: "6 hours",
    level: "Beginner",
    image: "/images/services/courses.webp"
  },
  {
    id: 9,
    title: "Garbh Sanskar (Prenatal Care)",
    description: "Traditional Ayurvedic prenatal care, covering pregnancy wellness, nutrition, and practices for healthy fetal development.",
    videoCount: "12+ Videos",
    duration: "8 hours",
    level: "Beginner",
    image: "/images/services/courses.webp"
  }
];

const featuredSeries = [
  {
    title: "Charak Vyakhayan Mala-01",
    description: "The foundational series introducing core concepts of Charak Samhita",
    episodes: 8,
    totalDuration: "6 hours"
  },
  {
    title: "Charak Vyakhyaan Mala-2", 
    description: "Advanced commentary on diagnostic principles and treatment methodologies",
    episodes: 10,
    totalDuration: "8 hours"
  },
  {
    title: "Charak Vyakhyan Mala-3",
    description: "Clinical applications and case studies based on Charak principles", 
    episodes: 7,
    totalDuration: "5 hours"
  }
];

export default function Videos() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-poppins">
            Ayurwings Ayurvedic Lecture Videos
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Access Ayurwings' recorded Ayurvedic lectures. Learn Ayurveda anytime, anywhere 
            with expert guidance and comprehensive content from renowned practitioners.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 text-center">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-600 font-poppins">100+</div>
              <div className="text-slate-600 mt-2">Video Lectures</div>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-600 font-poppins">60+</div>
              <div className="text-slate-600 mt-2">Hours of Content</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-600 font-poppins">9</div>
              <div className="text-slate-600 mt-2">Specialization Areas</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-600 font-poppins">24/7</div>
              <div className="text-slate-600 mt-2">Access Available</div>
            </div>
          </div>
        </div>

        {/* Featured Series */}
        <div className="mx-auto mt-20 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 font-poppins mb-16">
            Featured Video Series
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredSeries.map((series, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">▶</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-slate-900 font-poppins">{series.title}</h3>
                    <p className="text-blue-600 font-medium">{series.episodes} Episodes • {series.totalDuration}</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{series.description}</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Watch Series
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Video Categories Grid */}
        <div className="mx-auto mt-20 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 font-poppins mb-16">
            Video Categories
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videoCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      category.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                      category.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {category.level}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 font-poppins mb-3">
                    {category.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <span className="flex items-center">
                      <span className="font-semibold text-blue-600 mr-1">📹</span>
                      {category.videoCount}
                    </span>
                    <span className="flex items-center">
                      <span className="font-semibold text-green-600 mr-1">⏱</span>
                      {category.duration}
                    </span>
                  </div>
                  
                  <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded-lg transition-colors duration-200 font-medium">
                    View Videos
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Benefits */}
        <div className="mx-auto mt-20 max-w-7xl">
          <div className="bg-slate-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center text-slate-900 font-poppins mb-12">
              Why Choose AyurWings Video Lectures?
            </h2>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Expert Instructors",
                  description: "Learn from renowned Ayurvedic practitioners and scholars",
                  icon: "👨‍⚕️"
                },
                {
                  title: "Flexible Learning",
                  description: "Access content anytime, anywhere at your own pace",
                  icon: "🕒"
                },
                {
                  title: "Comprehensive Content",
                  description: "From basic concepts to advanced clinical applications",
                  icon: "📚"
                },
                {
                  title: "HD Quality",
                  description: "Crystal clear video and audio for optimal learning experience",
                  icon: "🎥"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 font-poppins mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Paths */}
        <div className="mx-auto mt-20 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 font-poppins mb-16">
            Recommended Learning Paths
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white rounded-2xl p-6 border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-poppins">Beginner Path</h3>
                <p className="text-slate-600 mt-2">Start your Ayurveda journey</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-semibold text-green-600 mr-2">1.</span>
                  <span className="text-slate-700">Charak Vyakhayan Mala-01</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-green-600 mr-2">2.</span>
                  <span className="text-slate-700">Menstrual Health Basics</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-green-600 mr-2">3.</span>
                  <span className="text-slate-700">Garbh Sanskar Introduction</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-yellow-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-poppins">Intermediate Path</h3>
                <p className="text-slate-600 mt-2">Deepen your understanding</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-semibold text-yellow-600 mr-2">1.</span>
                  <span className="text-slate-700">Ayurvedic Dermatology</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-yellow-600 mr-2">2.</span>
                  <span className="text-slate-700">Pain Management Techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-yellow-600 mr-2">3.</span>
                  <span className="text-slate-700">Gynecological Disorders</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-red-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-poppins">Advanced Path</h3>
                <p className="text-slate-600 mt-2">Master clinical applications</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-semibold text-red-600 mr-2">1.</span>
                  <span className="text-slate-700">Basti Chikitsa Advanced</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-red-600 mr-2">2.</span>
                  <span className="text-slate-700">Raktamokshan Techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-red-600 mr-2">3.</span>
                  <span className="text-slate-700">Ayurvedic Urology</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-20 max-w-7xl">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white font-poppins mb-4">
              Start Learning Today
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students and practitioners who are advancing their Ayurvedic knowledge 
              with our comprehensive video lecture library.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services/courses"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors duration-200"
              >
                Browse All Videos
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Get Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}