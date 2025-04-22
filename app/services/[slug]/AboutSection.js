'use client';

import './servicesection.scss';
import Image from 'next/image'; 
import servicesContent from '@/data/services/AboutSection.json';


export default function AboutSection({ slug }) {
  // Validate and normalize the slug
  const content = servicesContent[slug];
  if (!content) return null;

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
                  {content.subtitle}
                </span>
                <h2 className="mb-xxl-4 mb-3 wow fadeInUp black fw-bold visible-slowly-right" data-wow-delay=".3s">
                  {content.heading}
                </h2>
                <p className="pra fs-seven">{content.paragraph}</p>
              </div>

              {/* Features List */}
              <ul className="about-list d-grid justify-content-center justify-content-lg-start gap-1">
                {content.features.map((item, index) => (
                  <li key={index} className="d-flex align-items-center gap-2">
                    <span className="icon d-center">
                      <i className="fa-solid fa-check p1-clr fs-eight"></i>
                    </span>
                    <p className="fw-semibold black">{item}</p>
                  </li>
                ))}
              </ul>

              <div className="d-flex flex-sm-nowrap flex-wrap justify-content-lg-start justify-content-center align-items-center gap-xxl-4 gap-xl-3 gap-2">
                {/* <div>
                  <a
                    href="about.html"
                    className="common-btn box-style cmn-style1 box-bg w-100 white d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 overflow-hidden rounded-5"
                  >
                    Discover More
                  </a>
                </div> */}
                {/* <div className="about-call d-flex align-items-center gap-3">
                  <div className="icon bg-color d-center rounded-circle">
                    <i className="fa-solid fa-phone-volume fs-six p1-clr"></i>
                  </div>
                  <div className="cont">
                    <span className="fs-seven pra d-block">Call us free</span>
                    <a href="#0" className="fs-six black fw-semibold">
                      019 25648 62598
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-xl-6 col-lg-5">
            <div className="about-thumb position-relative reveal-left w-100">
              <Image 
                src={content.imageMain}
                alt="about"
                width={600}
                height={500}
                className="w-100"
                priority
              />
              <Image 
                src={content.imageDecor}
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
}



