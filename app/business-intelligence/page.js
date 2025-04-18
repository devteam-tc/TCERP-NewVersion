// page.js
import IntroSection from './Introsection';
import Footer from '../../components/layout/footer/Footer';
import CustomCursor from "@/components/layout/CustomCursor";
import AuditPage from '../products/AuditPage';
import Faq from '@/components/containers/home/Faq';
import Header from '@/components/layout/header/Header';
import PageHeader from '@/components/layout/PageHeader';
// import CardsSection from './CardsSection';
import BusinessCards from './BusinessCards';


const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Business Intelligence', link: null }
];
export const metadata = {
  title: "Tech Cloud ERP | Advanced BI for Smarter Decisions",
  description: "Discover how Tech Cloud ERP's business intelligence tools empower your business with actionable insights. Turn data into your competitive edge today!",
  keywords: "what is business intelligence, business intelligence, top business intelligence software, ERP and Business Intelligence",
};

// Function to generate FAQ structured data
const generateFAQSchema = (faqs) => {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
};


export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />

    

    

      <main>
      <PageHeader title="Business Intelligence" breadcrumbs={breadcrumbs} />
        <IntroSection />
     <AuditPage />
     {/* <CardsSection /> */}
     <BusinessCards />
     <Faq />
      </main>

      <Footer />
      <CustomCursor/>

      {/* Inject Structured FAQ Data */}
     
    </div>
  );
}
