"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ProjectDetailsPage from "../industries/IndustryDetailsPage"
import CustomCursor from "../../layout/CustomCursor"
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import PageHeader from "../../layout/PageHeader";
import { FaHome } from 'react-icons/fa';

const IndustryClientPage = () => {
  const { slug } = useParams();
  const [industryTitle, setIndustryTitle] = useState("");

  useEffect(() => {
    const loadIndustryData = async () => {
      try {
        const industryData = await import(`../../../data/industries/${slug}.json`)
          .then(module => module.default);
        setIndustryTitle(industryData.title);
      } catch (error) {
        console.error('Failed to load industry data:', error);
        // Fallback to slug-based title if data loading fails
        setIndustryTitle(slug.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '));
      }
    };

    loadIndustryData();
  }, [slug]);

  const breadcrumbs = [
    { label: "Home", link: "/", icon: FaHome },
    { label: "All Industries", link: "/industries" },
    { label: industryTitle, link: null },
  ];

  return (
    <>
      <Header />
      <PageHeader title={industryTitle} breadcrumbs={breadcrumbs} />
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
