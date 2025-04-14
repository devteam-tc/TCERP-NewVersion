import { notFound } from 'next/navigation';
import Header from "@/components/layout/header/Header";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import AboutSection from './AboutSection';
import FAQSection from './FAQSection';
import Specifications from './Specifications';
import DownloadSection from './DownloadSection';

// Static service data
const servicesData = {
  'web-development': {
    title: 'Web Development',
    description: 'We build responsive, fast websites for all industries.',
  },
  'app-development': {
    title: 'App Development',
    description: 'Custom mobile and desktop apps tailored to your business.',
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'Grow your brand online with SEO, PPC, and social media.',
  },
};

// Generate static paths for each service
export async function generateStaticParams() {
  return Object.keys(servicesData).map(slug => ({ slug }));
}

const Page = ({ params }) => {
  const { slug } = params;
  const service = servicesData[slug];

  if (!service) return notFound();

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: service.title, link: null },
  ];

  return (
    <>
      <Header />
      <PageHeader title={service.title} breadcrumbs={breadcrumbs} />
      <div className="container  ">
        <AboutSection slug={slug} />
        <Specifications slug={slug} />
      </div>
      
      <FAQSection service={slug} />
      <DownloadSection slug={slug} />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default Page;
