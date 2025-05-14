import Pricing from "../../components/containers/home-two/Pricing";
import CustomCursor from "../../components/layout/CustomCursor";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import PageHeader from "../../components/layout/PageHeader";
import { FaHome } from 'react-icons/fa';
import TermsPage from '../../components/containers/terms-and-conditions/TermsPage';

const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/', icon: FaHome },
    { label: 'Terms & Conditions', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="Terms & Conditions" breadcrumbs={breadcrumbs}/>
      <TermsPage />
      <Footer/>

      <CustomCursor/>
    </>
  )
}

export default page;