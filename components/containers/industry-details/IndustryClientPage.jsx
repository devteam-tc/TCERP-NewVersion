"use client";
import React from "react";
import { useParams } from "next/navigation";
import ProjectDetailsPage from "../industries/IndustryDetailsPage"
import CustomCursor from "../../layout/CustomCursor"
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import PageHeader from "../../layout/PageHeader";
import { FaHome } from 'react-icons/fa';

const capitalizeWords = (str) => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const IndustryClientPage = () => {
  const { slug } = useParams();
  const industryName = capitalizeWords(slug.replace(/-/g, " "));

  const breadcrumbs = [
    { label: "Home", link: "/", icon: FaHome },
    { label: "All Industries", link: "/industries" },
    { label: industryName, link: null },
  ];

  return (
    <>
      <Header />
      <PageHeader title={industryName} breadcrumbs={breadcrumbs} />
      <main>
        {/* Pass slug to ProjectDetailsPage */}
        <ProjectDetailsPage industrySlug={slug} />
      </main>
      <Footer />
      <CustomCursor />
    </>
  );
};

export default IndustryClientPage;
