'use client';
import { useState } from 'react';
import webDevelopmentData from '../../../data/services/web-development.json';
import appDevelopmentData from '../../../data/services/app-development.json';
import digitalMarketingData from '../../../data/services/digital-marketing.json';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';

const FAQSection = ({ service = 'web-development' }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Get data based on service type
  const getServiceData = (serviceType) => {
    switch(serviceType?.toLowerCase().trim()) {
      case 'app-development':
        return appDevelopmentData;
      case 'digital-marketing':
        return digitalMarketingData;
      case 'web-development':
      default:
        return webDevelopmentData;
    }
  };

  const serviceData = getServiceData(service);
  const { faq: faqs, process } = serviceData;

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="dueal-section pt_120 pb_120">
      <div className="container">
        <div className="row clearfix">
          {/* Process Steps */}
          <div className="col-lg-6 col-md-12 col-sm-12 process-column mb-lg-0 mb-5">
            <div className="content_block_two">
              <div className="content-box mr_100">
                <div className="sec-title pb_35">
                  <span className="sub-title mb_10 mb-2">The Process</span>
                  <h2 className='section-title title-anim undefined'>How it Works</h2>
                </div>
                <div className="inner-box">
                  {process.map((item) => (
                    <div className="single-item" key={item.step}>
                      <span className="count-text">{item.step}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Column */}
          <div className="col-lg-6 col-md-12 col-sm-12 faq-column">
            <div className="ep-faq-section">
              <div className="sec-title pb_35 ">
                <span className="sub-title mb_10 mb-2">FAQ</span>
                <h2  className='section-title title-anim undefined'>Frequently Asked Questions</h2>
              </div>
              <div className="faq-body">
                <div className="accordion">
                  {faqs.map((item, index) => (
                    <div className="accordion-item" key={index}>
                      <div className="accordion-header">
                        <button
                          className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
                          type="button"
                          onClick={() => toggleFAQ(index)}
                        >
                          {index + 1}. {item.question}
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
      </div>
    </section>
  );
};

export default FAQSection; 