import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import arrowIcon from '@/public/images/icons/icon-right-arrow.svg';
import projectData from '@/data/projectDetails.json';
import SectionTitle from "../SectionTitle";

// Project Banner Component
const ProjectBanner = ({ banner }) => (
  <div className="project-banner-image position-relative mb-4 mb-lg-0">
    <div className="reveal zoom-out overflow-hidden rounded-20">
      <Image
        priority
        src={banner}
        width={100}
        height={100}
        alt={`Industry banner showcasing ${banner.split('/').pop().split('-').join(' ').replace('.jpg', '')}`}
        className="img-fluid custom-banner-img"
      />
    </div>
  </div>
);

// Project Description Component
const ProjectDescription = ({ title, description, keyPoints }) => (
  <div>
    <h3 className="title split-text right">{title}</h3>
    <p>{description}</p>
    <div className="inner-options">
      <ul className="list-unstyled">
        {keyPoints.map((point, index) => (
          <li key={index}>
            <Image 
              src={arrowIcon} 
              alt={`Bullet point arrow for ${point}`}
              width={24}
              height={24}
            />
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
// Info Cards Component
const InfoCards = ({ cards }) => (
  <div className="row g-4 two-info-cards">
    {cards?.map((card, index) => (
      <div className="col-md-6" key={index}>
        <div className={`info-card h-100 ${index === 1 ? 'text-center' : ''}`}>
          {card.image && (
            <div className="icon" style={{ 
              width: '100%', 
              position: 'relative', 
              
            }}>
              <Image 
                src={card.image} 
                alt={`${card.title} icon - ${card.description.split('.')[0]}`}
                width={100}
                height={100}
                style={{
                  Width: '100%',
                  height: '100%',
                  objectFit: '100% 100%'
                }}
              />
            </div>
          )}
          <h4 className="title">{card.title}</h4>
          <p>{card.description}</p>
          {card.list && (
            <ul className="list-unstyled mt-3">
              {card.list.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <strong>{item}</strong>
                  <Image
                    src="/images/industry-icons/checkmark-icon.png"
                    alt={`${item} feature checkmark`}
                    width={20}
                    height={20}
                    style={{ flexShrink: 0 }}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ))}
  </div>
);

// FAQ Section Component
const FAQSection = ({ faqData, activeIndex, toggleAccordion }) => (
  <div className="faq-section">
    <h2 className="faq-title">Frequently Asked Questions</h2>
    <div className="faq-body">
      <div className="accordion">
        {faqData.map((item, index) => (
          <div className="accordion-item" key={item.id}>
            <div className="accordion-header">
              <button
                className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleAccordion(index)}
              >
                {item.id}. {item.question}
              </button>
            </div>
            <div className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`}>
              <div className="accordion-body">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Industry Information Component
const IndustryInformation = ({ data }) => (
  <div className="project-information rounded-20">
    <h4 className="title rounded-20 text-center mb-30">Industry Information</h4>
    <ul className="list-unstyled options">
      <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
        <h5 className="flex-shrink-0 label">Industry:</h5>
        <h6>{data.industry}</h6>
      </li>
      <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
        <h5 className="flex-shrink-0 label">Solution:</h5>
        <h6>{data.solution}</h6>
      </li>
      <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
        <h5 className="flex-shrink-0 label">Modules:</h5>
        <h6>{data.modules.join(", ")}</h6>
      </li>
      <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
        <h5 className="flex-shrink-0 label">Result:</h5>
        <h6>{data.result.join(", ")}</h6>
      </li>
    </ul>
  </div>
);

// Download Widget Component
const DownloadWidget = ({ widget }) => (
  <div className="download-widget mt-5 mb-5">
    <div
      className="shape"
      style={{
        backgroundImage: `url(${widget?.bgShape})`,
      }}
    ></div>
    <div className="inner-box">
      <figure className="image-box">
        <Image
          src={widget?.image || ""}
          alt={`${widget?.title} ${widget?.spanTitle} preview`}
          width={200}
          height={300}
        />
      </figure>
      <h4>
        {widget?.title}
        <span>{widget?.spanTitle}</span>
      </h4>
      <button type="button" className="theme-btn btn-one">
        {widget?.buttonText}
      </button>
    </div>
  </div>
);

// Demo Banner Component
const DemoBanner = () => (
  <div className="demo-banner-container mt-4 mb-5">
    <Link href="/demo" className="demo-banner-link">
      <Image
        src="/images/industry-icons/book-a-demo-img.jpg"
        alt="Book a personalized demo of our industry solutions"
        width={1200}
        height={300}
        className="img-fluid"
      />
    </Link>
  </div>
);

const ProjectDetailsPage = ({ industrySlug = "agriculture-industry" }) => {
  const currentProject = projectData[industrySlug] || projectData["agriculture-industry"];
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="ep-project-details-section pt-120">
      <div className="container">
        <div className="row align-items-start g-4">
          {/* Left column */}
          <div className="col-lg-8">
            <ProjectBanner banner={currentProject.banner} />
            <div className="project-description">
              <ProjectDescription
                title={currentProject.title}
                description={currentProject.description}
                keyPoints={currentProject.keyPoints}
              />
              <InfoCards cards={currentProject.infoCards} />
              <FAQSection
                faqData={currentProject.faqData}
                activeIndex={activeIndex}
                toggleAccordion={toggleAccordion}
              />
            </div>
          </div>

          {/* Right column */}
          <div className="col-lg-4">
            <IndustryInformation data={currentProject} />
            <DownloadWidget widget={currentProject.downloadWidget} />
            <DemoBanner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsPage;
