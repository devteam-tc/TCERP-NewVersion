'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const AboutSection = ({ slug }) => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const baseSlug = slug.replace('-services', '');
        const data = await import(`../../../data/services/${baseSlug}.json`);
        setContent(data.default);
      } catch (err) {
        console.error(`Failed to load content for slug: ${slug}`, err);
        setError(err);
      }
    };

    loadContent();
  }, [slug]);

  if (error || !content || !content.about) return null;

  const { about } = content;

  return (
    <section className="about-section style-1 style-3 pt_120 pb_120">
      <div className="container">
        <div className="row flex-row-reverse justify-content-lg-between justify-content-center g-4 align-items-center">
          {/* Content Column */}
          <div className="col-xl-5 col-lg-7">
            <div className="about-content">
              {/* Section Title */}
              <div className="section-title text-lg-start text-center mb-4">
                <span className="sub-badge p1-clr fw-semibold fs-seven text-uppercase d-block mb-3">
                  {about.subtitle}
                </span>
                <h2 className="mb-xxl-4 mb-3 wow fadeInUp black fw-bold visible-slowly-right" data-wow-delay=".3s">
                  {about.heading}
                </h2>
                <p className="pra fs-seven">{about.paragraph}</p>
              </div>

              {/* Features List */}
              <ul className="about-list d-grid justify-content-center justify-content-lg-start gap-1">
                {about.features.map((item, index) => (
                  <li key={index} className="d-flex align-items-center gap-2">
                    <span className="icon d-center">
                      <FaCheck className="p1-clr" size={16} />
                    </span>
                    <p className="fw-semibold black">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-xl-6 col-lg-5">
            <div className="about-thumb position-relative reveal-left w-100">
              <Image 
                src={about.imageMain}
                alt="about"
                width={600}
                height={500}
                className="w-100"
                priority
              />
              <Image 
                src={about.imageDecor}
                alt="dots"
                width={150}
                height={150}
                className="about-ele"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 