import React from "react";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import { FaHome } from "react-icons/fa";
import PageHeader from "../../components/layout/PageHeader";
import ModulePage from "./ModulePage";

// Generate static metadata
export async function generateMetadata() {
  return {
    title: "Powerful ERP Modules for Seamless Business Management",
    description: "Boost efficiency with our ERP modules designed for seamless business management, automation, and real-time insights. Scale your operations effortlessly.",
    keywords: "ERP modules, business management, automation, real-time insights, ERP software, business operations",
  };
}

const AllModulesSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const breadcrumbs = [
    { label: 'Home', link: '/', icon: FaHome },
    { label: 'All Modules', link: null }
  ];
  return (
    <>
      <Header />
      <PageHeader title="All Modules" breadcrumbs={breadcrumbs} />
      <ModulePage />
      <Footer />
    </>
  );
};

export default AllModulesSection;