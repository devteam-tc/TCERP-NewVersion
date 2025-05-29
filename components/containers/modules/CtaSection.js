'use client';

import React from 'react';
import { FiPlay } from 'react-icons/fi'; // Assuming you might need a play icon for "View demo"
import './CtaSection.scss';
import { useRouter } from 'next/navigation';

const CtaSection = () => {
  const router = useRouter();

  const handleViewDemoClick = () => {
    // Replace '/demo' with the actual path to your demo page
    router.push('/demo'); 
  };

  const handleContactUsClick = () => {
    // Replace '/contact' with the actual path to your contact page
    router.push('/contact-us');
  };

  return (
    <div className="ctaSection-container">
      <div className="ctaSection-content">
        <h2 className="ctaSection-title">Want a Sneak Peek ?</h2>
        <p className="ctaSection-subtitle">Discover how our platform can simplify your workflow and drive business growth.</p>
        <div className="ctaSection-buttons">
          <button 
            className="ctaSection-button ctaSection-button--outline"
            onClick={handleViewDemoClick}
          >
            <FiPlay size={18} /> View Demo
          </button>
          <button 
            className="ctaSection-button ctaSection-button--primary"
            onClick={handleContactUsClick}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
