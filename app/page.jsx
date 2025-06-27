
import Pricing from "../components/containers/home-two/Pricing"
import ServicesTwo from "../components/containers/home/ServicesTwo";
import Banner from "../components/containers/home/Banner";
import Counter from "../components/containers/home/Counter";
import Features from "../components/containers/home/Features";
import Services from "../components/containers/home/Services";
import Testimonial from "../components/containers/home/Testimonial";
import CustomCursor from "../components/layout/CustomCursor";
import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/header/Header";
import CreativeSection from "../components/layout/footer/CreativeSection";
import WhatsappSection from "../components/containers/home/WhatsappSection";
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
      <WhatsappSection />
      <CreativeSection />
      <Footer/>
      <CustomCursor/>
    </>
  );
}
