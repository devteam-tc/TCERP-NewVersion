'use client';
import { useState } from 'react';
import './servicesection.scss';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import SectionTitle from '@/components/containers/SectionTitle';

const FAQ_DATA = {
  'web-development': [
    {
      question: 'What technologies do you use for web development?',
      answer: 'We use modern technologies like React, Next.js, and Node.js.',
    },
    {
      question: 'Do you offer custom website solutions?',
      answer: 'Yes, tailored solutions are our specialty.',
    },
    {
      question: 'Is SEO included in web development?',
      answer: 'Yes, we include basic on-page SEO.',
    },
  ],
  'app-development': [
    {
      question: 'Which platforms do you build apps for?',
      answer: 'We build iOS and Android apps using React Native and Flutter.',
    },
    {
      question: 'Do you assist with app store deployment?',
      answer: 'Yes, we help you publish apps to both stores.',
    },
    {
      question: 'Can I track my app development progress?',
      answer: 'Yes! We give regular updates and demos.',
    },
  ],
  'digital-marketing': [
    {
      question: 'What channels do you use for marketing?',
      answer: 'We use SEO, Google Ads, social media, and email.',
    },
    {
      question: 'Can you run ads for my brand?',
      answer: 'Absolutely. We manage ad campaigns on major platforms.',
    },
    {
      question: 'How do you measure campaign success?',
      answer: 'With detailed analytics reports and KPIs.',
    },
  ],
};

export default function FAQSection({ service = 'web-development' }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const normalizedService = service?.toLowerCase().trim();
  const faqs = FAQ_DATA[normalizedService] || FAQ_DATA['web-development'];

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

