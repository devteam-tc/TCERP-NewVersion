'use client';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import styles from './WorkProcessSection.module.scss';

// const Subtitle = ({ children, className }) => (
//   <h6 className={`${styles.subtitle} ${className}`}>{children}</h6>
// );

const Title = ({ children, className }) => (
  <h2 className={`${styles.title} ${className}`}>{children}</h2>
);

const StyledButton = ({ children }) => (
  <button className={styles.styledButton}>{children}</button>
);

const renderTextWithLineBreaks = (text) => {
  if (!text) return null;
  const textString = String(text);
  return textString.split('\n').map((line, i) => (
    <span key={i} style={{ display: 'block', marginBottom: '8px' }}>
      {line}
    </span>
  ));
};

const WorkProcessSection = ({ slug }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (slug) {
      import(`../../../data/modules/${slug}.json`)
        .then((moduleData) => {
          setData(moduleData.default);
        })
        .catch((err) => {
          console.error('Failed to load module data:', err);
        });
    }
  }, [slug]);

  if (!data) return null;

  const { featureSections, mainHeaderSection } = data;

  const renderStep = (sectionData, reverse = false, index) => (
    <Row className="align-items-center mb-2" key={index}>
      <Col md={6} className={reverse ? 'order-md-2' : ''}>
        <Image
          src={sectionData.dashboardImage}
          alt={sectionData.imageAlt || sectionData.featuretitle}
          className={`img-fluid ${styles.image}`}
          width={700}
          height={450}
          quality={100}
          style={{ width: '100%', height: 'auto' }}
        />
      </Col>
      <Col md={6} className={reverse ? 'order-md-1' : ''}>
        <h3 className={styles.stepTitle}>
          <span className={styles.stepNumber}>{`0${index + 1}`}</span>
          {renderTextWithLineBreaks(sectionData.featuretitle)}
        </h3>
        <div className={styles.stepDescription}>
          {renderTextWithLineBreaks(sectionData.featuredesc)}
        </div>
      </Col>
    </Row>
  );
  return (
    <section className={styles.section}>
      <Container className="mt-md-5">
        <div className={styles.header}>
          <Title className= {styles.title}>{renderTextWithLineBreaks(mainHeaderSection.maintitle)}</Title>
          <div className={styles.description}>
            {renderTextWithLineBreaks(mainHeaderSection.description)}
          </div>
        </div>

        {featureSections.map((sectionData, index) => (
          renderStep(sectionData, index % 2 !== 0, index)
        ))}

        <div className="text-center my-5">
          <StyledButton>Get Started</StyledButton>
        </div>
      </Container>
    </section>
  );
};

export default WorkProcessSection;
