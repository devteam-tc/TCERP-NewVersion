import CustomCursor from "../../components/layout/CustomCursor";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import PageHeader from "../../components/layout/PageHeader";
import ServiceCard from "../../components/containers/services/ServiceCard";
import DownloadSection from '../../components/containers/services/DownloadSection';
import { FaHome } from 'react-icons/fa';
 import Howitworks from  "../../components/containers/services/Howitworks";
 


const Page = () => {
  const breadcrumbs = [
    { label: "Home", link: "/", icon: FaHome },
    { label: "All Services", link: null }
  ];

  return (
    <>
      <Header />
      <PageHeader title="Services" breadcrumbs={breadcrumbs} />

      <ServiceCard />
      <Howitworks />
       <DownloadSection />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default Page;