// app/industries/page.js
export const dynamic = "force-static"; // Ensures this page is statically generated

import { Container, Row, Col } from "react-bootstrap";
import { industriesDataList } from "@/data/industriesData";
// import Navigation from "../components/Header/navigation";
// import Footer from "../components/Footer";
import Industries from "./industries";
import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import PageHeader from "@/components/layout/PageHeader";
// import industryStyles from '../industries/[slug]/industry.module.css'

export const metadata = {
  title: "Tech Cloud ERP Industries | All-in-One Solutions for Business Growth",
  description: "Explore Tech Cloud ERP industries to streamline operations, boost efficiency, and drive business growth effectively.",
};

export function generateStaticParams() {
  return Object.values(industriesDataList).flat().map((industry) => ({
    slug: industry.slug,
  }));
}

export default function IndustriesPage() {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Industries', link: null }
  ];
  return (
    <>
    <Header/>
    <PageHeader title="Industries" breadcrumbs={breadcrumbs}/>
      {[industriesDataList.agricultureList, industriesDataList.fmcgList, industriesDataList.oilandgasList].map((industryList, index) => (
        <Industries key={index} industryList={industryList} index={index} />
      ))}

      <Footer/>
      <CustomCursor/>
    </>
  );
}
