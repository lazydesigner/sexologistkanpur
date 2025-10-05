import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Dr. R M Singh - Best Sexologist in Kanpur | Sexual Health Specialist',
  description: 'Dr. R M Singh is the best sexologist doctor in Kanpur with 24+ years experience. Expert treatment for Erectile Dysfunction, Premature Ejaculation, Low Libido. MBBS, MD Dermatology.',
  keywords: 'Best Sexologist Doctor in Kanpur, Best Sexologist in Kanpur, Top Sexologist in Kanpur, Sexual Health Clinic, Erectile Dysfunction Treatment, Premature Ejaculation Treatment',
  authors: [{ name: 'Dr. R M Singh' }],
  creator: 'Dr. R M Singh Clinic',
  publisher: 'Dr. R M Singh Clinic', 
  robots: 'index, follow',
  openGraph: {
    title: 'Dr. R M Singh - Best Sexologist in Kanpur',
    description: 'Expert sexual health specialist with 24+ years experience. Professional treatment for erectile dysfunction, premature ejaculation, and sexual wellness.',
    url: 'https://drrmsingh.com',
    siteName: 'Dr. R M Singh Clinic',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. R M Singh - Best Sexologist in Kanpur',
    description: 'Expert sexual health specialist with 24+ years experience.',
    creator: '@drrmsingh',
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://drrmsingh.com" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="your-verification-code" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Dr. R M Singh Clinic",
              "description": "Best Sexologist Doctor in Kanpur specializing in sexual health treatments",
              "url": "https://drrmsingh.com",
              "telephone": "+91-99369-59955",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "113/131 Swaroop Nagar (Near Madhuraj Hospital)",
                "addressLocality": "Kanpur",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "208002",
                "addressCountry": "IN"
              },
              "openingHours": [
                "Mo-Sa 10:00-20:00",
                "Su 10:00-14:00"
              ],
              "priceRange": "$$",
              "image": "https://drrmsingh.com/images/dr-singh.jpg",
              "founder": {
                "@type": "Person",
                "name": "Dr. R M Singh",
                "jobTitle": "Sexologist",
                "worksFor": {
                  "@type": "MedicalBusiness",
                  "name": "Dr. R M Singh Clinic"
                }
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}