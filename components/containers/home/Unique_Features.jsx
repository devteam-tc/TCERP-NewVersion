"use client"
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { uniquefeaturesdata } from "../../../app/utils/constant";
import PropTypes from "prop-types";

const Unique_Features = ({ asGrid = false }) => {
  const swiperRef = useRef(null);

  return (
    <section className="ep-services-section-two pt-60 pb-60">
      <div className="service-main rounded-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <SectionTitle 
                subTitle="Unique Features" 
                title="Your All-in-One Business Management Solution" 
                extraClass="text-center pb-30" 
              />
            </div>
          </div>
          <div className="row position-relative">
            {asGrid ? (
              <div className="row g-4">
                {uniquefeaturesdata.map((feature, index) => (
                  <div key={index} className="col-lg-3 col-md-4 col-6">
                    <div className="feature-card bg-white rounded-3 p-4 h-100">
                      <div className="d-flex flex-column flex-md-row align-items-center gap-3">
                        <div className="feature-icon flex-shrink-0 text-center">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            width={40}
                            height={40}
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <h5 className="mb-0 text-center text-md-start">{feature.title}</h5>
                          <p className="mb-0 small text-center text-md-start">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {/* Left Arrow */}
                <div className="service-arrow-wrapper service-arrow-prev-wrapper">
                  <button 
                    className="service-arrow-btn service-arrow-prev"
                    onClick={() => swiperRef.current?.slidePrev()}
                    aria-label="Previous slide"
                  >
                    <FaArrowLeft size={20} />
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
                    {uniquefeaturesdata.map((feature, index) => (
                      <SwiperSlide key={index}>
                        <div className="service-item-two rounded-20">
                          <div className="image position-relative">
                            <div className="img overflow-hidden">
                              <Image 
                                src={feature.image} 
                                alt={feature.title} 
                                width={400}
                                height={250}
                                className="img-fluid w-100" 
                                style={{
                                  width: '100%',
                                  height: '250px',
                                  objectFit: 'cover'
                                }}
                              />
                            </div>
                          </div>
                          <div className="text">
                            <h4 className="titleheading">
                              {feature.title}
                            </h4>
                            <p>{feature.description}</p>
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
                    <FaArrowRight size={20} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

Unique_Features.propTypes = {
  asGrid: PropTypes.bool,
};

export default Unique_Features;
