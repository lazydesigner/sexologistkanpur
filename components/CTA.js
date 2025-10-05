'use client'

import Link from 'next/link'
import { Phone, Calendar, Shield, Clock, ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl transform -translate-x-48 translate-y-48"></div>
      
      <div className="container-custom relative z-10">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-serif leading-tight">
            Take the First Step Towards
            <span className="block text-accent-400">Better Sexual Health</span>
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Don't let sexual health issues affect your confidence and relationships any longer. 
            Dr. R M Singh is here to help you with expert, confidential, and compassionate care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:+919936959955" 
              className="btn-accent text-lg px-8 py-4 flex items-center space-x-3 group"
            >
              <Phone size={24} />
              <span>Call Now: +91-99369-59955</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <Link 
              href="/contact" 
              className="btn-secondary text-lg px-8 py-4 flex items-center space-x-3 group"
            >
              <Calendar size={24} />
              <span>Book Online Consultation</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <Shield className="text-accent-400 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold mb-2">100% Confidential</h3>
            <p className="text-sm text-primary-200">Complete privacy and discretion guaranteed in all consultations</p>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <Clock className="text-accent-400 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold mb-2">24+ Years Experience</h3>
            <p className="text-sm text-primary-200">Extensive expertise in sexual medicine and patient care</p>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <Phone className="text-accent-400 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold mb-2">Same Day Appointments</h3>
            <p className="text-sm text-primary-200">Quick scheduling with flexible timing options available</p>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <Calendar className="text-accent-400 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold mb-2">Online Consultations</h3>
            <p className="text-sm text-primary-200">Secure virtual consultations from the comfort of your home</p>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 font-serif">Why Wait? Start Your Treatment Today</h3>
            <p className="text-primary-200 max-w-2xl mx-auto">
              Sexual health issues don't improve on their own. The sooner you seek professional help, 
              the faster you can return to a fulfilling and confident life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Early Treatment = Better Results</h4>
              <p className="text-sm text-primary-200">The earlier you start treatment, the more effective it tends to be</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Prevent Relationship Strain</h4>
              <p className="text-sm text-primary-200">Address issues before they impact your relationships and self-confidence</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Regain Your Confidence</h4>
              <p className="text-sm text-primary-200">Start enjoying a fulfilling intimate life with proper treatment</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-serif">Ready to Get Started?</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Call for Immediate Consultation</p>
                  <a href="tel:+919936959955" className="text-accent-400 hover:text-accent-300">+91-99369-59955</a>
                  <span className="text-primary-200 ml-2">or</span>
                  <a href="tel:+919956359955" className="text-accent-400 hover:text-accent-300 ml-2">+91-99563-59955</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Clinic Hours</p>
                  <p className="text-primary-200">Mon-Sat: 10:00 AM - 8:00 PM</p>
                  <p className="text-primary-200">Sunday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Calendar className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-primary-200">113/131 Swaroop Nagar</p>
                  <p className="text-primary-200">(Near Madhuraj Hospital), Kanpur, UP 208002</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl">
            <h4 className="text-xl font-bold mb-6 text-center">Quick Contact Form</h4>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Select Concern</option>
                  <option>Erectile Dysfunction</option>
                  <option>Premature Ejaculation</option>
                  <option>Low Libido</option>
                  <option>General Consultation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Preferred Time</option>
                  <option>Morning (10 AM - 12 PM)</option>
                  <option>Afternoon (12 PM - 4 PM)</option>
                  <option>Evening (4 PM - 8 PM)</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                Request Callback
              </button>
            </form>
            
            <div className="mt-4 pt-4 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                <Shield className="inline w-4 h-4 mr-1" />
                Your information is completely confidential and secure
              </p>
            </div>
          </div>
        </div>

        {/* Final Assurance */}
        <div className="mt-16 text-center">
          <p className="text-primary-200 max-w-4xl mx-auto">
            Remember, seeking help for sexual health issues is a sign of strength, not weakness. 
            Dr. R M Singh and his team are committed to providing you with the highest level of care, 
            respect, and confidentiality. Your journey to better sexual health starts with a single step.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA