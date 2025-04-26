import ContactPage from "../../components/containers/contact/ContactPage";
import CustomCursor from "../../components/layout/CustomCursor";
import Footer from "../../components/layout/footer/Footer";
import TrainFactoryScene from "../../components/layout/footer/TrainFactoryScene";
import Header from "../../components/layout/header/Header";
import PageHeader from "../../components/layout/PageHeader";
import { FaHome } from 'react-icons/fa';

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
      <Footer/>
      <TrainFactoryScene />

      <CustomCursor/>
    </>
  )
}

export default page