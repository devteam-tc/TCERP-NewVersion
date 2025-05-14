'use client';

import { useState } from 'react';
import faqData from '../../../data/pricing/faqsection.json'; 

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqSection">
      <div className="container">
        <div className="contentt">
          <div className="textContent">
            <h4 className="support">PRICING</h4>
            <h2 className="titlee">
              Frequently<br />Asked Questions
            </h2>
            <p className="subtitle">
              Get answers to common questions about TCERP pricing, plans, and payment options.
            </p>
            <button className="getInTouch">Get In Touch</button>
          </div>

          <div className="faqList">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`faqItem ${activeIndex === index ? 'active' : ''}`}
              >
                <button
                  className="questionButton"
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <span className="icon">
                    {activeIndex === index ? '-' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
