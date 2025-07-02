'use client';

import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutSection.scss';
import SectionTitle from '../SectionTitle';

const AboutSection = ({ slug, content }) => {
  if (!content || !content.about) return null;

  const { about } = content;

  return (
    <div className='pt-60 pb-60'>
      <Row className="d-flex align-items-center g-5">
        <Col xs={12} md={6}>
          <div className="imageContainer">
            <Image
              src={about.imageMain}
              alt={about.heading}
              width={800}
              height={600}
              className="image"
              priority
            />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="content">
            <SectionTitle extraClass='mb-3' title={about.heading} />
            <div 
              className="description"
              dangerouslySetInnerHTML={{ __html: about.paragraph }}
            />
            <Row className="feature-list-row">
              <Col xs={12} md={6}>
                <ul className="feature-list">
                  {about.features.map((feature, index) => (
                    <li key={index}><span className="diamond-icon"></span> {feature}</li>
                  ))}
                </ul>
              </Col>
            </Row>
            <button className="get-started-button">GET STARTED NOW</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutSection;
