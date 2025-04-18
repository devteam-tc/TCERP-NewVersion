'use client';
import React, { useEffect } from 'react';
import './AllProducts.scss';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const steps = [
  {
    id: 1,
    img: '/progress/process-1.png',
    title: 'New Business Acquisition',
    shape: '/progress/red_arrow_circle_img.png',
  },
  {
    id: 2,
    img: '/progress/process-2.png',
    title: 'ERP Platform Demonstration',
    shape: '/progress/red_bottom_circle_img.png',
  },
  {
    id: 3,
    img: '/progress/process-3.png',
    title: 'Customized Implementation',
    shape: '/progress/red_arrow_circle_img.png',
  },
  {
    id: 4,
    img: '/progress/process-4.png',
    title: 'Ongoing Support & Optimization',
    shape: '/progress/red_bottom_circle_img.png',
  },
];

const WorkProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="workProcess">
      <div className="container">
        <div className="sectionTitle" data-aos="fade-up">
          <h2>How We Stay ahead in the game – <span>Work Process</span></h2>
        </div>
        <div className="row">
          {steps.map((step, index) => (
            <div className="col-xl-3 col-md-6 col-sm-12" key={step.id}>
              <div className="processItem" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                <div className="thumb">
                  <Image src={step.img} alt={step.title} width={100} height={100} />
                  <span>{`0${step.id}`}</span>
                </div>
               
                <div className="shape-wrapper">
             <div className={`shape ${step.id % 2 === 0 ? 'bottom-shape' : 'top-shape'}`}>
                <Image src={step.shape} alt="Shape" width={80} height={80} />
            </div>
            <div className="content">
                  <h4>{step.title}</h4>
                </div>
            </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
