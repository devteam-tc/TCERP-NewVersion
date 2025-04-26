"use client";
import Image from 'next/image'
import bannerImg from '../../../public/images/banner/banner-img-1.webp';
import bannerShapeOne from '../../../public/images/shape/banner-shape-1.svg';
import bannerShapeTwo from '../../../public/images/shape/globe4_blue.png';
import Link from 'next/link';
import { useState } from 'react';
import YouTubeEmbed from '../YouTubeEmbed';

const Banner = () => {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <>
      <section className="ep-banner-section position-relative overflow-hidden">
        <div className="banner-shape position-absolute top-50 translate-middle-y z-0">
          <Image src={bannerShapeTwo} alt="banner-shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="banner-text position-relative">
                <Image priority src={bannerShapeOne} alt="banner-shape" className="position-absolute banner-title-shape" />
                <h2 className="banner-title heading-style1 title-anim">Cloud-Based ERP Software Solutions</h2>
                <p>Empower your business with Tech Cloud ERP a scalable cloud-based solution that streamlines operations, boosts productivity and fuels growth.</p>
                <div className="banner-buttons">
                  <Link href="/demo" className="theme-btn position-relative d-inline-flex align-items-center" style={{ color : "#fff !important"} }>
                   Book a Demo
                    <span className="arrow">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_4443_62)">
                          <path d="M13.4317 12.5381C13.4967 12.4215 13.535 12.2898 13.5367 12.1506L13.5733 7.95396C13.5758 7.60896 13.2992 7.32646 12.9483 7.32312C12.6058 7.32312 12.3258 7.59896 12.3233 7.94229L12.2975 10.8665L7.48917 6.05813C7.245 5.81396 6.84917 5.81396 6.605 6.05813C6.36083 6.30229 6.36083 6.69812 6.605 6.94229L11.4158 11.7531L8.59083 11.7831C8.245 11.7873 7.96833 12.0698 7.9725 12.4148C7.97583 12.7581 8.255 13.0331 8.60417 13.0331C8.60417 13.0331 12.6783 12.989 12.685 12.989C12.9967 12.9856 13.2842 12.8023 13.4325 12.539L13.4317 12.5381Z" fill="white" />
                        </g>
                      </svg>
                    </span>
                  </Link>
                  <button onClick={() => setVideoActive(true)} className="video-popup bg-transparent border-0 play-now-btn d-inline-flex align-items-center">
                    <span className="icon ripple position-relative d-flex align-items-center justify-content-center rounded-pill"><i className="fas fa-play"></i></span>
                    <span className="text">Play Now</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-10 mx-auto ps-xl-0">
              <div className="banner-image" data-aos-duration="800" data-aos="fade-left">
                <Image priority src={bannerImg} alt="banner-img" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
        <span className="d-none d-lg-block custom-shadown position-absolute rounded-pill"></span>
      </section>
      <div className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"} onClick={() => setVideoActive(false)}>
        <div className="video-inner">
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            {videoActive && <YouTubeEmbed embedId="PgXjwZmrdyU" />}
            <button aria-label="close video popup" className="close-video-popup" onClick={() => setVideoActive(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
