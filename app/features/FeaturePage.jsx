"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { uniquefeaturesdata } from "../utils/constant";
import "./FeaturePage.scss"; 
import Image from "next/image";

export const metadata = {
  title: "Advanced ERP Features for Smarter Business Management",
  description:
    "Enhance business efficiency with powerful ERP features like cloud computing, automation, real-time dashboards, and seamless user collaboration.",
};

const FeaturePage = () => {

  return (
    <div className="feature-wrapper">
      <Container className="feature-container">
        <Row>
          {uniquefeaturesdata.map((feature, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
                <div className="styledCard">
                  {/* <img
                    src={feature.image}
                    alt={feature.title}
                    className="cardImage"
                  /> */}
                                <Image
                                src={feature.image || '/images/products/default_pdt.png'} 
                                alt={feature.title }
                                width={100}
                                height={100}
                                style={{
                                  width: '100%',
                                  height: 'auto',
                                  objectFit: 'contain'
                                }}
                                onError={(e) => {
                                  e.currentTarget.src = '/images/products/default_pdt.png'
                                }}
                              />
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
  );
};

export default FeaturePage;