'use client';

import React, { useState } from "react";
import faqData from "../../../data/pricing/faqSection.json";
import SectionTitle from "../../../components/containers/SectionTitle";

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
            <SectionTitle subTitle="Ask Question" title="Empowering Progress Through Technology" extraClass="mb-30" />
            <div className="faq-body">
              <div className="accordion">
                {faqData.map((item, index) => (
                  <div className="accordion-item" key={index}>
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
