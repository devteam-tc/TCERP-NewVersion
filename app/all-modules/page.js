// app/products/AllProductsSection.jsx
'use client';

import React from "react";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import { FaArrowRight, FaHome } from "react-icons/fa";
import PageHeader from "../../components/layout/PageHeader";
import Image from "next/image";
import CategorySection from "../../components/containers/modules/CategorySection";
import IntegratedIntro from "../../components/containers/modules/IntegratedIntro";
import FeaturesSection from "../../components/containers/modules/FeaturesSection";

const AllProductsSection = () => {
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
      <FeaturesSection />                                                
    <IntegratedIntro />  
    <CategorySection />  
      <Footer />
    </>
  );
};

export default AllProductsSection;
