import WhoWeAre from "../../components/containers/home-two/WhoWeAre";
import CustomCursor from "../../components/layout/CustomCursor";
import UniqueFeatures from "../../components/containers/home-two/UniqueFeatures";
import Header from "../../components/layout/header/Header"
import About from "../../components/containers/home-two/About";
import Footer from "../../components/layout/footer/Footer";
import PageHeader from "../../components/layout/PageHeader";


const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
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
      {/* <Cta/> */}
      {/* <Pricing extraClassName="style2"/> */}
      {/* <Footer/> */}
      <Footer />
      <CustomCursor/>
    </>
  )
}

export default page;
