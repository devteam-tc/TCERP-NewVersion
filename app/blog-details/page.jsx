import BlogDetailsPage from "@/components/containers/blog/BlogDetailsPage";
import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/footer/Footer"
import Header from "@/components/layout/header/Header"
import PageHeader from "@/components/layout/PageHeader";

const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Blog', link: '/blog' },
    { label: 'Blog Details', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="Blog Details" breadcrumbs={breadcrumbs}/>
      <BlogDetailsPage/>
      <Footer/>
      <CustomCursor/>
    </>
  )
}

export default page
