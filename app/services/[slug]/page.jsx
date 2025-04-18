import { notFound } from 'next/navigation';
import Header from "@/components/layout/header/Header";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import AboutSection from './AboutSection';
import FAQSection from './FAQSection';
import Specifications from '@/app/services/[slug]/Specifications';
import servicesData from '@/data/services/servicesData.json';

// Define valid service slugs
const validServiceSlugs = ['web-development', 'app-development', 'digital-marketing'];

// Generate static paths for each service
export async function generateStaticParams() {
  return validServiceSlugs.map(slug => ({
    slug: slug
  }));
}

export const dynamicParams = false; // This ensures only the defined paths are allowed

const Page = ({ params }) => {
  const { slug } = params;
  
  // Validate the slug
  if (!validServiceSlugs.includes(slug)) {
    return notFound();
  }

  const service = servicesData[slug];

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: service.title, link: null },
  ];

  return (
    <>
      <Header />
      <PageHeader title={service.title} breadcrumbs={breadcrumbs} />
      <div className="container">
        <AboutSection slug={slug} />
      </div>
      <Specifications slug={slug} />
      <FAQSection service={slug} />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default Page;
