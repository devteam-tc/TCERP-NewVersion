import BlogPage from "@/components/containers/blog/BlogPage";
import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/footer/Footer"
import Header from "@/components/layout/header/Header"
import PageHeader from "@/components/layout/PageHeader";

const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Blog', link: null }
  ];

  return (
    <>
      <Header/>
      <PageHeader title="Blog" breadcrumbs={breadcrumbs}/>
      <BlogPage/>
      <Footer/>
      <CustomCursor/>
    </>
  )
}

export default page
