// lib/data.js
import { Stethoscope, Clock, Heart, Ruler, Shield, Award, Users, TrendingUp } from 'lucide-react';

export const services = [
  {
    id: 1,
    title: "Erectile Dysfunction",
    slug: "erectile-dysfunction",
    shortDesc: "Comprehensive treatment for ED with modern medical approaches and lifestyle counseling.",
    fullDesc: "Erectile dysfunction (ED) is a common condition affecting millions of men worldwide. Our comprehensive treatment approach includes thorough medical evaluation, lifestyle counseling, and evidence-based treatments including oral medications, therapy, and advanced treatment options when needed.",
    icon: Stethoscope,
    image: "/images/services/ed-treatment.jpg",
    causes: [
      "Cardiovascular disease and poor blood circulation",
      "Diabetes and hormonal imbalances", 
      "Psychological factors like stress and anxiety",
      "Lifestyle factors including smoking and obesity",
      "Certain medications and medical conditions"
    ],
    treatments: [
      "Oral medications (PDE5 inhibitors)",
      "Lifestyle modification counseling",
      "Psychological counseling and therapy",
      "Hormone replacement therapy when appropriate",
      "Advanced treatment options for severe cases"
    ],
    successRate: "95%",
    duration: "4-8 weeks",
    price: "Consultation from ₹1500"
  },
  {
    id: 2,
    title: "Premature Ejaculation",
    slug: "premature-ejaculation",
    shortDesc: "Effective solutions for PE through behavioral techniques and medical intervention.",
    fullDesc: "Premature ejaculation is one of the most common sexual dysfunctions in men. Our treatment combines behavioral techniques, counseling, and when appropriate, medical interventions to help men achieve better control and sexual satisfaction.",
    icon: Clock,
    image: "/images/services/pe-treatment.jpg",
    causes: [
      "Psychological factors like performance anxiety",
      "Hypersensitivity of the penis",
      "Hormonal imbalances",
      "Relationship problems and stress",
      "Genetic predisposition"
    ],
    treatments: [
      "Behavioral therapy and techniques",
      "Topical anesthetic creams",
      "Oral medications when appropriate",
      "Counseling and stress management",
      "Partner involvement therapy"
    ],
    successRate: "92%",
    duration: "6-10 weeks",
    price: "Consultation from ₹1500"
  },
  {
    id: 3,
    title: "Low Libido",
    slug: "low-libido",
    shortDesc: "Addressing decreased sexual desire through hormonal and psychological evaluation.",
    fullDesc: "Low libido or decreased sexual desire can affect both men and women. Our comprehensive evaluation includes hormonal assessment, psychological factors, and lifestyle influences to develop personalized treatment plans.",
    icon: Heart,
    image: "/images/services/libido-treatment.jpg",
    causes: [
      "Hormonal imbalances (testosterone, estrogen)",
      "Stress and mental health issues",
      "Relationship problems",
      "Medications and medical conditions",
      "Lifestyle factors and fatigue"
    ],
    treatments: [
      "Hormone replacement therapy",
      "Psychological counseling",
      "Lifestyle modification programs",
      "Stress management techniques",
      "Relationship counseling"
    ],
    successRate: "88%",
    duration: "8-12 weeks",
    price: "Consultation from ₹1800"
  },
  {
    id: 4,
    title: "Penis Size Issues",
    slug: "penis-size-concerns",
    shortDesc: "Professional counseling and medical advice for size-related concerns.",
    fullDesc: "Concerns about penis size are common but often based on misconceptions. We provide professional counseling, accurate medical information, and when appropriate, discuss available treatment options.",
    icon: Ruler,
    image: "/images/services/counseling.jpg",
    causes: [
      "Body dysmorphic concerns",
      "Unrealistic expectations from media",
      "Lack of accurate medical information",
      "Performance anxiety",
      "Partner communication issues"
    ],
    treatments: [
      "Professional counseling and education",
      "Body image therapy",
      "Communication skills training",
      "Medical evaluation when needed",
      "Surgical consultation if appropriate"
    ],
    successRate: "90%",
    duration: "4-6 weeks",
    price: "Consultation from ₹1200"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh K.",
    age: 35,
    location: "Kanpur",
    rating: 5,
    text: "Dr. Singh's professional approach and effective treatment changed my life. The consultation was completely confidential and the results exceeded my expectations.",
    avatar: "/images/testimonials/patient-1.jpg",
    service: "Erectile Dysfunction",
    treatmentDuration: "6 weeks"
  },
  {
    id: 2,
    name: "Amit S.",
    age: 28,
    location: "Lucknow", 
    rating: 5,
    text: "Excellent doctor with great understanding. The treatment was very effective and I felt comfortable discussing my concerns throughout the process.",
    avatar: "/images/testimonials/patient-2.jpg",
    service: "Premature Ejaculation",
    treatmentDuration: "8 weeks"
  },
  {
    id: 3,
    name: "Vikram M.",
    age: 42,
    location: "Kanpur",
    rating: 5,
    text: "Best sexologist in Kanpur. Professional, caring, and results-oriented approach. Highly recommend to anyone facing similar issues.",
    avatar: "/images/testimonials/patient-3.jpg",
    service: "Low Libido",
    treatmentDuration: "10 weeks"
  },
  {
    id: 4,
    name: "Suresh P.",
    age: 38,
    location: "Allahabad",
    rating: 5,
    text: "Dr. Singh helped me overcome my concerns with patience and expertise. The treatment plan was well-structured and effective.",
    avatar: "/images/testimonials/patient-4.jpg",
    service: "Sexual Counseling",
    treatmentDuration: "5 weeks"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Understanding Erectile Dysfunction: Causes and Modern Treatments",
    slug: "understanding-erectile-dysfunction-causes-treatments",
    excerpt: "A comprehensive guide to understanding ED, its causes, and the latest treatment options available in 2024.",
    content: "Detailed blog content about erectile dysfunction...",
    date: "2024-03-15",
    category: "Men's Health",
    tags: ["Erectile Dysfunction", "Treatment", "Men's Health"],
    readTime: "5 min read",
    image: "/images/blog/ed-understanding.jpg",
    author: "Dr. R M Singh"
  },
  {
    id: 2,
    title: "Breaking the Stigma: Why Sexual Health Matters",
    slug: "breaking-stigma-sexual-health-matters",
    excerpt: "Addressing common misconceptions about sexual health and the importance of seeking professional help without shame.",
    content: "Detailed blog content about sexual health stigma...",
    date: "2024-03-10",
    category: "Sexual Wellness",
    tags: ["Sexual Health", "Mental Health", "Stigma"],
    readTime: "4 min read",
    image: "/images/blog/sexual-health-stigma.jpg",
    author: "Dr. R M Singh"
  },
  {
    id: 3,
    title: "Lifestyle Factors Affecting Sexual Health",
    slug: "lifestyle-factors-affecting-sexual-health",
    excerpt: "How diet, exercise, stress, and sleep impact your sexual wellness and practical steps to improve them.",
    content: "Detailed blog content about lifestyle factors...",
    date: "2024-03-05",
    category: "Lifestyle",
    tags: ["Lifestyle", "Sexual Health", "Wellness"],
    readTime: "6 min read",
    image: "/images/blog/lifestyle-sexual-health.jpg",
    author: "Dr. R M Singh"
  },
  {
    id: 4,
    title: "The Role of Communication in Sexual Relationships",
    slug: "communication-sexual-relationships",
    excerpt: "How open communication with your partner can improve sexual satisfaction and resolve common issues.",
    content: "Detailed blog content about communication...",
    date: "2024-02-28",
    category: "Relationships",
    tags: ["Communication", "Relationships", "Sexual Health"],
    readTime: "7 min read",
    image: "/images/blog/communication-relationships.jpg",
    author: "Dr. R M Singh"
  }
];

export const faqs = [
  {
    id: 1,
    question: "Is the consultation completely confidential?",
    answer: "Yes, all consultations are strictly confidential. We follow medical privacy protocols (HIPAA-equivalent) and ensure complete discretion in all interactions. Your personal information and medical details are never shared with anyone without your explicit consent."
  },
  {
    id: 2,
    question: "What should I expect in the first consultation?",
    answer: "The first consultation includes a detailed medical history, discussion of your concerns in a private setting, physical examination if necessary, and development of a personalized treatment plan. The session typically lasts 45-60 minutes."
  },
  {
    id: 3,
    question: "Are the treatments safe and effective?",
    answer: "All treatments are evidence-based and follow international medical standards. Dr. Singh has 24 years of experience with a 98% success rate. We use FDA-approved medications and proven therapeutic techniques."
  },
  {
    id: 4,
    question: "How long does treatment typically take?",
    answer: "Treatment duration varies depending on the condition and individual response. Most patients see improvement within 4-8 weeks of starting treatment, with complete resolution often achieved within 3-6 months."
  },
  {
    id: 5,
    question: "Do you accept insurance?",
    answer: "We accept various insurance plans including major health insurance providers in India. Please contact us to verify coverage for your specific plan and treatment needs."
  },
  {
    id: 6,
    question: "Can I bring my partner to the consultation?",
    answer: "Yes, partner involvement is often beneficial for treatment success. We encourage open communication and offer couple's counseling sessions when appropriate."
  },
  {
    id: 7,
    question: "What are your consultation fees?",
    answer: "Initial consultation fees start from ₹1500 depending on the complexity of the case. Follow-up consultations are typically ₹800-1200. We provide transparent pricing with no hidden costs."
  },
  {
    id: 8,
    question: "Do you provide online consultations?",
    answer: "Yes, we offer secure telemedicine consultations for follow-up visits and certain conditions. Initial consultations are preferably conducted in-person for thorough evaluation."
  }
];

export const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/clinic-exterior.jpg",
    alt: "Dr. R M Singh Clinic Exterior",
    category: "clinic",
    title: "Modern Clinic Facility"
  },
  {
    id: 2,
    src: "/images/gallery/consultation-room.jpg",
    alt: "Private Consultation Room",
    category: "interior",
    title: "Private Consultation Room"
  },
  {
    id: 3,
    src: "/images/gallery/waiting-area.jpg",
    alt: "Comfortable Waiting Area",
    category: "interior",
    title: "Comfortable Waiting Area"
  },
  {
    id: 4,
    src: "/images/gallery/dr-singh-office.jpg",
    alt: "Dr. Singh's Office",
    category: "interior",
    title: "Doctor's Office"
  },
  {
    id: 5,
    src: "/images/gallery/reception.jpg",
    alt: "Reception Area",
    category: "interior",
    title: "Reception Area"
  },
  {
    id: 6,
    src: "/images/gallery/treatment-room.jpg",
    alt: "Treatment Room",
    category: "interior",
    title: "Treatment Room"
  }
];

export const navigation = [
  { name: 'Home', href: '/', id: 'home' },
  { name: 'About', href: '/about', id: 'about' },
  { name: 'Services', href: '/services', id: 'services' },
  { name: 'Blog', href: '/blog', id: 'blog' },
  { name: 'Gallery', href: '/gallery', id: 'gallery' },
  { name: 'FAQ', href: '/faq', id: 'faq' },
  { name: 'Contact', href: '/contact', id: 'contact' }
];
 
 
  