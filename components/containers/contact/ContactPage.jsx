"use client";
import React, { useState , useEffect, useRef } from "react";  
import { Formik, Field, Form as FormikForm, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Col, Row , Container } from 'react-bootstrap';
import { db } from '../../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import emailjs from '@emailjs/browser';
import {  doc, getDoc} from "firebase/firestore";
import LocationCard from "./LocationCard";
import MapMarkers from "./MapMarkers";




const ContactForm = () => {

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    message: Yup.string().required('Message is required'),
    companyName: Yup.string().nullable(),
  });
  

 
   
  


    const fetchEmailKeys = async () => {
      const docRef = doc(db, "emailConfig", "emailKeys");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const { service_id, template_id, public_key } = docSnap.data();
        return { service_id, template_id, public_key };
      } else {
        throw new Error("No email configuration found!");
      }
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
      try {
        await addDoc(collection(db, 'contactapplications'), {
          ...values,
          timestamp: new Date(),
        });
    
        resetForm();
    
        const structuredData = {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          companyName: values.companyName,
        };
    
        const { service_id, template_id, public_key } = await fetchEmailKeys();
        const templateParams = { ...structuredData };
        await emailjs.send(service_id, template_id, templateParams, public_key);
    
        toast.success('Message sent successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('Error submitting form. Please try again later.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setSubmitting(false);
      }
    };
    
  return (
    <section className="ep-contact-section pt-120">
    <Container>
      <ToastContainer />
     <LocationCard />
    
     <h2 className="title text-center mb-4">Get In Touch</h2>     

        <Formik
          initialValues={{ name: '', email: '', phone: '', message: '', companyName: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
           {({ errors, touched }) => (
         <FormikForm>
         <Row className="g-4">
           <Col md={6}>
             <div className="input-group">
               <Field name="name" type="text" className="form-control" placeholder="Your Name" />
               {touched.name && errors.name && <div className="text-danger mt-1">{errors.name}</div>}
             </div>
           </Col>

           <Col md={6}>
             <div className="input-group">
               <Field name="email" type="email" className="form-control" placeholder="Your Email" />
               {touched.email && errors.email && <div className="text-danger mt-1">{errors.email}</div>}
             </div>
           </Col>

           <Col md={6}>
             <div className="input-group">
               <Field name="phone" type="text" className="form-control" placeholder="Your Phone" />
               {touched.phone && errors.phone && <div className="text-danger mt-1">{errors.phone}</div>}
             </div>
           </Col>

           <Col md={6}>
             <div className="input-group">
               <Field name="companyName" type="text" className="form-control" placeholder="Your Company" />
               {touched.companyName && errors.companyName && <div className="text-danger mt-1">{errors.companyName}</div>}
             </div>
           </Col>

           <Col lg={12}>
             <div className="input-group">
               <Field name="message" as="textarea" className="form-control" placeholder="Message here..." />
               {touched.message && errors.message && <div className="text-danger mt-1">{errors.message}</div>}
             </div>
           </Col>

           <Col lg={12}>
             <div className="text-center">
               <Button type="submit"  className="theme-btn position-relative">
                 Submit Now
               </Button>
             </div>
           </Col>
                </Row>
              </FormikForm>
            )}
          </Formik>
          </Container>
          <MapMarkers />
          </section>
        );
      };

export default ContactForm;
     