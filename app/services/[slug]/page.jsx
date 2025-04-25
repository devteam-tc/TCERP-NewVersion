import { notFound } from 'next/navigation';
// import Header from "@/components/layout/header/Header";
import Header from "../../../components/layout/header/Header"
import PageHeader from "../../../components/layout/PageHeader";
import Footer from "../../../components/layout/footer/Footer";
import CustomCursor from "../../../components/layout/CustomCursor";
import AboutSection from '../../../components/containers/service-details/AboutSection';
import FAQSection from '../../../components/containers/service-details/FAQSection';
import Specifications from '../../../components/containers/service-details/Specifications';
import { getServiceData, getServiceBreadcrumbs } from '../../utils/serviceUtils';
import { VALID_SERVICE_SLUGS, COMPANY_NAME } from '../../config/services';

/**
 * Generate static paths for each service
 * @returns {Array<{slug: string}>}
 */
export function generateStaticParams() {
  return VALID_SERVICE_SLUGS.map(slug => ({
    slug,
  }));
}

/**
 * Generate metadata for the service page
 * @param {Object} params - Route parameters
 * @param {string} params.params.slug - Service slug
 * @returns {Object} Page metadata
 */
export async function generateMetadata({ params }) {
  const service = getServiceData(params.slug);
  
  if (!service) {
    return notFound();
  }
  
  return {
    title: `${service.title} - ${COMPANY_NAME}`,
    description: service.description,
  };
}

// Disable dynamic paths to ensure only predefined services are accessible
export const dynamicParams = false;

/**
 * Service page component
 * @param {Object} props - Component props
 * @param {Object} props.params - Route parameters
 * @param {string} props.params.slug - Service slug
 * @returns {JSX.Element} Service page
 */
export default function ServicePage({ params }) {
  const service = getServiceData(params.slug);
  
  if (!service) {
    return notFound();
  }
  
  const breadcrumbs = getServiceBreadcrumbs(params.slug, service.title);

  return (
    <main className="service-page">
      <Header />
      <PageHeader title={service.title} breadcrumbs={breadcrumbs} />
      <div className="container">
        <AboutSection slug={params.slug} />
      </div>
      <Specifications slug={params.slug} />
      <FAQSection service={params.slug} />
      <Footer />
      <CustomCursor />
    </main>
  );
}