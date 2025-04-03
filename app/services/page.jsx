import MessagesTwo from "@/components/containers/home-two/MessagesTwo";
import Cta from "@/components/containers/home/Cta";
import Faq from "@/components/containers/home/Faq";
import Services from "@/components/containers/home/Services";
import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header"
import PageHeader from "@/components/layout/PageHeader";

const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="Services" breadcrumbs={breadcrumbs}/>
      <Services isSlider={false} showTitle={false} extraClassName="style2"/>
      <Cta/>
      <Faq extraClassName="style2"/>
      <MessagesTwo extraClassName="style2"/>
      <Footer/>
      <CustomCursor/>
    </>
  )
}

export default page
