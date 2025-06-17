export const dynamic = "force-static"; // Ensures this page is statically generated
import path from 'path';
import fs from 'fs/promises';
import Industries from "../../components/containers/industries/industries";
import CustomCursor from "../../components/layout/CustomCursor";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import PageHeader from "../../components/layout/PageHeader";
import { FaHome } from 'react-icons/fa';

export const metadata = {
  title: "Tech Cloud ERP Industries | All-in-One Solutions for Business Growth",
  description: "Explore Tech Cloud ERP industries to streamline operations, boost efficiency, and drive business growth effectively.",
};

async function getIndustriesData() {
  const filePath = path.join(process.cwd(), 'data', 'industriesData.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  return JSON.parse(jsonData);
}

export async function generateStaticParams() {
  const data = await getIndustriesData();
  const allIndustries = Object.values(data.categories).flatMap(category => 
    category.industries.map(industry => ({
      slug: industry.link.split('/').pop(),
    }))
  );
  return allIndustries;
}

export default async function IndustriesPage() {
  const data = await getIndustriesData();
  const breadcrumbs = [
    { label: 'Home', link: '/', icon: FaHome },
    { label: 'All Industries', link: null }
  ];

  return (
    <>
      <Header/>
      <PageHeader title="Industries" breadcrumbs={breadcrumbs}/>
      <Industries categories={data.categories} />
      <Footer/>
      <CustomCursor/>
    </>
  );
}
