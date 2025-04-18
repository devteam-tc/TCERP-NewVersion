import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import PageHeader from "@/components/layout/PageHeader";
import ServiceCard from "./ServiceCard";
import WorkingSteps from "./WorkingSteps";
import DownloadSection from './DownloadSection';
 


const Page = () => {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Services", link: null }
  ];

  return (
    <>
      <Header />
      <PageHeader title="Services" breadcrumbs={breadcrumbs} />

      <ServiceCard />
      <WorkingSteps />
       <DownloadSection />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default Page;
