import ProjectsPage from "@/components/containers/projects/ProjectsPage";
import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/footer/Footer"
import Header from "@/components/layout/header/Header"
import PageHeader from "@/components/layout/PageHeader"

const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Projects', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="Projects" breadcrumbs={breadcrumbs} />
      <ProjectsPage/>
      <Footer/>
      <CustomCursor/>
    </>
  )
}

export default page
