'use client';

import React, { useState } from "react";
import faqData from "../../data/demo/faqSection.json";
// import SectionTitle from "../../components/containers/SectionTitle";

const FaqSection = ({ extraClassName = '' }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!faqData || faqData.length === 0) {
    return <p>No FAQ data available.</p>;
  }

  return (
    <section className={`ep-faq-section pt-60 pb-60 ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-body">
              <div className="accordion">
                {faqData.map((item, index) => (
                  <div className="accordion-item" key={index} 
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
                  >
                    <div className="accordion-header">
                      <button
                        className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
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
    </section>
  );
};

export default FaqSection;
