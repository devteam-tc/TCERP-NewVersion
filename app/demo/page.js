import CustomCursor from "../../components/layout/CustomCursor";
import Footer from "../../components/layout/footer/Footer"
import Header from "../../components/layout/header/Header"
import PageHeader from "../../components/layout/PageHeader"
import DemoPage from "./DemoPage";
import { FaHome } from 'react-icons/fa';

export async function generateMetadata() {
  return {
    title: "Book a Demo | Tech Cloud ERP",
    description:
      "Schedule a live, personalized demo of TechCloud ERP to explore key features, streamline your business processes, and get expert insights.",
    keywords: [
      "TechCloud ERP demo",
      "ERP software demo",
      "Book a demo",
      "Schedule ERP demo",
      "Cloud ERP demo",
      "Manufacturing ERP demo",
      "Business management software demo",
      "ERP solution consultation",
      "TechCloud live demo",
      "Enterprise software demo",
    ],
  };
}

// Generate Static Params (for future expansions)
export function generateStaticParams() {
  return [{ slug: "demo" }];
}
const page = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/', icon: FaHome },
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
