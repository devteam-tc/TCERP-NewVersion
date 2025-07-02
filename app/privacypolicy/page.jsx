import PrivacyPage from "../../components/containers/privacypolicy/PrivacyPage";
import CustomCursor from "../../components/layout/CustomCursor";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import PageHeader from "../../components/layout/PageHeader";
import { FaHome } from 'react-icons/fa';

const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/', icon: FaHome },
    { label: 'Privacy Policy', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="Privacy Policy" breadcrumbs={breadcrumbs}/>
      <PrivacyPage />
      <Footer/>

      <CustomCursor/>
    </>
  )
}

export default page;