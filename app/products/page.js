// app/products/AllProductsSection.jsx
'use client';

import React from "react";
import { Row, Col } from "react-bootstrap";
import { modulesData } from "../utils/constant";
import Link from "next/link";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import "./AllProducts.scss"; // SCSS module import
import { FaArrowRight } from "react-icons/fa";
import PageHeader from "@/components/layout/PageHeader";
import WorkProcessSection from "./WorkProcess";

const AllProductsSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'All Products', link: null }
  ];
  return (
    <>
      <Header />
      <PageHeader title="All Products" breadcrumbs={breadcrumbs} />
      <div className="container pt-120">
        <Row>
          {modulesData.map((module, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <div className="card">
                <img
                  src={module.image}
                  alt={module.title}
                  className="image"
                />
                <div className="cardBody">
                  <h5>{module.title}</h5>
                  <p>{module.description}</p>
                  <Link href={module.link} passHref>
                    <div className="exploreLinkWrapper" onClick={scrollToTop}>
                      <span className="exploreLink">
                        {module.linkText} <FaArrowRight className="exploreArrow" />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    <WorkProcessSection />
      <Footer />
    </>
  );
};

export default AllProductsSection;
