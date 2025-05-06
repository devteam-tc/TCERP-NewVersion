import React from "react";
import serviceData from "../../data/bi/cards-section.json"; // Adjust the alias if needed

const BusinessCards = () => {
  return (
    <section className="tf__popular_services_2">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-7 col-xxl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area">
              <h2>We success learning platform creative Service.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceData.map((service, index) => (
            <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp" key={index}>
              <div className="tf__single_services">
                <span>
                  <i className={service.icon}></i>
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#">
                  <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessCards;
