import About from "../../components/containers/home-two/About";
import WhoWeAre from "../../components/containers/home-two/WhoWeAre";
import CustomCursor from "../../components/layout/CustomCursor";
import Footer from "../../components/layout/footer/Footer"
import Header from "../../components/layout/header/Header"
import PageHeader from "../../components/layout/PageHeader"
import { FaHome } from 'react-icons/fa';
import UniqueFeatures from "../../components/containers/home-two/UniqueFeatures";
import CeoComponent from "../../components/containers/home/modern-ceo-section"
import OurVisionSection from '../../components/containers/home-two/OurVisionSection'
// Generate static metadata
export async function generateMetadata() {
  return {
    title: 'Leading ERP Software Providers in India for Businesses',
    description: 'A leading ERP provider offering cloud-based, scalable solutions designed to streamline operations and support business growth across regions.',
    keywords: 'ERP software solution in hyderabad, Best ERP Solutions Provider in India, cloud-based ERP solutions provider in India, Manufacturing ERP, Manufacturing Software, Production ERP, Production Software, Manufacturing ERP software, Production ERP software',
  };
}

const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/', icon: FaHome },
    { label: 'About Us', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="About Us" breadcrumbs={breadcrumbs}/>
      {/* <About /> */}
      <OurVisionSection />
            <WhoWeAre/>
      <CeoComponent/>
      <UniqueFeatures/>
      
      <Footer/>
      <CustomCursor/>
    </>
  )
}

export default page;
