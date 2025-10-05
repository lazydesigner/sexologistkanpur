'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const DropdownMenu = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300">
        <span>{item.name}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 min-w-max bg-white rounded-lg shadow-xl border border-gray-100 py-4 z-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {item.dropdown.map((section, sectionIndex) => (
              <div key={section.title} className={`px-4 border-t border-gray-100 pt-4}`}>
                <h3 className="text-sm font-semibold text-nowrap text-primary-500 mb-2 uppercase tracking-wide">
                  {section.title}
                </h3>
                <div className="space-y-2">
                  {section.items.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block text-gray-600 hover:text-primary-500 hover:bg-gray-50 px-3 py-2 rounded-md text-sm transition-all duration-200"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action in Dropdown */}
          <div className="px-4 pt-4 border-t border-gray-100 mt-4">
            <Link 
              href="/contact" 
              className="block bg-primary-500 hover:bg-primary-600 text-white text-center py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu