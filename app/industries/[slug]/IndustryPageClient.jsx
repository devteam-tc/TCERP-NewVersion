'use client';

import { useEffect, useState } from 'react';
import Header from "../../../components/layout/header/Header";
import PageHeader from "../../../components/layout/PageHeader";
import Footer from "../../../components/layout/footer/Footer";
import CustomCursor from "../../../components/layout/CustomCursor";
import { FaHome } from 'react-icons/fa';
import Image from 'next/image';
import cloudIcon from '../../../public/images/industry-icons/checkmark-icon.svg';
import DownloadWidget from './DownloadWidget';
import Link from 'next/link';

export default function IndustryPageClient({ industryData }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Initialize Bootstrap's JavaScript functionality
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const breadcrumbs = [
    { label: "Home", link: "/", icon: FaHome },
    { label: "All Industries", link: "/industries" },
    { label: industryData.title, link: null },
  ];

  return (
    <>
      <Header />
      <PageHeader title={industryData.title} breadcrumbs={breadcrumbs} />
      
      <section className="ep-project-details-section pt-20">
        <div className="container">
          <div className="row align-items-start g-4">
            {/* Left column */}
            <div className="col-lg-8">
              {/* Banner */}
              <div className="project-banner-image position-relative mb-4 mb-lg-0 mt-4">
                <div className="reveal zoom-out overflow-hidden" style={{ width: '100%', aspectRatio: '2/1' }}>
                  <Image
                    priority
                    src={industryData.banner}
                    width={1200}
                    height={600}
                    alt={`Industry banner showcasing ${industryData.title}`}
                    className="img-fluid custom-banner-img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </div>
              </div>

              {/* Description */}
              <section>
                <h3 className="title split-text right py-2">{industryData.title}</h3>
                <p className="lead">{industryData.description}</p>
              </section>

              <div className="inner-options">
                <ul className="list-unstyled py-2">
                  {industryData.keyPoints?.map((point, index) => (
                    <div key={index} style={{display: "flex", gap: "10px", alignItems: "start", justifyContent: "left"}}>
                      <div>
                        <Image 
                          src={cloudIcon} 
                          alt={`Bullet point arrow for ${point}`}
                          width={20}
                          height={20}
                        />
                      </div>
                      <li>{point}</li>
                    </div>
                  ))}
                </ul>
              </div>

              {/* Info Cards */}
              <section className="info-cards py-5">
                <div className="row">
                  {industryData.infoCards?.map((card, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="card h-100 border-0 shadow-sm mb-4">
                        <div className="info-card">
                          <div className="d-flex align-items-center mb-3">
                            <div className="icon-wrapper me-3">
                              <Image
                                src={card.image}
                                alt={`${card.title || 'Info Card'} icon`}
                                width={48}
                                height={48}
                              />
                            </div>
                            <h4 className="mb-0">{card.title}</h4>
                          </div>
                          <p className="mb-3">{card.description}</p>
                          <ul className="list-unstyled mb-0">
                            {card.list?.map((item, idx) => (
                              <li key={idx} className="mb-2">
                                <Image
                                  src="/images/industry-icons/checkmark-icon.svg"
                                  alt={`${item} feature checkmark`}
                                  width={20}
                                  height={20}
                                  style={{ flexShrink: 0 }}
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ Section */}
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-body">
        <div className="accordion">
          {industryData.faqData?.map((item, index) => (
            <div 
              className={`accordion-item ${activeIndex === index ? 'active' : ''}`} 
              key={item.id}
              style={{
                border: activeIndex === index ? '2px solid var(--bs-primary-color)' : '1px solid #dee2e6',
                boxShadow: activeIndex === index ? '0 0 10px rgba(0, 123, 255, 0.2)' : 'none',
                borderRadius: '8px',
                marginBottom: '10px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                ':hover': {
                  border: '2px solid var(--bs-primary-color)',
                  boxShadow: '0 0 10px rgba(0, 123, 255, 0.2)'
                }
              }}
              onMouseEnter={(e) => {
                if (activeIndex !== index) {
                  e.currentTarget.style.border = '2px solid var(--bs-primary-color)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeIndex !== index) {
                  e.currentTarget.style.border = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
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
            </div>

            {/* Right column */}
            <div className="col-lg-4">
              {/* Industry Information */}

                <div className="project-information">
                    <h4 className="title text-center mb-30">Industry Information</h4>
                    <ul className="list-unstyled options">
                        <li className="d-flex align-items-start rounded-20 gap-4 section-bg">
                        <h5 className="flex-shrink-0 label">Industry:</h5>
                        <h6>{industryData.industry}</h6>
                        </li>
                        <li className="d-flex align-items-start rounded-20 gap-4 section-bg">
                        <h5 className="flex-shrink-0 label">Solution:</h5>
                        <h6 className="mb-0">{industryData.solution}</h6>
                        </li>
                        <li className="d-flex align-items-start rounded-20 gap-4 section-bg">
                        <h5 className="flex-shrink-0 label">Modules:</h5>
                        <h6 className="mb-0">{industryData.modules?.join(", ")}</h6>
                        </li>
                        <li className="d-flex align-items-start rounded-20 gap-4 section-bg">
                        <h5 className="flex-shrink-0 label">Result:</h5>
                        <h6 className="mb-0">{industryData.result?.join(", ")}</h6>
                        </li>
                    </ul>
                    </div>

              {/* Download Widget */}
              {industryData.downloadWidget && (
                <DownloadWidget
                  bgShape={industryData.downloadWidget.bgShape}
                  image={industryData.downloadWidget.image}
                  title={industryData.downloadWidget.title}
                  spanTitle={industryData.downloadWidget.spanTitle}
                  buttonText={industryData.downloadWidget.buttonText}
                />
              )}

                <div className="demo-banner-container mt-4 mb-5" style={{ display: 'none' }}>
                    <style jsx>{`
                        @media (min-width: 769px) {
                        .demo-banner-container {
                            display: block !important;
                        }
                        }
                    `}</style>
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CustomCursor />
    </>
  );
} 