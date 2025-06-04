'use client';
import { FiDownload } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';
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
      <h3 className="mainTitles">{renderTextWithLineBreaks(data.mainHeaderSection.maintitle)}</h3>
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
            <p className="featureDesc">
              {Array.isArray(sectionData.featuredesc) 
                ? sectionData.featuredesc.map((desc, i) => (
                    <span key={i}>
                      {desc}
                      {i < sectionData.featuredesc.length - 1 && <br />}
                    </span>
                  ))
                : sectionData.featuredesc}
            </p>
            {sectionData.featurelink && (
              <a className="featureLink" href="#">
                {sectionData.featurelink} <FaArrowRight size={16} />
              </a>
            )}
          </div>
        );

        const image = (
          <div className="imageCard">
            <div className="imageWrapper">
              <img
                src={sectionData.dashboardImage}
                alt={sectionData.imageAlt || "Section Image"}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  backgroundColor: '#f8f9fa',
                }}
              />
            </div>
          </div>
        );

        return (
          <section
            key={index}
            className={`featuresSection featuresSection--${index === 0 ? 'first' : index === 1 ? 'second' : 'third'}`}
          >
            {(index === 1) ? content : image}
            {(index === 1) ? image : content}
          </section>
        );
      })}
    </div>
  );
};

export default CustomSection;
