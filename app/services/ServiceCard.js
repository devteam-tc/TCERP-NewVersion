'use client';
import './cards.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import servicesData from '@/data/services/servicesData.json';

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
    <div className="col-lg-4 col-md-6 mb-5">
      <div className="service-box">
        <div className="single-service-box">
          <div className="service-icon">
            <Image src={icon} alt="icon" />
          </div>
          <div className="service-box-content">
            <h4 className="service-title">
              <a href={link}>{title}</a>
            </h4>
            <p className="service-desc">{description}</p>
          </div>
        </div>
        <div className="service-thumb">
          <Image src={thumb} alt="thumb" />
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
          <div className="row">
            <ServiceBox
              icon="/images/services/ser-icon.png"
              title="Web Development"
              description="Success profesions development our solutions sapien maximu creative services."
              thumb="/images/services/ser-thumb.webp"
              link="service-details.html"
            />
            <ServiceBox
              icon="/images/services/ser-icon2.png"
              title="Digital Marketing"
              description="Success profesions development our solutions sapien maximu creative services."
              thumb="/images/services/ser-thumb2.png"
              link="service-details.html"
            />
            <ServiceBox
              icon="/images/services/ser-icon3.png"
              title="App Development"
              description="Success profesions development our solutions sapien maximu creative services."
              thumb="/images/services/ser-thumb3.png"
              link="service-details.html"
            />
          </div>
        ) : (
          <div className="customImagesWrapper">
            <div className="accordion">
              <div className="accordionItem active">
                <Image src="/images/services/digital.webp" alt="img" />
                <div className="conteBox">
                  <div className="box">
                    <div className="serialInner">
                      <span className="serial">01</span>
                      <h4 className="black">
                        <Link href="/services/digital-marketing" className="black">Digital Marketing</Link>
                      </h4>
                    </div>
                    <p className="pra fs-seven mb-xxl-4 mb-xl-3 mb-2 pb-xxl-1">
                      The housekeepers we hired are professionals who take pride
                    </p>
                    <Link href="/services/digital-marketing" className="fs-seven fw-semibold p1-clr">Explore More</Link>
                  </div>
                </div>
              </div>

              <div className="accordionItem">
                <Image src="/images/services/web-app.webp" alt="img" />
                <div className="conteBox">
                  <div className="box">
                    <div className="serialInner">
                      <span className="serial">02</span>
                      <h4 className="black">
                        <Link href="/services/web-development" className="black">Web Development</Link>
                      </h4>
                    </div>
                    <p className="pra fs-seven mb-xxl-4 mb-xl-3 mb-2 pb-xxl-1">
                      The housekeepers we hired are professionals who take pride
                    </p>
                    <Link href="/services/web-development" className="fs-seven fw-semibold p1-clr">Explore More</Link>
                  </div>
                </div>
              </div>

              <div className="accordionItem">
                <Image src="/images/services/mobile-app.webp" alt="img" />
                <div className="conteBox">
                  <div className="box">
                    <div className="serialInner">
                      <span className="serial">03</span>
                      <h4 className="black">
                        <Link href="/services/app-development" className="black">App Development</Link>
                      </h4>
                    </div>
                    <p className="pra fs-seven mb-xxl-4 mb-xl-3 mb-2 pb-xxl-1">
                      The housekeepers we hired are professionals who take pride
                    </p>
                    <Link href="/services/app-development" className="fs-seven fw-semibold p1-clr">Explore More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceCard; 