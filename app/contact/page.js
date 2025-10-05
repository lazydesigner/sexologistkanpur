'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

// export const metadata = {
//   title: 'Contact Dr. R M Singh - Best Sexologist in Kanpur | Book Appointment',
//   description: 'Contact Dr. R M Singh, leading sexologist in Kanpur. Book appointment online or call +91-99369-59955. Located at Swaroop Nagar, Kanpur.',
//   keywords: 'contact sexologist Kanpur, book appointment Dr R M Singh, sexual health consultation Kanpur'
// }

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    concern: '',
    preferredTime: '',
    message: '',
    consultationType: 'in-person'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          phone: '',
          email: '',
          concern: '',
          preferredTime: '',
          message: '',
          consultationType: 'in-person'
        })
      }, 3000)
    }, 1000)
  }

  const concerns = [
    'Erectile Dysfunction',
    'Premature Ejaculation',
    'Low Libido',
    'Penis Size Concerns',
    'Sexual Counseling',
    'General Consultation',
    'Other'
  ]

  const timeSlots = [
    'Morning (10:00 AM - 12:00 PM)',
    'Afternoon (12:00 PM - 4:00 PM)',
    'Evening (4:00 PM - 8:00 PM)',
    'Sunday (10:00 AM - 2:00 PM)'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-serif">Contact Us</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Take the first step towards better sexual health. Book your confidential consultation today.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Book Your Consultation</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">Your consultation request has been submitted successfully.</p>
                <p className="text-sm text-gray-500">We'll contact you within 24 hours to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Consultation Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Consultation Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="relative">
                      <input
                        type="radio"
                        name="consultationType"
                        value="in-person"
                        checked={formData.consultationType === 'in-person'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`p-4 border-2 rounded-lg cursor-pointer text-center transition-all ${
                        formData.consultationType === 'in-person'
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <h4 className="font-semibold">In-Person</h4>
                        <p className="text-sm text-gray-600">Visit our clinic</p>
                      </div>
                    </label>
                    <label className="relative">
                      <input
                        type="radio"
                        name="consultationType"
                        value="online"
                        checked={formData.consultationType === 'online'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`p-4 border-2 rounded-lg cursor-pointer text-center transition-all ${
                        formData.consultationType === 'online'
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <h4 className="font-semibold">Online</h4>
                        <p className="text-sm text-gray-600">Video consultation</p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Name and Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="+91-XXXXX-XXXXX"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Concern and Preferred Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="concern" className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Concern *
                    </label>
                    <select
                      id="concern"
                      name="concern"
                      value={formData.concern}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select your concern</option>
                      {concerns.map((concern) => (
                        <option key={concern} value={concern}>{concern}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select preferred time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Any additional information about your concern or specific questions..."
                  />
                </div>

                {/* Privacy Notice */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Privacy Assurance:</strong> All information shared is strictly confidential and will be used solely for medical consultation purposes. Your privacy is our top priority.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Book Consultation</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone Numbers</h4>
                    <p className="text-gray-600 mb-2">Call us for immediate consultation</p>
                    <div className="space-y-1">
                      <a href="tel:+919936959955" className="text-primary-600 hover:text-primary-700 font-medium block">
                        +91-99369-59955
                      </a>
                      <a href="tel:+919956359955" className="text-primary-600 hover:text-primary-700 font-medium block">
                        +91-99563-59955
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Clinic Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      113/131 Swaroop Nagar<br />
                      (Near Madhuraj Hospital)<br />
                      Kanpur, Uttar Pradesh 208002
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Opening Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p><strong>Monday - Saturday:</strong> 10:00 AM - 8:00 PM</p>
                      <p><strong>Sunday:</strong> 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600 mb-2">For general inquiries</p>
                    <a href="mailto:info@drrmsingh.com" className="text-primary-600 hover:text-primary-700 font-medium">
                      info@drrmsingh.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Emergency Consultation</h3>
              <p className="text-red-100 mb-4">
                For urgent sexual health concerns that need immediate attention
              </p>
              <div className="flex flex-col space-y-3">
                <a href="tel:+919936959955" className="btn-secondary bg-white text-red-600 hover:bg-gray-100 text-center">
                  Call Emergency Line
                </a>
                <p className="text-sm text-red-100 text-center">Available during clinic hours</p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Why Patients Trust Us</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">100% Confidential consultations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">24+ years of clinical experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Modern treatment approaches</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Compassionate and non-judgmental care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">High success rates in treatment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif text-center">Find Our Clinic</h3>
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="font-semibold">Interactive Map</p>
                <p className="text-sm">113/131 Swaroop Nagar, Near Madhuraj Hospital</p>
                <p className="text-sm">Kanpur, Uttar Pradesh 208002</p>
                <div className="mt-4 space-y-2">
                  <a 
                    href="https://maps.google.com/?q=113/131+Swaroop+Nagar+Kanpur" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <MapPin size={16} />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage