'use client';
import { FiDownload } from 'react-icons/fi';
import {FaArrowRight } from 'react-icons/fa'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import '../../../public/sass/components/_custom-section.scss';

const CustomSection = ({ slug }) => {
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

  const renderTextWithLineBreaks = (text) => {
    if (!text) return null;
    const textString = String(text);
    return textString.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        {i < textString.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  const sectionsToRender = data.featureSections && Array.isArray(data.featureSections) && data.featureSections.length > 0
    ? data.featureSections
    : (data.mainHeaderSection ? [data.mainHeaderSection] : []);

  if (sectionsToRender.length === 0) return null;

  const mainHeaderSectionComponent = data?.mainHeaderSection && data.featureSections ? (
    <section className="headerSection">
      <div className="subTitle">{renderTextWithLineBreaks(data.mainHeaderSection.subtitle)}</div>
      <h1 className="mainTitles">{renderTextWithLineBreaks(data.mainHeaderSection.maintitle)}</h1>
      <p className="description">{renderTextWithLineBreaks(data.mainHeaderSection.description)}</p>
    </section>
  ) : null;

  return (
    <div className="containers">
      {mainHeaderSectionComponent}

      {sectionsToRender.map((sectionData, index) => {
        if (!sectionData || !sectionData.featuretitle || !sectionData.featuredesc || !sectionData.dashboardImage) {
          console.warn(`Skipping section at index ${index} due to missing data.`, sectionData);
          return null;
        }

        const content = (
          <div className="featureText">
            <div className="iconBox">
              <FiDownload color="#fff" size={20} />
            </div>
            <h2 className="featureTitle">
              {renderTextWithLineBreaks(sectionData.featuretitle)}
            </h2>
            <p className="featureDesc">{sectionData.featuredesc}</p>
            {sectionData.featurelink && (
              <a className="featureLink" href="#">
                {sectionData.featurelink} <FaArrowRight  size={16} />
              </a>
            )}
          </div>
        );

        const image = (
          <div className="imageCard">
            <Image
              src={sectionData.dashboardImage}
              alt={sectionData.imageAlt || "Section Image"}
              layout="responsive"
              width={600}
              height={400}
              priority
            />
          </div>
        );

        // First row: image left, text right
        if (index === 0) {
          return (
            <section key={index} className="featuresSection featuresSection--first">
              {image}
              {content}
            </section>
          );
        }
        
        // Second row: text left, image right
        if (index === 1) {
          return (
            <section key={index} className="featuresSection featuresSection--second">
              {content}
              {image}
            </section>
          );
        }

        // Third row: image left, text right
        return (
          <section key={index} className="featuresSection featuresSection--third">
            {image}
            {content}
          </section>
        );
      })}
    </div>
  );
};

export default CustomSection;
