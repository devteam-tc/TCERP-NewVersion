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
import CategorySection from "../../components/containers/products/CategorySection";
const AllProductsSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const breadcrumbs = [
    { label: 'Home', link: '/', icon: FaHome },
    { label: 'All Products', link: null }
  ];
  return (
    <>
      <Header />
      <PageHeader title="All Products" breadcrumbs={breadcrumbs} />
    <CategorySection />                                                    
      <Footer />
    </>
  );
};

export default AllProductsSection;
