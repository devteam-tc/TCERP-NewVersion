'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

// Custom hook to detect mobile/small screens
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < breakpoint);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, [breakpoint]);

  return isMobile;
}

const Banner = () => {
  const isMobile = useIsMobile();
  return (
    <section className="banner-hero" style={{ position: 'relative', overflow: 'hidden', height: '100vh', boxShadow: 'none' }}>
      {isMobile ? (
        <img
          src="/images/Banner_bg.webp"
          alt="Banner Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            boxShadow: 'none',
            zIndex: 0,
          }}
        />
      ) : (
        <video
          className="banner-video"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            objectFit: 'cover',
            boxShadow: 'none',
            zIndex: 0,
          }}
          poster="/images/Banner_bg.webp"
        >
          <source src="/videos/banner.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="banner-center-content" style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#fff', paddingTop: '8vw' }}>
        <h1 className="banner-title">Cloud - Based<br />ERP Software Solutions</h1>
        <p className="banner-subtitle">
          Empower your business with Tech Cloud ERP, a scalable cloud-based ERP software that streamlines operations, boosts productivity and fuels growth.
        </p>
        <p className='mb-5' style={{ color: '#ef5226', fontWeight: '600' }} >WE DON'T JUST SELL SOFTWARE, WE POWER YOUR BUSINESS AT ROCKET SPEED.</p>
        <Link href="/demo" className="banner-demo-btn">Book a Demo</Link>
      </div>
    </section>
  );
};

export default Banner;
