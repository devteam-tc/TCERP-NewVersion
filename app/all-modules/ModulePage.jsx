"use client"; // 👈 This makes the component run on the client

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { modulesdata } from "../utils/constant";
import "./ModulePage.scss";
import Image from "next/image";

export const metadata = {
  title: "Advanced ERP module for Smarter Business Management",
  description:
    "Enhance business efficiency with powerful ERP module like cloud computing, automation, real-time dashboards, and seamless user collaboration.",
};

const ModulePage = () => {
  return (
    <>
      <Container className="container">
        <Row>
          {modulesdata.map((module, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <div className="styledCard">
                <div className="imageWrapper">
                  <Image
                    src={module.image || '/images/products/default_pdt.png'}
                    alt={module.title}
                    width={400}
                    height={300}
                    className="moduleImage"
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      e.currentTarget.src = '/images/products/default_pdt.png';
                    }}
                  />
                </div>
                <div className="cardBody">
                  <h5>{module.title}</h5>
                  <p>{module.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ModulePage;