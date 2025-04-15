"use client";
import React from "react";
import { FaBook } from "react-icons/fa";
import './CategorySection.scss';

const CategorySection = () => {
  const categories = [
    { title: "ERP", desc: "Integrates finance, HR and inventory into one system, automating processes and boosting efficiency for better decision-making.", color: "light_blue" },
    { title: "CRM", desc: "Manages customer interactions and data, enhancing sales, service and relationships for stronger customer connections.", color: "blue" },
    { title: "POS", desc: "Ensures secure sales transactions, integrates with inventory and customer data and provides real-time updates for efficiency.", color: "green" },
    { title: "Trading Software", desc: "It helps optimize procurement, inventory and order management with real-time tracking, thus enhancing workflows automatically.", color: "gray" },
    { title: "E-commerce", desc: "Online stores management with product catalogs, payment systems and real-time updates to improve customer experience.", color: "orange" },
    { title: "HRM", desc: "It automates payroll, attendance, recruitment and performance management for an efficient workforce while keeping track of compliance.", color: "red" },
  ];

  return (
    <section className="tf__categories mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_15">
              <h5>OUR COURSE CATEGORIES</h5>
              <h2>We success for categories creative students.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {categories.map((item, index) => (
            <div key={index} className="col-xl-4 col-md-6 wow fadeInUp">
              <div className={`tf__single_category ${item.color}`}>
                <div className="tf__single_category_icon">
                  <FaBook />
                </div>
                <div className="tf__single_category_text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
