import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/footer/Footer"
import Header from "@/components/layout/header/Header"
import PageHeader from "@/components/layout/PageHeader"
import DemoPage from "./DemoPage";

const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Book a Demo', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="Demo" breadcrumbs={breadcrumbs} />
      <DemoPage />
      <Footer/>
      <CustomCursor/>
    </>
  )
}

export default page
