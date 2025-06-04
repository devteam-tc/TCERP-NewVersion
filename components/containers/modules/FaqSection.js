import { useState, useEffect } from "react";
import groupIcon from "../../../public/images/icons/group-person-icon.svg";
import groupIcon2 from "../../../public/images/icons/group-person-icon-2.svg";
import Image from "next/image";
import SectionTitle from "../SectionTitle";

const FaqSection = ({ slug, extraClassName = '' }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (slug) {
      import(`../../../data/modules/${slug}.json`)
        .then((moduleData) => {
          setData(moduleData.default);
        })
        .catch((err) => {
          console.error('Failed to load module data:', err);
        });
    }
  }, [slug]);

  const currentIcon = extraClassName.includes('style2') ? groupIcon2 : groupIcon;

  if (!data?.faqs) {
    return null;
  }

  return (
    <section className={`ep-faq-section pt-60 pb-60 ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <SectionTitle 
              subTitle={data.faqs.subTitle || "Ask Question"} 
              title={data.faqs.title || "Empowering Progress Through Technology"} 
              extraClass="mb-30" 
            /> */}
                  <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-body">
              <div className="accordion">
                {data.faqs.items.map((item, index) => (
                  <div className="accordion-item" key={index} 
                  style={{
                    border: activeIndex === index ? '2px solid var(--bs-primary-color)' : '1px solid #dee2e6',
                    boxShadow: activeIndex === index ? '0 0 10px rgba(0, 123, 255, 0.2)' : 'none',
                    borderRadius: '8px',
                    marginBottom: '10px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    ':hover': {
                      border: '2px solid var(--bs-primary-color)',
                      boxShadow: '0 0 10px rgba(0, 123, 255, 0.2)'
                    }
                  }}
                  >
                    <div className="accordion-header">
                      <button
                        className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      >
                        {item.question}
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
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
