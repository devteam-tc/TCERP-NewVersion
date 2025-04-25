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
    title: "Advanced Analytical Tools",
    description:
      "Use built-in ERP analytics to spot trends, predict changes and improve operations.",
    icon: "fa fa-books-medical",
  },
  {
    title: "Centralized Information Management",
    description:
      "Bring all department data together in one ERP system to stay consistent, cut duplicates and boost accuracy.",
    icon: "fal fa-book",
  },
  {
    title: "Enhanced Collaboration Across Teams",
    description:
      "Use ERP‑embedded BI to share insights across teams, boost transparency and align goals.",
    icon: "fal fa-car-bus",
  },
  {
    title: "Scalable and Flexible Solutions",
    description:
      "Scale your ERP’s BI tools as your business grows, so you stay flexible and ready for change.",
    icon: "far fa-pencil-ruler",
  },
  {
    title: "Improved Decision-Making Accuracy",
    description:
      "With BI integrated into ERP can turn your data into easy-to-read visuals, helping leaders act quickly with confidence.",
    icon: "far fa-file-certificate",
  },
  {
    title: "Process Performance Analytics",
    description:
      "Monitor and benchmark key operational workflows (order‑to‑cash, procure‑to‑pay) with drill‑down KPIs to spot bottlenecks.",
    icon: "far fa-university",
  },
];

export default BusinessCards;
