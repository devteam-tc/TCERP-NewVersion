"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { uniquefeaturesdata } from "../utils/constant";
import "./FeaturePage.scss";
import Image from "next/image";
import Head from "next/head";

const META = {
  title: "Tech Cloud ERP Features | Unique ERP Software Capabilities",
  description: "Explore the unique features of Tech Cloud ERP. Discover how our ERP software can streamline your business operations with advanced, user-friendly capabilities.",
  keywords: "ERP features, Tech Cloud ERP, ERP software capabilities, business automation, unique ERP features"
};

const FeaturePage = () => {
    return (
        <>
          <Head>
            <title>{META.title}</title>
            <meta name="description" content={META.description} />
            <meta name="keywords" content={META.keywords} />
          </Head>
        <div className="feature-wrapper">
            <Container className="feature-container">
                <Row>
                    {uniquefeaturesdata.map((feature, index) => (
                        <Col key={index} sm={12} md={6} lg={4}>
                            <div className="styledCard">
                                <div className="image-wrapper">
                                    <Image
                                        src={feature.image || "/images/products/default_pdt.png"}
                                        alt={feature.title}
                                        width={300}
                                        height={200}
                                        className="feature-image"
                                        onError={(e) => {
                                            e.currentTarget.src = "/images/products/default_pdt.png";
                                        }}
                                    />
                                </div>
                                <div className="cardBody">
                                    <h5>{feature.title}</h5>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
        </>
    );
};

export default FeaturePage;
