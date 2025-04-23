"use client";
import React from "react";
import { useParams } from "next/navigation";
import ProjectDetailsPage from "@/components/containers/industries/IndustryDetailsPage";
import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import PageHeader from "@/components/layout/PageHeader";

const IndustryClientPage = () => {
  const { slug } = useParams();
  const industryName = slug.replace(/-/g, " ");

  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Industries", link: "/industries" },
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
