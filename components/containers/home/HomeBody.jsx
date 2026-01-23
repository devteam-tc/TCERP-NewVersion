'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomeBody = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const cardsContainerRef = useRef(null);

  const images = [
    "chart1.webp",
    "chart2.webp",
    "chart3.webp",
    "chart4.webp",
    "chart5.webp",
    "chart6.webp"
  ];

  // Close card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardsContainerRef.current && !cardsContainerRef.current.contains(event.target)) {
        setExpandedCard(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCardClick = (index, e) => {
    e.stopPropagation();
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="banner-center-content">
      <h1 className="banner-title">
        Powerful Cloud ERP for Manufacturing,<br />
        Trading & Project-Driven Businesses
      </h1>

      <p className="banner-subtitle">
        Streamline operations, gain real-time insights, and scale smarter with Tech Cloud ERP for industry ready workflows
      </p>

      <ul className="banner-subtitle-list">
        <li>End-to-end business control</li>
        <li>Industry specific modules</li>
        <li>Secure cloud hosting</li>
        <li>Scalable & customizable</li>
      </ul>

      <Link href="/demo" className="gradient-btn">
        Get an Industry Specific Demo
      </Link>

      <div className="banner-cards-container" ref={cardsContainerRef}>
        <div className="banner-cards-track">
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className={`card-item ${expandedCard === i ? 'expanded' : ''}`}
              onClick={(e) => handleCardClick(i, e)}
            >
              <Image
                src={`/images/banner/new/${img}`}
                alt={`Chart ${i + 1}`}
                width={expandedCard === i ? 300 : 200}
                height={expandedCard === i ? 300 : 200}
                style={{
                  transition: 'all 0.3s ease',
                  transform: expandedCard === i ? 'scale(1.5)' : 'scale(1)'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBody;