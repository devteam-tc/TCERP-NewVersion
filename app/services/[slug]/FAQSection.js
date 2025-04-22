'use client';
import { useState } from 'react';
import './servicesection.scss';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import faqData from '@/data/services/FAQSection.json';

export default function FAQSection({ service = 'web-development' }) {
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Normalize service name and get FAQs
  const normalizedService = service?.toLowerCase().trim();
  const faqs = faqData[normalizedService] || faqData['web-development'];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="dueal-section pt_120 pb_120">
    <div className="auto-container">
      <div className="row clearfix">
        {/* Process Steps */}
        <div className="col-lg-6 col-md-12 col-sm-12 process-column mb-lg-0 mb-5">
          <div className="content_block_two">
            <div className="content-box mr_100">
              <div className="sec-title pb_35">
                <span className="sub-title mb_10">The Process</span>
                <h2>How it Works</h2>
              </div>
              <div className="inner-box">
                <div className="single-item">
                  <span className="count-text">1</span>
                  <h3>Sign up, Its Free!</h3>
                  <p>We set up your account and onboard you quickly.</p>
                </div>
                <div className="single-item">
                  <span className="count-text">2</span>
                  <h3>Find Best Solutions</h3>
                  <p>Access services tailored to your goals.</p>
                </div>
                <div className="single-item">
                  <span className="count-text">3</span>
                  <h3>Grow Your Business</h3>
                  <p>Optimize, scale, and monitor progress.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="col-lg-6 col-md-12 col-sm-12 faq-column">
          <div className="ep-faq-section">
            <div className="sec-title pb_35">
              <span className="sub-title mb_10">FAQ</span>
              <h2>Frequently Asked Questions</h2>
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
}

// Process Steps Component
const ProcessSteps = () => (
  <div className="content_block_two">
    <div className="content-box mr_100">
      <div className="sec-title pb_35">
        <span className="sub-title mb_10">The Process</span>
        <h2>How it Works</h2>
      </div>

      <div className="inner-box">
        <ProcessStep
          number="1"
          title="Sign up, Its Free!"
          description="We set up your account and onboard you quickly."
        />
        <ProcessStep
          number="2"
          title="Find Best Solutions"
          description="Access services tailored to your goals."
        />
        <ProcessStep
          number="3"
          title="Grow Your Business"
          description="Optimize, scale, and monitor progress."
        />
      </div>
    </div>
  </div>
);

// Process Step Component
const ProcessStep = ({ number, title, description }) => (
  <div className="single-item">
    <span className="count-text">{number}</span>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// FAQ Item Component
const FAQItem = ({ item, index, isActive, onToggle }) => (
  <li className={`accordion block ${isActive ? 'active-block' : ''}`}>
    <div
      className={`acc-btn ${isActive ? 'active' : ''}`}
      onClick={() => onToggle(index)}
    >
      <div className="icon-box">
        {isActive ? (
          <CiCircleMinus size={24} />
        ) : (
          <CiCirclePlus size={24} />
        )}
      </div>
      <h4>{item.question}</h4>
    </div>
    <div className={`acc-content ${isActive ? 'current' : ''}`}>
      <div className="content">
        <p>{item.answer}</p>
      </div>
    </div>
  </li>
);

