"use client";
import React , { useEffect,  useState , useRef } from "react";
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Formik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig"; // Adjust the import path to your Firebase config

const LocationCard = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  
 
  
  return (
    <>
       <div className="contact-information">
            <div className="row">
              <div className="col-lg-6 col-xl-4">
                <div className="info-item d-flex align-items-center rounded-20 gap-4">
                  <div className="icon section-bg rounded-pill flex-shrink-0 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="text">
                    <h4 className="title">Phone</h4>
                    <ul className="list-unstyled">
                      <li><a href="tel:+918919439603">+91 8919439603</a></li>
                      <li><a href="tel:+917032082300">+91 7032082300</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-xl-4">
                <div className="info-item d-flex align-items-center rounded-20 gap-4">
                  <div className="icon section-bg rounded-pill flex-shrink-0 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="text">
                    <h4 className="title">Email</h4>
                    <ul className="list-unstyled">
                      <li><a href="mailto:info@techclouderp.com">info@techclouderp.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-xl-4">
                <div className="info-item d-flex align-items-center rounded-20 gap-4">
                  <div className="icon section-bg rounded-pill flex-shrink-0 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="text">
                    <h4 className="title">Location</h4>
                    <ul className="list-unstyled">
                      <li>Plot No. 241, 3rd Floor, VVG Elite Developers, Kavuri Hills, Madhapur, Hyderabad, Telangana - 500081</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default LocationCard;
