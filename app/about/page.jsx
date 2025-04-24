import About from "../../components/containers/home-two/About";
import WhoWeAre from "../../components/containers/home-two/WhoWeAre";
// import Team from "../../components/containers/home/Team";
// import TextSlider from "@/components/containers/home/TextSlider";
import CustomCursor from "../../components/layout/CustomCursor";
import Footer from "../../components/layout/footer/Footer"
import Header from "../../components/layout/header/Header"
import PageHeader from "../../components/layout/PageHeader"

const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="About Us" breadcrumbs={breadcrumbs}/>
      <About extraClassName="style2"/>
      {/* <TextSlider/> */}
      <WhoWeAre/>
      {/* <Team/> */}
      <Footer/>
      <CustomCursor/>
    </>
  )
}

export default page;
