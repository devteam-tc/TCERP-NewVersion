"use client";

import React from 'react';
import WhoImg from '../../../public/images/img/who-we-are.png';
import Image from 'next/image';

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="who-we-are-title text-center">Who We Are</div>
            <div className="who-we-are-subtitle text-center">What Sets Us Apart
            </div>
            <div className="image-container mt-5">
              <Image
                src={WhoImg}
                alt="Tech Cloud ERP"
                className="main-image"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="who-we-are-description">
              <p>
              At Tech Cloud ERP we provide industry-specific ERP solutions tailored to your business needs at an affordable cost. With over 25 years of experience, we help manufacturers streamline operations using the latest technologies, offering personalized features and flexible pricing that generic ERP providers often lack.
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
