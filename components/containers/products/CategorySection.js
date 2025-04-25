"use client";
import React from "react";
import { FaBook } from "react-icons/fa";
// import './CategorySection.scss';

const CategorySection = () => {
  const categories = [
    { title: "ERP", desc: "All core functions finance, HR, inventory are in one ERP system to automate tasks, improve accuracy and control departments..", color: "light_blue" },
    { title: "CRM", desc: "Our CRM helps manage customers, track leads and build lasting relationships to boost satisfaction and business success.", color: "blue" },
    { title: "POS", desc: "POS system enhances billing and sales with secure transactions, real-time stock sync and seamless customer checkout.", color: "green" },
    { title: "Trading Software", desc: "Manage buying, selling and stock levels efficiently with real-time tracking to reduce delays and  improve operations", color: "gray" },
    { title: "E-commerce", desc: "Our e-commerce platform handles listings, payments and orders to boost customer experience and grow online sales.", color: "orange" },
    { title: "HRM", desc: "HRM automates payroll, recruitment, attendance and tracking to streamline workforce management and boost productivity.", color: "red" },
    { title: "ERP Integrated-With-CRM-Ecommerce-POS", desc: "Connects ERP with CRM, POS and e-commerce for smooth communication, real-time visibility and streamlined workflow.", color: "violet" },
    { title: "Restaurant ERP", desc: "Restaurant ERP manages kitchen orders, staff, billing and inventory to improve speed, service and daily operations.", color: "yellow" },
    { title: "Accounting Software", desc: "Handle invoices, budgets, taxes and reporting in one platform to keep finances clear and support better decisions.", color: "teal" },
  ];

  return (
    <section className="tf__categories mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_15">
              {/* <h5>OUR COURSE CATEGORIES</h5> */}
              <h2>Our Product Suite</h2>
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
