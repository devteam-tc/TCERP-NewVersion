import React from "react";
import   "./BusinessCard.scss";

const BusinessCards = () => {
  return (
    <section class="tf__popular_services_2">
      <div class="container">
        <div class="row wow fadeInUp">
          <div class="col-xl-7 col-xxl-6 col-md-8 col-lg-6 m-auto">
            <div class="tf__heading_area">
              {/* <h5>OUR Popular Service</h5> */}
              <h2>We success learning platform creative Service.</h2>
            </div>
          </div>
        </div>
        <div class="row">
          {serviceData.map((service, index) => (
            <div class="col-xl-4 col-md-6 col-lg-4 wow fadeInUp" key={index}>
              <div class="tf__single_services">
                <span>
                  <i class={service.icon}></i>
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#">
                  <i class="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const serviceData = [
  {
    title: "Study Off Flexibly",
    description:
      "We can provide you with a reliable handyan in London. you need to included the today.",
    icon: "fa fa-books-medical",
  },
  {
    title: "Exclusive Advisor",
    description:
      "We can provide you with a reliable handyan in London. you need to included the today.",
    icon: "fal fa-book",
  },
  {
    title: "Collage Study Bus",
    description:
      "We can provide you with a reliable handyan in London. you need to included the today.",
    icon: "fal fa-car-bus",
  },
  {
    title: "Classes Completed",
    description:
      "We can provide you with a reliable handyan in London. you need to included the today.",
    icon: "far fa-pencil-ruler",
  },
  {
    title: "Online Certificates",
    description:
      "We can provide you with a reliable handyan in London. you need to included the today.",
    icon: "far fa-file-certificate",
  },
  {
    title: "Edidence Of Learned",
    description:
      "We can provide you with a reliable handyan in London. you need to included the today.",
    icon: "far fa-university",
  },
];

export default BusinessCards;
