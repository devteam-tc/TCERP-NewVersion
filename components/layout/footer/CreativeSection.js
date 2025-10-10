'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import './CreativeSection.scss';

const CreativeSection = () => {
  const planeRef = useRef(null);

  useEffect(() => {
    const handleAnimationIteration = () => {
      if (planeRef.current) {
        // Reset animation for smooth loop
        planeRef.current.style.animation = 'none';
        planeRef.current.offsetHeight; // Trigger reflow
        planeRef.current.style.animation = 'fly 20s linear infinite';
        planeRef.current.style.transform = 'rotate(-20deg)';
      }
    };

    const plane = planeRef.current;
    if (plane) {
      plane.addEventListener('animationiteration', handleAnimationIteration);
    }

    return () => {
      if (plane) {
        plane.removeEventListener('animationiteration', handleAnimationIteration);
      }
    };
  }, []);

  return (
    <div className="scrolling-background-container">
      <div className="scrolling-bg" aria-hidden="true"></div>
      <div className="staticImages">
        <div className="aeroplane-container">
          <Image 
            ref={planeRef}
            src="/footer/flight.webp" 
            alt="Flying aeroplane animation"
            width={600}
            height={600}
            className="aeroplane"
            priority
            loading="eager"
          />
          {/* <Image 
            src="/footer/flightshadow.webp" 
            alt="Aeroplane shadow"
            width={600}
            height={600}
            className="aeroplane-shadow"
            priority
            loading="eager"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default CreativeSection;
