// lib/utils.js
import { clsx } from 'clsx';

// Utility function for combining class names
export function cn(...inputs) {
  return clsx(inputs);
}

// Format date function
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Calculate reading time
export function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return `${time} min read`;
}

// Generate SEO-friendly slug
export function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

// Phone number formatter
export function formatPhoneNumber(phone) {
  return phone.replace(/(\+91)(\d{5})(\d{5})/, '$1-$2-$3');
}

// Truncate text
export function truncateText(text, maxLength = 150) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

// Validate email
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate phone number (Indian format)
export function isValidPhoneNumber(phone) {
  const phoneRegex = /^(\+91|91)?[6789]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s|-/g, ''));
}

// Generate structured data for SEO
export function generateStructuredData(type, data) {
  const baseStructure = {
    "@context": "https://schema.org",
    "@type": type
  };

  switch (type) {
    case "MedicalBusiness":
      return {
        ...baseStructure,
        "name": data.name,
        "image": data.image,
        "telephone": data.telephone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": data.address.street,
          "addressLocality": data.address.city,
          "addressRegion": data.address.state,
          "postalCode": data.address.postalCode,
          "addressCountry": "IN"
        },
        "openingHoursSpecification": data.openingHours,
        "priceRange": data.priceRange
      };

    case "Person":
      return {
        ...baseStructure,
        "name": data.name,
        "jobTitle": data.jobTitle,
        "worksFor": {
          "@type": "MedicalBusiness",
          "name": data.businessName
        },
        "alumniOf": data.education,
        "knowsAbout": data.specializations
      };

    case "Service":
      return {
        ...baseStructure,
        "name": data.name,
        "description": data.description,
        "provider": {
          "@type": "MedicalBusiness",
          "name": data.providerName
        },
        "areaServed": data.areaServed
      };

    default:
      return baseStructure;
  }
}

// Debounce function
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Local storage helpers
export const storage = {
  get: (key) => {
    if (typeof window !== 'undefined') {
      try {
        return JSON.parse(localStorage.getItem(key));
      } catch {
        return null;
      }
    }
    return null;
  },
  
  set: (key, value) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    }
  },
  
  remove: (key) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }
};

// Form validation helpers
export const validators = {
  required: (value) => {
    return value && value.toString().trim() !== '';
  },
  
  email: (value) => {
    return isValidEmail(value);
  },
  
  phone: (value) => {
    return isValidPhoneNumber(value);
  },
  
  minLength: (value, min) => {
    return value && value.length >= min;
  },
  
  maxLength: (value, max) => {
    return !value || value.length <= max;
  }
};

// Analytics helpers
export const analytics = {
  trackEvent: (eventName, properties = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, properties);
    }
  },
  
  trackPageView: (pagePath) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: pagePath,
      });
    }
  }
};