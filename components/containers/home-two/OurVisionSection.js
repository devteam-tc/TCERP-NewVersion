import React from 'react';
import './OurVisionSection.scss';
import { MdLightbulbOutline } from 'react-icons/md';
import { TbTargetArrow } from "react-icons/tb";

const OurVisionSection = () => {
  return (
    <section className="our-vision-section pt-120 pb-60">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="section-title">
              <h2 className='vision-title'>About us</h2>
              <p className="description">
                Innovative Hyderabad-based cloud ERP specialists, delivering customizable,
                scalable, and secure business management solutions with real-time
                insights and dedicated support.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="vision-cards">
              <div className="vision-card blue">
                <div className="card-header">
                  <div className="icon">
                    <MdLightbulbOutline size={24} color="#fff" />
                  </div>
                  <h3>Our Vision</h3>
                </div>
                <p>
                Our vision is to deliver a secure, scalable platform that boosts productivity, drives innovation and accelerates digital transformation through real-time insights, optimized processes and advanced technologies across diverse industries.
                </p>
              </div>
              <div className="vision-card orange">
                <div className="card-header-orange">
                  <div className="icon">
                    <TbTargetArrow  size={24} color="#fff" />
                  </div>
                  <h3>Our Mission</h3>
                </div>
                <p>
                Our mission is to deliver innovative cloud-based ERP solutions that enhance efficiency, simplify complex processes, enable real-time decision-making and support scalable growth, empowering businesses of all sizes to achieve long-term success across industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVisionSection;
