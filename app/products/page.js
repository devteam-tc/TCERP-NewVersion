
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {  modulesData } from "../utils/constant";


import Link from "next/link";
import Footer from "../../components/layout/footer/Footer";

export const metadata = {
  title: "Our Products - Comprehensive Modules | Tech Cloud ERP",
  description: "Discover our wide range of products designed to enhance business efficiency and productivity.",
};

export async function generateStaticParams() {
  return modulesData.map((module) => ({
    slug: module.title.replace(/\s+/g, "-").toLowerCase()
  }));
}

const AllProductsSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    {/* <Navigation/> */}
        {/* <section className={industryStyles.section}>
        <div className="container">
          <h2 className={industryStyles.heading}>{aboutus_data.allproducts.heading}</h2>
          <div className={industryStyles.divider}></div>
          <p className={industryStyles.description}>{aboutus_data.allproducts.description}</p>
        </div>
      </section> */}
      <div>
        <Row>
          {modulesData.map((module, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              {/* <AnimatedSection>
                <div className={styles.card}>
                  <img variant="top" src={module.image} alt={module.title} className={styles.image} />
                  <div className={styles.cardBody}>
                    <h5>{module.title}</h5>
                    <p>{module.description}</p>
                    <Link href={module.link} className={styles.exploreLink}>
                      {module.linkText} <FaArrowRight className={styles.exploreArrow} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection> */}
            </Col>
          ))}
        </Row>
      </div>
      <Footer/>
    </>
  );
};

export default AllProductsSection;
