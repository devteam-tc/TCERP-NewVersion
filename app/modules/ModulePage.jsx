import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { modulesdata } from "../utils/constant";
import  "./ModulePage.scss";

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
                  <img 
                    src={module.image} 
                    alt={module.title}  
                    className="cardImage" 
                  />
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