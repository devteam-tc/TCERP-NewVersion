import { notFound } from 'next/navigation';
import Header from "../../../components/layout/header/Header"
import PageHeader from "../../../components/layout/PageHeader";
import Footer from "../../../components/layout/footer/Footer";
import CustomCursor from "../../../components/layout/CustomCursor";
import AboutSection from '../../../components/containers/service-details/AboutSection';
import FAQSection from '../../../components/containers/service-details/FAQSection';
import Specifications from '../../../components/containers/service-details/Specifications';
import { getServiceData, getServiceBreadcrumbs, getServiceContent } from '../../utils/serviceUtils';
import { VALID_SERVICE_SLUGS, COMPANY_NAME, DEFAULT_META } from '../../config/services';

export function generateStaticParams() {
  return VALID_SERVICE_SLUGS.map(slug => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  try {
    const service = getServiceData(params.slug);
    
    if (!service) {
      return {
        title: 'Service Not Found - ' + COMPANY_NAME,
        description: 'The requested service page could not be found.',
      };
    }
    
    return {
      title: `${service.title} - ${COMPANY_NAME}`,
      description: service.description || DEFAULT_META.description,
    };
  } catch (error) {
    return DEFAULT_META;
  }
}

export default async function ServicePage({ params }) {
  try {
    const service = getServiceData(params.slug);
    
    if (!service) {
      notFound();
    }
    
    const breadcrumbs = getServiceBreadcrumbs(params.slug, service.title);
    const content = await getServiceContent(params.slug);

    if (!content) {
      notFound();
    }

    return (
      <main className="service-page">
        <Header />
        <PageHeader title={service.title} breadcrumbs={breadcrumbs} />
        <div className="container">
          <AboutSection slug={params.slug} content={content} />
        </div>
        <Specifications slug={params.slug} />
        <FAQSection service={params.slug} />
        <Footer />
        <CustomCursor />
      </main>
    );
  } catch (error) {
    notFound();
  }
} 