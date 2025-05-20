
import CustomCursor from "../../components/layout/CustomCursor";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import PageHeader from "../../components/layout/PageHeader";
import ModulePage from './ModulePage';
import { FaHome } from 'react-icons/fa';

const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' , icon: FaHome },
    { label: 'Modules', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="Modules" breadcrumbs={breadcrumbs}/>
      <ModulePage />
      <Footer/>
      <CustomCursor/>
    </>
  )
}

export default page;
