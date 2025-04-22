import { useState } from "react";
import groupIcon from "@/public/images/icons/group-person-icon.svg";
import groupIcon2 from "@/public/images/icons/group-person-icon-2.svg";
import faqData from "@/data/products/FaqData.json"; // ✅ Default import
import Image from "next/image";
import SectionTitle from "../../components/containers/SectionTitle";

const FaqSection = ({ product, extraClassName = '' }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const currentIcon = extraClassName.includes('style2') ? groupIcon2 : groupIcon;
  const selectedFaqData = faqData?.[product] || [];

  if (selectedFaqData.length === 0) {
    return <p>No FAQ data available for this product.</p>;
  }

  return (
    <section className={`ep-faq-section pt-60 pb-120 ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle subTitle="Ask Question" title="Empowering Progress Through Technology" extraClass="mb-30" />
            <div className="faq-body">
              <div className="accordion">
                {selectedFaqData.map((item, index) => (
                  <div className="accordion-item" key={item.id}>
                    <div className="accordion-header">
                      <button
                        className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
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
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
