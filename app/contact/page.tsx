'use client';

import React from 'react';
import Layout from '../../src/components/layout/Layout';

const services = [
  "Online Course",
  "Digital Marketing", 
  "Campaign Management",
  "Product Marketing",
  "Content Creation",
  "Website Development",
  "Brand Strategy & Design"
];

export default function Contact() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    interestedNumber: '',
    service: 'Online Course',
    emailConsent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-green-50">
        {/* Main Contact Form Container - Light theme matching homepage */}
        <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-poppins mb-2">
                Contact Us
              </h1>
              <p className="text-sm sm:text-base text-slate-600">
                Get in touch with us for expert Ayurveda solutions
              </p>
            </div>
            <form onSubmit={handleSubmit} className="wpforms-validate wpforms-form space-y-4 sm:space-y-6">
              <noscript className="wpforms-error-noscript">
                Please enable JavaScript in your browser to complete this form.
              </noscript>
              
              <div className="wpforms-field-container space-y-4 sm:space-y-6">
                {/* Name Field - Matching original fieldset structure */}
                <div className="wpforms-field wpforms-field-name">
                  <fieldset>
                    <legend className="wpforms-field-label text-sm sm:text-base font-medium text-slate-900 mb-2 sm:mb-3">
                      Name <span className="wpforms-required-label text-red-600" aria-hidden="true">*</span>
                    </legend>
                    <div className="wpforms-field-row wpforms-field-medium grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="wpforms-field-row-block wpforms-first wpforms-one-half">
                        <input
                          type="text"
                          id="wpforms-114-field_0"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="wpforms-field-name-first wpforms-field-required w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-700 bg-white"
                        />
                        <label htmlFor="wpforms-114-field_0" className="wpforms-field-sublabel after text-xs sm:text-sm text-slate-600 mt-1 block">
                          First
                        </label>
                      </div>
                      <div className="wpforms-field-row-block wpforms-one-half">
                        <input
                          type="text"
                          id="wpforms-114-field_0-last"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="wpforms-field-name-last wpforms-field-required w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-700 bg-white"
                        />
                        <label htmlFor="wpforms-114-field_0-last" className="wpforms-field-sublabel after text-xs sm:text-sm text-slate-600 mt-1 block">
                          Last
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                {/* Mobile Number Field */}
                <div className="wpforms-field wpforms-field-text">
                  <label className="wpforms-field-label text-sm sm:text-base font-medium text-slate-900 block mb-2" htmlFor="wpforms-114-field_12">
                    Mobile Number <span className="wpforms-required-label text-red-600" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="wpforms-114-field_12"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="wpforms-field-medium wpforms-field-required w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-700 bg-white"
                  />
                </div>

                {/* Email Field */}
                <div className="wpforms-field wpforms-field-email">
                  <label className="wpforms-field-label text-sm sm:text-base font-medium text-slate-900 block mb-2" htmlFor="wpforms-114-field_1">
                    Email <span className="wpforms-required-label text-red-600" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="wpforms-114-field_1"
                    name="email"
                    spellCheck="false"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="wpforms-field-medium wpforms-field-required w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-700 bg-white"
                  />
                </div>

                {/* Hidden Interested Number Field - Matching original */}
                <div
                  className="wpforms-field wpforms-field-text"
                  style={{
                    position: 'absolute',
                    overflow: 'hidden',
                    display: 'inline',
                    height: '1px',
                    width: '1px',
                    zIndex: -1000,
                    padding: 0
                  }}
                >
                  <label className="wpforms-field-label" htmlFor="wpforms-114-field_2">
                    Interested? Number Which
                  </label>
                  <input
                    type="text"
                    id="wpforms-114-field_2"
                    name="interestedNumber"
                    value={formData.interestedNumber}
                    onChange={handleInputChange}
                    className="wpforms-field-medium"
                    style={{ visibility: 'hidden' }}
                  />
                </div>

                {/* Services Dropdown */}
                <div className="wpforms-field wpforms-field-select wpforms-field-select-style-classic">
                  <label className="wpforms-field-label text-sm sm:text-base font-medium text-slate-900 block mb-2" htmlFor="wpforms-114-field_10">
                    Which Services You Interested?
                  </label>
                  <select
                    id="wpforms-114-field_10"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="wpforms-field-medium w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-700 bg-white"
                  >
                    {services.map((service) => (
                      <option key={service} value={service} className="choice-depth-1">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Email Consent Checkbox */}
                <div className="wpforms-field wpforms-field-checkbox">
                  <fieldset>
                    <legend className="wpforms-field-label wpforms-label-hide sr-only" aria-hidden="false">
                      Marketing email consent <span className="wpforms-required-label text-red-600" aria-hidden="true">*</span>
                    </legend>
                    <ul className="wpforms-field-required">
                      <li className="choice-1 depth-1">
                        <input
                          type="checkbox"
                          id="wpforms-114-field_5_1"
                          name="emailConsent"
                          required
                          checked={formData.emailConsent}
                          onChange={handleInputChange}
                          className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded shrink-0 mt-0.5"
                        />
                        <label className="wpforms-field-label-inline text-xs sm:text-sm text-slate-700 leading-5" htmlFor="wpforms-114-field_5_1">
                          Please check here to join our email list.
                        </label>
                      </li>
                    </ul>
                  </fieldset>
                </div>
              </div>

              {/* Submit Button - Matching original styling */}
              <div className="wpforms-submit-container">
                <input type="hidden" name="wpforms[id]" value="114" />
                <input type="hidden" name="page_title" value="Contact Us" />
                <input type="hidden" name="page_url" value="/contact" />
                <input type="hidden" name="page_id" value="16" />
                <input type="hidden" name="wpforms[post_id]" value="16" />
                
                <button
                  type="submit"
                  name="wpforms[submit]"
                  id="wpforms-submit-114"
                  className="wpforms-submit w-full bg-blue-600 text-white py-3 sm:py-4 px-6 text-sm sm:text-base rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
                  data-alt-text="Sending..."
                  data-submit-text="Submit"
                  aria-live="assertive"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}