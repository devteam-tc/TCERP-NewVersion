import About from "../../components/containers/home-two/About";
import WhoWeAre from "../../components/containers/home-two/WhoWeAre";
// import Team from "../../components/containers/home/Team";
// import TextSlider from "@/components/containers/home/TextSlider";
import CustomCursor from "../../components/layout/CustomCursor";
import Footer from "../../components/layout/footer/Footer"
import Header from "../../components/layout/header/Header"
import PageHeader from "../../components/layout/PageHeader"
import { FaHome } from 'react-icons/fa';
import UniqueFeatures from "../../components/containers/home-two/UniqueFeatures";

const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/', icon: FaHome },
    { label: 'About Us', link: null }
  ];
  return (
    <>
      <Header/>
      {/* <PageHeader title="About Us" breadcrumbs={breadcrumbs}/> */}
      <PageHeader />
      {/* <About extraClassName="style2"/> */}
      <About />
      {/* <TextSlider/> */}
      <WhoWeAre/>
      <UniqueFeatures/>
      {/* <Team/> */}
      <Footer/>
      <CustomCursor/>
    </>
  )
}

export default page;
