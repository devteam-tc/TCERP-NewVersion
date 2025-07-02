import ContactPage from "../../components/containers/contact/ContactPage";
import CustomCursor from "../../components/layout/CustomCursor";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import PageHeader from "../../components/layout/PageHeader";
import { FaHome } from 'react-icons/fa';
import MapSection from "../../components/containers/contact/MapSection";

// Generate static metadata
export async function generateMetadata() {
  return {
    title: 'Get in Touch | Customer Support and Inquiries',
    description: 'Need assistance? Reach out to our expert team anytime. We’re here to answer your questions and provide the support you need quickly and easily.',
    keywords: 'Contact Tech Cloud ERP, ERP support, ERP consultation, ERP software contact, ERP solutions contact, ERP provider contact',
  };
}

const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/', icon: FaHome },
    { label: 'Contact Us', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="Contact Us" breadcrumbs={breadcrumbs}/>
      <ContactPage/>
      <MapSection />
      <Footer/>

      <CustomCursor/>
    </>
  )
}

export default page