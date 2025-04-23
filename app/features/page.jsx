
import CustomCursor from "../../components/layout/CustomCursor";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import PageHeader from "../../components/layout/PageHeader";
import FeaturePage from "./FeaturePage";


const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Features', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="Features" breadcrumbs={breadcrumbs}/>
    <FeaturePage />
      <Footer/>
      <CustomCursor/>
    </>
  )
}

export default page;
