import { notFound } from 'next/navigation';
import Header from "../../../components/layout/header/Header"
import PageHeader from "../../../components/layout/PageHeader";
import Footer from "../../../components/layout/footer/Footer";
import CustomCursor from "../../../components/layout/CustomCursor";
import AboutSection from '../../../components/containers/service-details/AboutSection';
import FAQSection from '../../../components/containers/service-details/FAQSection';
import Specifications from '../../../components/containers/service-details/Specifications';
import { getServiceData, getServiceBreadcrumbs } from '../../utils/serviceUtils';
import { VALID_SERVICE_SLUGS, COMPANY_NAME } from '../../config/services';

export function generateStaticParams() {
  return VALID_SERVICE_SLUGS.map(slug => ({
    slug,
  }));
}

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