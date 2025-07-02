// import Pricing from "@/components/containers/home-two/Pricing";
import Pricing from "../components/containers/home/Pricing"
import ServicesTwo from "../components/containers/home/Unique_Features";
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
import { testimonials } from "../data/testmonial";

export default function Home() {
  const baseUrl = "https://tcerp-newversion.web.app";
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
      "telephone": "+91-40-48584444",
      "contactType": "customer support",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    }],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "# 6-3-252/2, Erramanzil Colony, Hyderabad, Telangana 500082, India",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500082",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": testimonials.length.toString()
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

  const allSchemas = [organizationSchema, ...reviewSchemas, websiteSchema];

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
      <CreativeSection />
      <Footer/>
      <CustomCursor/>
    </>
  );
}

// SEO and Social Metadata for Landing Page
export async function generateMetadata() {
  const baseUrl = "https://tcerp-newversion.web.app";
  const ogImage = baseUrl + "/images/banner/Home_banner.webp";
  const canonicalUrl = baseUrl + "/";

  return {
    title: "Tech Cloud ERP | Best ERP Software Solution for Businesses in India",
    description: "Tech Cloud ERP is a leading provider of cloud-based ERP software solutions in India. Streamline your business operations, boost productivity, and drive growth with our scalable, secure, and customizable ERP platform.",
    keywords: [
      "ERP software India",
      "cloud ERP",
      "business management software",
      "Tech Cloud ERP",
      "ERP for manufacturing",
      "ERP for trading",
      "ERP for retail",
      "ERP for SMEs",
      "Best ERP software",
      "SaaS ERP",
      "enterprise resource planning"
    ],
    openGraph: {
      title: "Tech Cloud ERP | Best ERP Software Solution for Businesses in India",
      description: "Tech Cloud ERP is a leading provider of cloud-based ERP software solutions in India. Streamline your business operations, boost productivity, and drive growth with our scalable, secure, and customizable ERP platform.",
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Tech Cloud ERP - Best ERP Software Solution for Businesses in India",
          type: "image/webp"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Tech Cloud ERP | Best ERP Software Solution for Businesses in India",
      description: "Tech Cloud ERP is a leading provider of cloud-based ERP software solutions in India. Streamline your business operations, boost productivity, and drive growth with our scalable, secure, and customizable ERP platform.",
      images: [ogImage]
    },
    alternates: {
      canonical: canonicalUrl
    },
    other: {
      
    }
  };
}
