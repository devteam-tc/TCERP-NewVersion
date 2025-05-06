// import Pricing from "@/components/containers/home-two/Pricing";
import Pricing from "../components/containers/home-two/Pricing"
import ServicesTwo from "../components/containers/home-two/ServicesTwo";
import Banner from "../components/containers/home/Banner";
// import Blog from "@/components/containers/home/Blog";
import Counter from "../components/containers/home/Counter";
// import Cta from "@/components/containers/home/Cta";
// import Faq from "@/components/containers/home/Faq";
import Features from "../components/containers/home/Features";
// import Projects from "@/components/containers/home/Projects";
import Services from "../components/containers/home/Services";
// import Team from "@/components/containers/home/Team";
import Testimonial from "../components/containers/home/Testimonial";
// import TextSlider from "@/components/containers/home/TextSlider";
import CustomCursor from "../components/layout/CustomCursor";
import Footer from "../components/layout/footer/Footer";
// import TrainFactoryScene from "../components/layout/footer/TrainFactoryScene";
import Header from "../components/layout/header/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <Features/>
      <Services/>
      <Counter/>
      <ServicesTwo />
      <Testimonial/>
      <Pricing />
      {/* <Blog/> */}
      {/* <TrainFactoryScene /> */}
      {/* <TextSlider/> */}
      <Footer/>
      <CustomCursor/>
    </>
  );
}
