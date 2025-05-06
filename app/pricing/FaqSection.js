'use client';

import { useState } from 'react';
import styles from './FaqSection.module.scss';
import Image from 'next/image';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What pricing plans does TCERP offer?",
      answer: "TCERP offers flexible pricing plans starting from basic to enterprise levels. Our plans are designed to scale with your business needs, with features like inventory management, accounting, and customer relationship management included based on the plan level."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial that gives you full access to our platform's features. This allows you to thoroughly test our system and see how it can benefit your business before making a commitment."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated and reflected in your next billing cycle. Our flexible pricing ensures you only pay for what you need."
    },
    {
      question: "Do you offer special pricing for startups?",
      answer: "Yes, we have special startup-friendly pricing packages and discounts for early-stage businesses. Contact our sales team to learn more about our startup program and how we can support your growth."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. For enterprise plans, we can also accommodate custom payment arrangements and invoicing terms to suit your organization's needs."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h4 className={styles.support}>PRICING</h4>
            <h2 className={styles.title}>Frequently<br />Asked Questions</h2>
            <p className={styles.subtitle}>
              Get answers to common questions about TCERP pricing, plans, and payment options.
            </p>
            <button className={styles.getInTouch}>Get In Touch</button>
            {/* <div className={styles.imageWrapper}>
              <Image 
                src="/faq-image.png"
                alt="Support team"
                width={500}
                height={500}
                priority
              />
            </div> */}
          </div>

          <div className={styles.faqList}>
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              >
                <button 
                  className={styles.questionButton}
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <span className={styles.icon}>
                    {activeIndex === index ? '-' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className={styles.answer}>
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
