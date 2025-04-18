'use client';
import './cards.scss';
import { useEffect } from 'react';
import Link from 'next/link'; // ✅ ADD THIS
import Image from 'next/image';


const ServiceCard = () => {
  useEffect(() => {
    const accordionItems = document.querySelectorAll(".accordionItem");

    accordionItems.forEach(item => {
      item.addEventListener("click", () => {
        accordionItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
      });
    });

    // Optional: Cleanup event listeners on unmount
    return () => {
      accordionItems.forEach(item => {
        item.replaceWith(item.cloneNode(true)); // Removes all event listeners
      });
    };
  }, []);

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

        <div className="customImagesWrapper">
          <div className="accordion">

            <div className="accordionItem active">
              <Image src="/images/services/digital.webp" alt="img" />
              <div className="conteBox">
                <div className="box">
                  <div className="serialInner">
                    <span className="serial">01</span>
                    <h4 className="black">
                 
                    {/* <Link href="/portfolio-details" className="black">Web Development</Link> */}
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
                   {/* <Link href="/portfolio-details" className="black">Web Development</Link>  */}
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
                    <span className="serial">02</span>
                    <h4 className="black">
                    {/* <Link href="/portfolio-details" className="black">Web Development</Link>  */}
                    <Link href="/services/app-development" className="black">App Development</Link>

                    </h4>
                  </div>
                  <p className="pra fs-seven mb-xxl-4 mb-xl-3 mb-2 pb-xxl-1">
                    The housekeepers we hired are professionals who take pride
                  </p>
                  <Link href="/services/app-development"  className="fs-seven fw-semibold p1-clr">Explore More</Link> 
                 </div>
              </div>
            </div>
            {/* Add more items as needed */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
