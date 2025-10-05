'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
 

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Clinic Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">Dr</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif">Dr. R M Singh</h3>
                <p className="text-gray-400 text-sm">Sexologist & Dermatologist</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading sexologist in Kanpur with 24+ years of experience providing confidential, 
              professional, and effective treatment for all sexual health concerns.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="text-primary-400 flex-shrink-0" size={18} />
                <div>
                  <a href="tel:+919936959955" className="text-white hover:text-primary-400 transition-colors">
                    +91-99369-59955
                  </a>
                  <span className="text-gray-400 mx-2">|</span>
                  <a href="tel:+919956359955" className="text-white hover:text-primary-400 transition-colors">
                    +91-99563-59955
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="text-primary-400 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-white">113/131 Swaroop Nagar</p>
                  <p className="text-gray-400">(Near Madhuraj Hospital)</p>
                  <p className="text-gray-400">Kanpur, UP 208002</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="text-primary-400 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-white">Mon-Sat: 10:00 AM - 8:00 PM</p>
                  <p className="text-gray-400">Sunday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
 

          {/* Resources & Newsletter */}
          <div> 

            {/* Newsletter */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h5 className="font-semibold mb-3">Health Tips Newsletter</h5>
              <p className="text-gray-400 text-sm mb-4">Get expert sexual health tips and updates</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-md transition-colors">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Certifications */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Social Media */}
            <div>
              <h5 className="font-semibold mb-4">Connect With Us</h5>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Certifications */}
            <div className="text-right">
              <h5 className="font-semibold mb-4">Certifications & Memberships</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>• MBBS, MD - Dermatology, Venereology & Leprosy</p>
                <p>• Indian Medical Association (IMA)</p>
                <p>• Association of Dermatologists of India</p>
                <p>• International Society for Sexual Medicine</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>© {currentYear} Dr. R M Singh Clinic. All rights reserved.</p>
              <p className="mt-1">Best Sexologist Doctor in Kanpur | Top Sexual Health Specialist</p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/terms-conditions" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                Medical Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Float - Mobile */}
      <div className="fixed bottom-4 right-4 md:hidden z-50">
        <a 
          href="tel:+919936959955"
          className="bg-accent-500 hover:bg-accent-600 text-white p-3 rounded-full shadow-lg flex items-center space-x-2 animate-pulse"
        >
          <Phone size={20} />
        </a>
      </div>
    </footer>
  )
}

export default Footer