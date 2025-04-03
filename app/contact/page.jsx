import ContactPage from "@/components/containers/contact/ContactPage";
import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header"
import PageHeader from "@/components/layout/PageHeader";

const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Contact Us', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="Contact Us" breadcrumbs={breadcrumbs}/>
      <ContactPage/>
      <Footer/>
      <CustomCursor/>
    </>
  )
}

export default page
