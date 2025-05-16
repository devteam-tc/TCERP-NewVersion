"use client"
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SectionTitle from "../SectionTitle";
import Link from "next/link";
import { servicesTwo } from "../../../data/services";
import Image from "next/image";
import { useRef } from 'react';

const ServicesTwo = () => {
  const swiperRef = useRef(null);

  return (
    <section className="ep-services-section-two pt-120">
      <div className="service-main rounded-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <SectionTitle 
                subTitle="Unique Features" 
                title="Your All-in-One Business Management Solution" 
                extraClass="text-center" 
              />
            </div>
          </div>
          <div className="row position-relative">
            {/* Left Arrow */}
            <div className="service-arrow-wrapper service-arrow-prev-wrapper">
              <button 
                className="service-arrow-btn service-arrow-prev"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous slide"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
            </div>

            {/* Slider */}
            <div className="col-12">
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                speed={1200}
                // autoplay={{ delay: 3000 }}
                pagination={{ clickable: true, el: ".custom-pagination" }}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {servicesTwo.map((service, index) => (
                  <SwiperSlide key={index}>
                    <div className="service-item-two rounded-20">
                      <div className="image position-relative">
                        <div className="img overflow-hidden">
                          <Link 
                            href="/features" 
                            className="d-block w-100"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image 
                              src={service.image} 
                              alt="service-img" 
                              className="img-fluid w-100" 
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="text">
                        <h4 className="titleheading">
                          <Link href="/features">{service.title}</Link>
                        </h4>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Right Arrow */}
            <div className="service-arrow-wrapper service-arrow-next-wrapper">
              <button 
                className="service-arrow-btn service-arrow-next"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next slide"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            
            {/* Custom Pagination */}
            {/* <div className="custom-pagination text-center mt-5 mb-5"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTwo;
