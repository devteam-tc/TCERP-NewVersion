const FAQSection = ({ faqData, activeIndex, toggleAccordion }) => (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-body">
        <div className="accordion">
          {faqData.map((item, index) => (
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
  );

export default FAQSection;
