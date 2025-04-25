'use client';
import './cards.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import servicesData from '../../../data/services.json';

const ServiceCard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const accordionItems = document.querySelectorAll(".accordionItem");

      accordionItems.forEach(item => {
        item.addEventListener("click", () => {
          accordionItems.forEach(i => i.classList.remove("active"));
          item.classList.add("active");
        });
      });

      return () => {
        accordionItems.forEach(item => {
          item.replaceWith(item.cloneNode(true));
        });
      };
    }
  }, [isMobile]);

  const ServiceBox = ({ icon, title, description, thumb, link }) => (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
      <div className="service-box">
        <div className="single-service-box">
          <div className="service-icon">
            <Image 
              src={icon} 
              alt={title} 
              width={50} 
              height={50} 
              
            />
          </div>
          <div className="service-box-content">
            <h4 className="service-title">
              <Link href={link} className="text-decoration-none text-dark">{title}</Link>
            </h4>
            <p className="service-desc ">{description}</p>
          </div>
        </div>
        <div className="service-thumb">
          <Image 
            src={thumb} 
            alt={title} 
            width={50} 
            height={50} 
             
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="section-padding feature-studio-section fix space-bottom">
      <div className="container">
        <div className="row mb-xl-5 mb-4 text-center justify-content-center">
          <div className="col-lg-7">
            <div className="section-title">
              <span className="sub-badge p1-clr fw-semibold fs-seven text-uppercase d-block mb-3">
                OUR FEATURED PROJECTS
              </span>
              <h2 className="wow fadeInUp black fw-bold visible-slowly-right" data-wow-delay=".3s">
                Selected case studies
              </h2>
            </div>
          </div>
        </div>

        {isMobile ? (
          <div className="row g-4 justify-content-center">
            {servicesData.services.map((service) => (
              <ServiceBox
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                thumb={service.thumb}
                link={service.link}
              />
            ))}
          </div>
        ) : (
          <div className="customImagesWrapper">
            <div className="accordion">
              {servicesData.services.map((service) => (
                <div key={service.id} className={`accordionItem ${service.id === 1 ? 'active' : ''}`}>
                  <Image 
                    src={service.thumb} 
                    alt={service.title} 
                    width={800} 
                    height={600}
                    className="img-fluid"
                  />
                  <div className="conteBox">
                    <div className="box">
                      <div className="serialInner">
                        <span className="serial">{service.serial}</span>
                        <h4 className="black">
                          <Link href={service.link} className="black">{service.title}</Link>
                        </h4>
                      </div>
                      <p className="pra fs-seven mb-xxl-4 mb-xl-3 mb-2 pb-xxl-1">
                        {service.description}
                      </p>
                      <Link href={service.link} className="fs-seven fw-semibold p1-clr">Explore More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceCard; 