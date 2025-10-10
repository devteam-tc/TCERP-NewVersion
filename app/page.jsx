
import Pricing from "../components/containers/home-two/Pricing"
import ServicesTwo from "../components/containers/home/ServicesTwo";
import Banner from "../components/containers/home/Banner";
import Counter from "../components/containers/home/Counter";
import Features from "../components/containers/home/Features";
import Services from "../components/containers/home/Services";
import Testimonial from "../components/containers/home/Testimonial";
import CustomCursor from "../components/layout/CustomCursor";
import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/header/Header";
import CreativeSection from "../components/layout/footer/CreativeSection";
import WhatsappSection from "../components/containers/home/WhatsappSection";
import DownloadButtonSection from "../components/containers/home/DownloadButtonSection";
import { testimonials } from "../data/testmonial";
export default function Home() {


  const baseUrl = "https://www.techclouderp.com";
  const canonicalUrl = baseUrl + "/";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tech Cloud ERP Software Pvt Ltd",
    "url": baseUrl,
    "logo": baseUrl + "/images/logo/logo.webp",
    "sameAs": [
      "https://www.facebook.com/techclouderp/",
      "https://twitter.com/techclouderp",
      "https://www.linkedin.com/company/tech-cloud-erp/"
    ],
    "description": "Tech Cloud ERP is a leading provider of cloud-based ERP software solutions in India. Streamline your business operations, boost productivity, and drive growth with our scalable, secure, and customizable ERP platform.",
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+91 8919439603",
      "contactType": "customer support",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    }],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 241, 3rd Floor, VVG Elite Developers, Kavuri Hills, Phase - 2, Madhapur, Hyderabad, Telangana - 500081.",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500081",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "100"
    }
  };

  const reviewSchemas = testimonials.map((testimonial) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Tech Cloud ERP Software Pvt Ltd",
      "url": canonicalUrl
    },
    "author": {
      "@type": "Person",
      "name": testimonial.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": testimonial.rating.toString(),
      "bestRating": "5"
    },
    "reviewBody": testimonial.text
  }));

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": canonicalUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${canonicalUrl}search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // Business Schema
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Tech Cloud ERP",
    "url": "https://techclouderp.com",
    "telephone": "+91 7032803200",
    "image": "https://techclouderp.com/logo.webp",
    "priceRange": "₹₹₹",
    "sameAs": [
      "https://www.linkedin.com/company/techclouderp",
      "https://www.facebook.com/techclouderp"
    ],
    "hasMap": "https://maps.app.goo.gl/vWZKs284SFnCPPk17",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Phase 2, Kavuri Hills, Madhapur",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500033",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4383613,
      "longitude": 78.3939389
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 7032803200",
      "contactType": "customer service",
      "availableLanguage": ["en", "hi", "te"],
      "areaServed": "IN"
    }
  };

  // Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Tech Cloud ERP",
    "image": "https://techclouderp.com/logo.webp",
    "description": "Tech Cloud ERP is an integrated cloud-based software suite for managing business operations, including accounting, inventory, HRMS and manufacturing.",
    "brand": {
      "@type": "Brand",
      "name": "Tech Cloud ERP"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "0.00",
      "availability": "https://schema.org/InStock",
      "url": "https://techclouderp.com/"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1506"
    }
  };

  // Combine all schemas
  const allSchemas = [
    organizationSchema, 
    ...reviewSchemas, 
    websiteSchema,
    businessSchema,
    productSchema
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemas) }}
      />
      <Header/>
      <Banner/>
      <Features/>
      <Services/>
      <Counter/>
      <ServicesTwo />
      <Testimonial/>
      <Pricing />
      <WhatsappSection />
      <DownloadButtonSection />
      <CreativeSection />
      <Footer/>
      <CustomCursor/>
    </>
  );
}
