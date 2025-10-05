// lib/config.js
export const siteConfig = {
  siteName: "Dr. R M Singh - Best Sexologist in Kanpur",
  siteDescription: "Leading sexologist in Kanpur with 24+ years of experience. Professional, confidential treatment for erectile dysfunction, premature ejaculation, and sexual health concerns.",
  siteUrl: "https://drrmsingh.com",
  
  // Contact Information
  contact: {
    phone: "+91-99369-59955",
    altPhone: "+91-99563-59955",
    email: "info@drrmsingh.com",
    address: "113/131 Swaroop Nagar (Near Madhuraj Hospital), Kanpur U.P. 208002",
    hours: "Mon-Sat 10:00–20:00, Sun 10:00–14:00",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.1234567890!2d80.1234567!3d26.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA3JzI0LjUiTiA4MMKwMDcnMjQuNSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
  },
  
  // Doctor Information
  doctor: {
    name: "Dr. R M Singh",
    title: "MBBS, MD Dermatology, Specialized Sexologist",
    experience: "24+ Years",
    patientsHelped: "5000+",
    successRate: "98%",
    specializations: [
      "Sexual Medicine",
      "Erectile Dysfunction Treatment",
      "Premature Ejaculation Therapy",
      "Sexual Counseling",
      "Relationship Therapy"
    ]
  },
  
  // SEO Keywords
  keywords: [
    "Best Sexologist Doctor in Kanpur",
    "Best Sexologist in Kanpur",
    "Top Sexologist in Kanpur",
    "Erectile Dysfunction Treatment Kanpur",
    "Premature Ejaculation Doctor Kanpur",
    "Sexual Health Clinic Kanpur",
    "Dr R M Singh Sexologist"
  ],
  
  // Social Media
  social: {
    facebook: "https://facebook.com/drrmsingh",
    twitter: "https://twitter.com/drrmsingh",
    linkedin: "https://linkedin.com/in/drrmsingh",
    instagram: "https://instagram.com/drrmsingh"
  },
  
  // Theme Colors (Tailwind classes)
  theme: {
    primary: "blue-600",
    secondary: "gray-100",
    accent: "yellow-400",
    text: "gray-900",
    textLight: "gray-600",
    background: "white"
  }
};

export const navigation = [
  { name: 'Home', href: '/', id: 'home' },
  { name: 'About', href: '/about', id: 'about' },
  { name: 'Services', href: '/services', id: 'services' },
  { name: 'Blog', href: '/blog', id: 'blog' },
  { name: 'Gallery', href: '/gallery', id: 'gallery' },
  { name: 'FAQ', href: '/faq', id: 'faq' },
  { name: 'Contact', href: '/contact', id: 'contact' }
];