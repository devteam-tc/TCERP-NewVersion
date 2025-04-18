"use client";
import { useState } from "react";
import faqImg1 from "@/public/images/faq/faq-img-1.png";
import faqImg2 from "@/public/images/faq/faq-img-2.png";
import groupIcon from "@/public/images/icons/group-person-icon.svg";
import groupIcon2 from "@/public/images/icons/group-person-icon-2.svg";
import { faq } from "@/data/faq";
import Image from "next/image";
import OdometerCounter from "../Odometer";
import SectionTitle from "../SectionTitle";


const Faq = ({ extraClassName = '' }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Conditionally select the icon
  const currentIcon = extraClassName.includes('style2') ? groupIcon2 : groupIcon;

  return (
    <section className={`ep-faq-section pt-120 ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <SectionTitle subTitle="Ask Question" title="Empowering Progress Through Technology" extraClass="mb-30" />
            <div className="faq-body">
              <div className="accordion">
                {faq.map((item, index) => (
                  <div className="accordion-item" key={item.id}>
                    <div className="accordion-header">
                      <button
                        className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                      >
                        {item.id}. {item.question}
                      </button>
                    </div>
                    <div className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`}>
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-images">
              <div className="row g-4">
                <div
                  data-aos-duration="800"
                  data-aos="fade-up"
                  className="col-lg-12">
                  <div className="single-img rounded-20 overflow-hidden">
                    <Image src={faqImg1} alt="faq-img" className="img-fluid w-100" />
                  </div>
                </div>
                <div
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="col-lg-6 col-sm-6">
                  <div className="single-img rounded-20 overflow-hidden">
                    <Image src={faqImg2} alt="faq-img" className="img-fluid w-100" />
                  </div>
                </div>
                <div
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="col-lg-6 col-sm-6">
                  <div className="clients rounded-20 text-center d-flex align-items-center justify-content-center flex-column">
                    <Image src={currentIcon} alt="group-person-icon" />
                    <div className="client-number d-flex align-items-center justify-content-center">
                      <OdometerCounter value={7} /> k+
                    </div>
                    <h5 className="trust">Trusted Clients</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
