'use client';

import { useState } from 'react';
import styles from './FaqSection.module.scss';
import Image from 'next/image';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What affects the price of Tech Cloud ERP?",
      answer: " The price depends on how many users you have, which features (modules) you need, and how much customization your business wants. Extra services like training or support may also add to the cost."
    },
    {
      question: " Does the cost change if I choose cloud or on-premise ERP?",
      answer: " Yes. A cloud plan has a monthly fee and is easy to start with. An on-premise setup has a bigger one-time cost because you install it on your own servers. Both options have different costs based on your setup."
    },
    {
      question: " Are there any extra or hidden charges?",
      answer: " We keep pricing clear, but things like setup help, special features, extra training, or custom reports might have extra charges. We'll tell you about these in advance."
    },
    {
      question: "Can I upgrade my plan later as my company grows?",
      answer: " Yes! You can move to a bigger plan or add more users and features anytime. We make it simple to upgrade as your business grows."
    },
    
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
