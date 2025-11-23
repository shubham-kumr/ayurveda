import React from 'react';
import Image from 'next/image';
import Layout from '../../src/components/layout/Layout';

export default function AboutUs() {
  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <section className="relative bg-linear-to-br from-blue-50 to-green-50 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl font-poppins">
                About Us – AyurWings
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-3xl">
                AyurWings is a pioneering platform dedicated to advancing the rich tradition of Ayurveda through modern education, online lectures, and comprehensive marketing & branding services.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* About Description */}
            <div className="max-w-4xl mb-16">
              <div className="prose prose-lg text-slate-600">
                <p>
                  AyurWings is a pioneering platform dedicated to advancing the rich tradition of Ayurveda through modern education, online lectures, and comprehensive marketing & branding services. Committed to making Ayurveda accessible to a global audience, Ayurwings offers a range of online educational resources, including courses, webinars, and workshops designed to deepen the understanding of this ancient healing science.
                </p>
                <p>
                  In addition to its educational focus, Ayurwings provides specialized marketing and branding services to help Ayurvedic practitioners, wellness centers, and Ayurvedic product businesses effectively promote their services and products. By leveraging digital marketing strategies, social media, and brand-building techniques, Ayurwings empowers its clients to reach a broader audience and establish a trusted presence in the wellness industry.
                </p>
                <p>
                  With a mission to both educate and promote Ayurveda in a modern, engaging, and accessible way, Ayurwings bridges the gap between tradition and innovation, making Ayurvedic knowledge and practices more widespread and impactful.
                </p>
              </div>
            </div>
            
            {/* Mission Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 font-poppins mb-4">Our Mission</h3>
              <p className="text-lg text-slate-600 max-w-4xl">
                To bridge the ancient wisdom of Ayurveda with cutting-edge digital marketing solutions, enabling doctors to grow their practices, connect authentically with patients, and make a meaningful impact on their lives.
              </p>
            </div>
            
            {/* Why Choose AyurWings Section */}
            <div className="mb-12">

              <h3 className="text-2xl font-bold text-slate-900 font-poppins mb-4">Why Choose AyurWings?</h3>
              <ul className="space-y-3 text-lg text-slate-600 max-w-4xl">
                <li className="flex items-start">
                  <span className="font-semibold text-blue-600 mr-2">•</span>
                  <span><strong>Exclusive Focus on Ayurveda:</strong> We understand the unique needs and challenges of Ayurveda doctors and tailor our strategies to reflect your practice's authenticity.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-blue-600 mr-2">•</span>
                  <span><strong>Proven Expertise:</strong> With years of experience in healthcare marketing, we have helped numerous Ayurveda professionals boost their visibility, attract patients, and grow sustainably.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-blue-600 mr-2">•</span>
                  <span><strong>Data-Driven Solutions:</strong> From increasing organic website traffic to running performance-driven ad campaigns, every step we take is backed by data and geared towards measurable results.</span>
                </li>
              </ul>
            </div>
            
            {/* What We Offer Section */}
            <div className="mb-12">

              <h2 className="text-2xl font-bold text-slate-900 font-poppins mb-4">What We Offer</h2>
              <ul className="space-y-3 text-lg text-slate-600 max-w-4xl">
                <li className="flex items-start">
                  <span className="font-semibold text-green-600 mr-2">•</span>
                  <span><strong>Enhanced Online Visibility:</strong> Ensure your practice stands out on search engines and social media platforms.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-green-600 mr-2">•</span>
                  <span><strong>Patient-Centric Campaigns:</strong> Connect with people who value holistic and natural healthcare solutions.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-green-600 mr-2">•</span>
                  <span><strong>Brand Building:</strong> Establish trust and credibility by showcasing your expertise and unique approach.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-green-600 mr-2">•</span>
                  <span><strong>Lead Generation & Growth:</strong> Turn digital engagements into real-world appointments and long-term patient relationships.</span>
                </li>
              </ul>
            </div>
            
            {/* Vision Section */}
            <div className="mb-12">

              <h2 className="text-2xl font-bold text-slate-900 font-poppins mb-4">Our Vision</h2>
              <div className="text-lg text-slate-600 space-y-4 max-w-4xl">
                <p>
                  To be the go-to digital marketing partner for Ayurveda doctors, helping them thrive in an increasingly online world while preserving the integrity and authenticity of their practice.
                </p>
                <p>
                  Join us at ABMS, and let's grow your clinic, build trust, and reach patients online. Together, we'll create a healthier, more connected future powered by the wisdom of Ayurveda and the reach of modern marketing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-left text-slate-900 font-poppins mb-16">Meet Our Founders</h2>
            
            {/* Founder - Dr. Pooja Kohli */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="shrink-0">
                  <Image
                    src="/images/team/founder.png"
                    alt="Vaidya Pooja Kohli - Founder"
                    width={228}
                    height={257}
                    className="rounded-2xl"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 font-poppins mb-4">Founder - Vaidya Pooja Kohli</h3>
                  <div className="text-slate-600 space-y-4">
                    <p><strong>Dr. Pooja Kohli – Ayurveda Expert with 20+ Years of Experience</strong></p>
                    <p>
                      Dr. Pooja Kohli is an esteemed Ayurvedic practitioner with over 18 years of experience in the field. Her career has been marked by versatility, and she has contributed significantly to various aspects of Ayurvedic practice and policy.
                    </p>
                    <p>
                      Dr. Kohli has played an integral role in policy-making by working with the Central Council of Indian Medicine (CCIM), helping shape the future of Ayurvedic education, practice, and regulations. Her expertise has also been instrumental in the growth of NirogStreet and HempStreet, both of which have become leading platforms in promoting Ayurvedic healthcare and wellness.
                    </p>
                    <p>
                      In addition to her contributions to policy and organizations, Dr. Kohli is deeply committed to the promotion of Ayurveda on a broader scale. She actively works with NASYA (National Ayurvedic Students and Youth Association) to spread awareness and enhance the practice of Ayurveda globally.
                    </p>
                    <p>
                      Her work continues to inspire and elevate the Ayurvedic community, making her a key figure in the ongoing transformation of this ancient healing system.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Co-Founder - Dr. Yash Chaudhary */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="shrink-0">
                  <Image
                    src="/images/team/co-founder.png"
                    alt="Dr. Yash Chaudhary - Co-Founder"
                    width={242}
                    height={224}
                    className="rounded-2xl"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 font-poppins mb-4">Co-Founder - Dr. Yash Chaudhary</h3>
                  <div className="text-slate-600 space-y-4">
                    <p>
                      Dr. Yash Chaudhary is a visionary Ayurvedic entrepreneur, health coach, and a passionate advocate for holistic wellness. With over four years of dedicated experience in the field of Ayurveda, he has been instrumental in promoting traditional healing practices on a global scale.
                    </p>
                    <p>
                      As the Founder and Chairman of Yasharth Veda Foundation, Dr. Chaudhary has been at the forefront of spreading Ayurvedic wisdom through National & International Collaborations, Medical health camps, seminars, Webinars, Conferences, making ancient healing accessible to modern society. His efforts have led to international collaborations with experts from over 10+ countries, including the USA, Canada, UK, Australia, Brazil, South Korea, and Nepal.
                    </p>
                    <p>
                      In October 2024, Dr. Chaudhary was invited to South Korea for the Participation in Yeongdeok International H-Wellness Festa 2024 at Yeongdeok-gun, Gyeongsangbuk-do & 01st International Ayurveda Conference at Gochang. His contributions to Ayurveda have also been recognized globally, leading to official Collaborations with SeokJeong Wellpark City Hospital, South Korea, Dharma Ayurveda, India and Yasharth Veda Foundation, as a Knowledge Partner for the prestigious Indo-Korean International Ayurveda Knowledge Exchange and Research Program.
                    </p>
                    <p>
                      As the Co-Founder of Ayurwings, an innovative & India's First Edtech Ayurveda platform, we help offer expertly curated courses led by renowned Practitioners & Speakers & other comprehensive services, including courses, live classes, marketing and Branding, thesis and scientific paper writing, online consultations and more.
                    </p>
                    <p>
                      Dr. Chaudhary is dedicated in making Ayurveda more accessible & Structured for global audience, empowering students, practitioners, and other Ayurveda Stakeholders by bringing the entire Ayurveda Community under one roof. He aims to provide enthusiasts with authentic Ayurvedic knowledge, bridging the gap between ancient wisdom and modern learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}