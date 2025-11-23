'use client';

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceModal({ isOpen, onClose }: ServiceModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    service: '',
    emailConsent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call here
    onClose();
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      mobileNumber: '',
      email: '',
      service: '',
      emailConsent: false
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-sm bg-white/20" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-3 sm:p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xs sm:max-w-md transform overflow-hidden rounded-2xl bg-white p-4 sm:p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <Dialog.Title as="h3" className="text-base sm:text-lg font-medium leading-5 sm:leading-6 text-gray-900">
                    Get Started Today
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mr-1"
                  >
                    <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
                  After submitting this form we will use your details to connect with you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  {/* Name Fields */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Name *
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      required
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Which Services You Interested?
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="courses">Courses</option>
                      <option value="online-classes">Online Classes</option>
                      <option value="marketing-branding">Marketing & Branding</option>
                      <option value="thesis-writing">Thesis Writing</option>
                      <option value="scientific-paper-writing">Scientific Paper Writing</option>
                      <option value="online-consultation">Online Consultation</option>
                    </select>
                  </div>

                  {/* Email Consent */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Marketing email consent *
                    </label>
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        name="emailConsent"
                        required
                        checked={formData.emailConsent}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5"
                      />
                      <label className="ml-2 text-xs sm:text-sm text-gray-600 leading-5">
                        Please check here to join our email list.
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium mt-2 sm:mt-0"
                  >
                    Submit
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}