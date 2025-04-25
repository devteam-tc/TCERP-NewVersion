"use client";
import rotateImg from '../../../public/images/banner/banner-2-btn-img.svg';
import bannerImg from '../../../public/images/banner/banner-img-2.png';
import bannerShape2 from '../../../public/images/banner/banner-shape-2.svg';
import bannerShape3 from '../../../public/images/banner/banner-shape-3.svg';
import bannerShape4 from '../../../public/images/banner/banner-shape-4.svg';
import Image from 'next/image';
import { useState } from 'react';
import YouTubeEmbed from '../YouTubeEmbed';
const BannerTwo = () => {
  const [videoActive, setVideoActive] = useState(false);
  return (
    <>
      <section className="ep-banner-section-two">
        <div className="banner-main position-relative">
          <Image className="banner-shape-4 position-absolute" src={bannerShape4} alt="banner-shape-4" />
          <div className="container">
            <div className="row banner-row">
              <div className="col-lg-5 align-self-center">
                <div className="banner-text position-relative">
                  <h1
                    className="banner-title title-anim">Make a <span className="d-lg-block">big impact</span> with IT
                  </h1>
                  <p
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >lorem ipsum dolor sit amet consectetur. Facilisi cursus vulputate vestibulum etiam rhoncus </p>
                  <div
                    data-aos-duration="600"
                    data-aos="fade-up"
                    data-aos-delay="800"
                    className="rotate-img custom-wrapper-hover custom-inner-hover d-flex justify-content-center align-items-center text-center">
                    <Image src={rotateImg} alt="about-video-text-white" />
                    <button onClick={() => setVideoActive(true)} className="video-rotate-btn border-0 vidplay position-absolute top-50 start-50 translate-middle">
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <div className="banner-image custom-inner-hover ps-lg-5 position-relative">
                  <div
                    data-aos-duration="600"
                    data-aos="fade-left"
                  >
                    <Image priority src={bannerImg} alt="banner-img-2" className="img-fluid w-100" />
                  </div>
                  <Image className="banner-shape-2 position-absolute" src={bannerShape2}
                    alt="banner-shape-2" />
                  <Image className="banner-shape-3 position-absolute" src={bannerShape3}
                    alt="banner-shape-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}>
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e) => e.stopPropagation()}
          >
            {videoActive && <YouTubeEmbed embedId="0WC-tD-njcA" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BannerTwo
