'use client';
import { useState } from 'react';
import Layout from '../../../src/components/layout/Layout';
import ServiceModal from '../../../src/components/ServiceModal';
import Image from 'next/image';
import Link from 'next/link';

export default function CoursesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = () => {
    setIsModalOpen(true);
  };

  const courses = [
    {
      id: 1,
      title: "Ayurvedic Foundation Course",
      description: "Complete foundation course covering fundamental principles of Ayurveda, doshas, and basic treatment methods.",
      duration: "6 months",
      level: "Beginner",
      image: "/images/courses/foundation-course.jpg"
    },
    {
      id: 2,
      title: "Clinical Ayurveda Certification",
      description: "Advanced clinical training with hands-on experience in diagnosis and treatment protocols.",
      duration: "12 months",
      level: "Advanced",
      image: "/images/courses/clinical-certification.jpg"
    },
    {
      id: 3,
      title: "Panchakarma Specialist Program",
      description: "Intensive training in all five purification therapies with practical demonstrations and case studies.",
      duration: "9 months",
      level: "Intermediate",
      image: "/images/courses/panchakarma-program.jpg"
    },
    {
      id: 4,
      title: "Ayurvedic Nutrition & Lifestyle",
      description: "Comprehensive course on Ayurvedic nutrition, lifestyle counseling, and preventive healthcare.",
      duration: "4 months",
      level: "Beginner",
      image: "/images/courses/nutrition-lifestyle.jpg"
    },
    {
      id: 5,
      title: "Herbal Medicine & Pharmacy",
      description: "In-depth study of medicinal plants, formulations, and traditional pharmacy practices.",
      duration: "8 months",
      level: "Intermediate",
      image: "/images/courses/herbal-medicine.jpg"
    },
    {
      id: 6,
      title: "Ayurvedic Psychology & Counseling",
      description: "Specialized training in mental health approaches through Ayurvedic principles and counseling techniques.",
      duration: "6 months",
      level: "Advanced",
      image: "/images/courses/psychology-counseling.jpg"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Ayurveda Courses
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-7 sm:leading-8">
              Embark on a transformative journey through our comprehensive Ayurveda courses. 
              From foundational principles to advanced clinical practice, our programs are designed 
              to nurture skilled and knowledgeable practitioners.
            </p>
          </div>

          {/* Course Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-md">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">500+</div>
              <div className="text-xs sm:text-sm text-gray-600">Students Trained</div>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-md">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm text-gray-600">Expert Instructors</div>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-md">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">98%</div>
              <div className="text-xs sm:text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-md">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-gray-600">Support Available</div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
                  <div className="text-4xl sm:text-5xl">🌿</div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-6">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">
                      Duration: {course.duration}
                    </span>
                  </div>
                  <button
                    onClick={() => handleLearnMore()}
                    className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Our Courses */}
          <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Why Choose Our Ayurveda Courses?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
                Our courses combine traditional wisdom with modern pedagogical approaches to provide 
                the most comprehensive Ayurveda education available.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">📚</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Comprehensive Curriculum</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Our courses cover all aspects of Ayurveda from basic principles to advanced clinical applications.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">👨‍⚕️</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Expert Faculty</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Learn from renowned Ayurvedic practitioners and scholars with decades of experience.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">🏆</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Certification</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Earn recognized certifications that validate your expertise and enhance your career prospects.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ready to Begin Your Ayurveda Journey?
            </h2>
            <p className="text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Join our community of dedicated practitioners and start your transformation today. 
              Our courses are designed to fit your schedule with flexible learning options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => handleLearnMore()}
                className="bg-white text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base"
              >
                Get Course Information
              </button>
              <Link
                href="/contact"
                className="border border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 text-sm sm:text-base"
              >
                Contact Admissions
              </Link>
            </div>
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