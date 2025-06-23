"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { uniquefeaturesdata } from "../utils/constant";
import "./FeaturePage.scss";
import Image from "next/image";


const FeaturePage = () => {
    return (
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
    );
};

export default FeaturePage;
