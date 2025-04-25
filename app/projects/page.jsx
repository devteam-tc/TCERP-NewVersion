import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/footer/Footer"
import Header from "@/components/layout/header/Header"
import PageHeader from "@/components/layout/PageHeader"
import ProductPage from "../../components/containers/product-details/ProductPage";

const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="Products" breadcrumbs={breadcrumbs} />
      <ProductPage />
      <Footer/>
      <CustomCursor/>
    </>
  )
}

export default page
