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
            <div className="who-we-are-subtitle text-center">Discover the power of Tech Cloud ERP</div>
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
              Our company focusses on providing customised ERP software features at an affordable cost. We simplify the ERP process for manufacturers and provide personalised and developed software to meet specific company requirements across all segments. We have been using the latest technologies to provide the best ERP solutions to our customers for over 25 years.
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
