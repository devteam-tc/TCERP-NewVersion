import Image from "next/image";
import Link from "next/link";
import arrowIcon from '@/public/images/icons/icon-right-arrow.svg';
import industryProjectsData from "@/data/industryProjectsData";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SectionTitle from "../SectionTitle";
import { useState } from "react";



const ProjectDetailsPage = ({ industrySlug }) => {
  const projectData = industryProjectsData[industrySlug] || industryProjectsData["agriculture-industry"];
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>

<section className="ep-project-details-section pt-120">
  <div className="container">
    <div className="row align-items-start g-4">
      {/* Left column - Banner + Description */}
      <div className="col-lg-8">
        <div className="project-banner-image position-relative mb-4 mb-lg-0">
          <div className="reveal zoom-out overflow-hidden rounded-20">
            <Image
              priority
              src={projectData.banner}
              width={100}
              height={100}
              alt="Project Banner"
              className="img-fluid custom-banner-img"
            />
          </div>
        </div>

        <div className="project-description">
          <h3 className="title split-text right">{projectData.title}</h3>
          <p>{projectData.description}</p>
          <div className="inner-options">
            <ul className="list-unstyled">
              {projectData.keyPoints.map((point, index) => (
                <li key={index}>
                  <Image src={arrowIcon} alt="icon-right-arrow" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

        {/* <div className="row g-4 two-info-cards">
          <div className="col-md-6">
            <div className="info-card h-100">
              <h4 className="title">Why Choose Us</h4>
              <p>
                Alternative innovation to ethical network environmental whiteboard pursue
                compelling results for premier methods empowerment forward.
              </p>
              <ul className="list-unstyled mt-3">
                <li><span>→</span> <strong>Success Stories</strong></li>
                <li><span>→</span> <strong>Success service</strong></li>
                <li><span>→</span> <strong>Success store</strong></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-card h-100 text-center">
              <div className="icon mb-3">
                <Image src="/images/industry-icons/agriculture-logo-short.png" alt="quote-icon" width={100} height={100}/>
              </div>
              <h4 className="title">Empowering Your Success</h4>
              <p>
                Alternative innovation to ethical network environmental whiteboard pursue
                compelling results for premier methods empowerment forward environmental whiteboard
                pursue process dsign.
              </p>
            </div>
          </div>
        </div> */}

        <div className="row g-4 two-info-cards">
          {projectData.infoCards?.map((card, index) => (
            <div className="col-md-6" key={index}>
              <div className={`info-card h-100 ${index === 1 ? 'text-center' : ''}`}>
                {card.image && (
                  <div className="icon mb-3">
                    <Image src={card.image} alt="card-icon" width={100} height={100} />
                  </div>
                )}
                <h4 className="title">{card.title}</h4>
                <p>{card.description}</p>
                {card.list && (
                  <ul className="list-unstyled mt-3">
                    {card.list.map((item, i) => (
                      <li key={i}><span>→</span> <strong>{item}</strong></li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>


          <div className="faq-section">
            <h2 className="faq-title">Frequently Asked Questions</h2>
                      <div className="faq-body">
                        <div className="accordion">
                          {projectData.faqData.map((item, index) => (
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




        </div>
      </div>

      {/* Right column - Info Box */}
      <div className="col-lg-4">
        <div className="project-information rounded-20">
          <h4 className="title rounded-20 text-center mb-30">Industry Information</h4>
          <ul className="list-unstyled options">
            <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
              <h5 className="flex-shrink-0 label">Industry:</h5>
              <h6>{projectData.industry}</h6>
            </li>
            <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
              <h5 className="flex-shrink-0 label">Solution:</h5>
              <h6>{projectData.solution}</h6>
            </li>
            <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
              <h5 className="flex-shrink-0 label">Modules:</h5>
              <h6>{projectData.modules.join(", ")}</h6>
            </li>
            <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
              <h5 className="flex-shrink-0 label">Result:</h5>
              <h6>{projectData.result.join(",")}</h6>
            </li>
            <li className="d-flex align-items-center rounded-20 gap-4 section-bg">
              <h5 className="flex-shrink-0 label">No of Customers:</h5>
              <h6>{projectData.customers}</h6>
            </li>
          </ul>
        </div>
        {/* Download Widget */}
                    <div className="download-widget mt-5 mb-5">
                      <div
                        className="shape"
                        style={{
                          backgroundImage: `url(${projectData?.downloadWidget?.bgShape})`,
                        }}
                      ></div>
                      <div className="inner-box">
                        <figure className="image-box">
                          <Image
                            src={projectData?.downloadWidget?.image || ""}
                            alt="Book"
                            width={200}
                            height={300}
                          />
                        </figure>
                        <h4>
                          {projectData?.downloadWidget?.title}
                          <span>{projectData?.downloadWidget?.spanTitle}</span>
                        </h4>
                        <button type="button" className="theme-btn btn-one">
                          {projectData?.downloadWidget?.buttonText}
                        </button>
                      </div>
                    </div>
          {/* Demo Redirect Banner */}
<div className="demo-banner-container mt-4 mb-5">
  <Link href="/demo" className="demo-banner-link">
    <Image
      src="/images/book-a-demo-img.jpg" // Update this to your actual image path
      alt="Try Demo"
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
    </>
  );
};

export default ProjectDetailsPage;
