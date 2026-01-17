import ServiceDetailsPage from "@/components/containers/services/ServiceDetailsPage"
import CustomCursor from "@/components/layout/CustomCursor"
import Footer from "@/components/layout/footer/Footer"
import Header from "@/components/layout/header/Header"
import PageHeader from "@/components/layout/PageHeader"

const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'Service Details', link: null }
  ];
  return (
    <>
      <Header />
      <PageHeader title="Service Details" breadcrumbs={breadcrumbs}/>
      <ServiceDetailsPage />
      <Footer />
      <CustomCursor/>
    </>
  )
}

export default page
