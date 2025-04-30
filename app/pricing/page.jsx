import Pricing from "../../components/containers/home-two/Pricing";
import CustomCursor from "../../components/layout/CustomCursor";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import PageHeader from "../../components/layout/PageHeader";
import { FaHome } from 'react-icons/fa';
import StepWise from './StepWise';
import ComparePlans from './ComparePlans';
import FaqSection from './FaqSection';  

const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/', icon: FaHome },
    { label: 'Pricing', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="Pricing" breadcrumbs={breadcrumbs}/>
      <Pricing />
        <StepWise />
        <ComparePlans />
        <FaqSection />
      <Footer/>

      <CustomCursor/>
    </>
  )
}

export default page;