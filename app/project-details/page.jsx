import ProjectDetailsPage from "../../components/containers/industries/IndustryDetailsPage";
import CustomCursor from "../../components/layout/CustomCursor";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import PageHeader from "../../components/layout/PageHeader";

const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Projects', link: '/Projects' },
    { label: 'Projects Details', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="Projects Details" breadcrumbs={breadcrumbs}/>
      <ProjectDetailsPage/>
      <Footer/>
      <CustomCursor/>
    </>
  )
}

export default page
