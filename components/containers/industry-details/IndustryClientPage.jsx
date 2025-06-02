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
  const [industryTitle, setIndustryTitle] = useState(
    // Initialize with a formatted version of the slug
    slug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  );

  useEffect(() => {
    const loadIndustryData = async () => {
      try {
        const industryData = await import(`../../../data/industries/${slug}.json`)
          .then(module => module.default);
        if (industryData?.title) {
          setIndustryTitle(industryData.title);
        }
      } catch (error) {
        console.error('Failed to load industry data:', error);
        // Title is already set from the initial state, so no need to update
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
        <ProjectDetailsPage industrySlug={slug} />
      </main>
      <Footer />
      <CustomCursor />
    </>
  );
};

export default IndustryClientPage;
