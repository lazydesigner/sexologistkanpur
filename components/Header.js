'use client'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import DropdownMenu from './DropdownMenu'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const servicesDropdown = [
    {
      title: 'Erectile Dysfunction',
      items: [
        { name: 'Erectile Dysfunction', href: '/erectile-dysfunction' },
        { name: 'ED Causes', href: '/erectile-dysfunction/causes' },
        { name: 'ED Treatment', href: '/erectile-dysfunction/treatment' }
      ]
    },
    {
      title: 'Premature Ejaculation',
      items: [
        { name: 'Premature Ejaculation', href: '/premature-ejaculation' },
        { name: 'PE Causes', href: '/premature-ejaculation/causes' },
        { name: 'PE Treatment', href: '/premature-ejaculation/treatment' }
      ]
    },
    {
      title: 'Other Services',
      items: [
        { name: 'Low Libido', href: '/low-libido' },
        { name: 'Penis Size Issues', href: '/penis-size-issues' },
        { name: 'Sexual Counseling', href: '/sexual-counseling' }
      ]
    }
  ]

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services', dropdown: servicesDropdown },
    // { name: 'Our Team', href: '/team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-500 text-white py-2 md:block hidden">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>📍 113/131 Swaroop Nagar, Kanpur</span>
            <span>⏰ Mon-Sat: 10AM-8PM, Sun: 10AM-2PM</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+919936959955" className="flex items-center space-x-1 hover:text-accent-400 transition-colors">
              <Phone size={16} />
              <span>+91-99369-59955</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Premature ejaculation treatment consultation"
                width={100}
                height={100}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 font-serif">Dr. R M Singh</h1>
              <p className="text-sm text-gray-600">Sexologist & Dermatologist</p>
            </div>
          </Link>

        </div>
      </div>
    </header>
  )
}

export default Header