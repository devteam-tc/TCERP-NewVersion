"use client";
import React, { useState } from "react";  
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form as BootstrapForm } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt ,FaMapMarkerAlt  } from "react-icons/fa";
import { db } from '../../../firebaseConfig'; 
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import emailjs from '@emailjs/browser';
import './ContactPage.scss';

const ContactForm = () => {
  const [selectedTags, setSelectedTags] = useState([]);
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

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm }
  ) => {
    try {
      const docRef = await addDoc(collection(db, 'contact_applications'), {
        ...values,
        selectedTags,
        timestamp: new Date(),
      });
      const { service_id, template_id, public_key } = await fetchEmailKeys();
      const templateParams = {
        ...values,
        selectedTags: selectedTags.join(', '),
      };
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
      resetForm();
      setSelectedTags([]);
    } catch (error) {
      toast.error(`Error submitting form: ${error.message}`, {
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
    <div className="contactpage-wrapper pt-120">
      <ToastContainer />
      <div className="contactpage-info">
  <div className="contactpage-info__button">
    <Button variant="light" className="contactpage-info__button-inner">Contact Us</Button>
  </div>
  <h2 className="contactpage-info__title">Contact Us for Expert Legal Guidance</h2>
  <p className="contactpage-info__desc">
    Provide professional advice and guidance on legal matters, helping clients understand their rights, obligations, and potential courses.
  </p>

  <div className="contactpage-info__card">
    <div className="contactpage-info__icon"><FaPhoneAlt /></div>
    <div>
      <div className="contactpage-info__sub">Give us a Call</div>
      <div className="contactpage-info__text contactpage-info__text--phones">
        <span>+91 8919439603</span>
        <span>+91 7032803200</span>
      </div>
    </div>
  </div>

  <div className="contactpage-info__card">
    <div className="contactpage-info__icon"><FaEnvelope /></div>
    <div>
      <div className="contactpage-info__sub">Send us Mail</div>
      <div className="contactpage-info__text">sales@techclouderp.com</div>
    </div>
  </div>

  <div className="contactpage-info__card">
    <div className="contactpage-info__icon"><FaMapMarkerAlt /></div>
    <div>
      <div className="contactpage-info__sub">Visit Our Office</div>
      <div className="contactpage-info__text">Plot No. 241, 3rd Floor, VVG Elite, Kavuri Hills, Phase - 2, Madhapur, Hyderabad, Telangana - 500081</div>
    </div>
  </div>
</div>
      <div className="contactpage-form-section">
        <h3 className="contactpage-form-section__title">Send us a Message</h3>
        <p className="contactpage-form-section__desc">As a fellow small business owner, we know the fulfillment that an a comes from running your own business contact to Financy.</p>
        <Formik
          initialValues={{ name: '', email: '', phone: '', message: '', companyName: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="contactpage-form">
              <div className="contactpage-form__row">
                <Field as={BootstrapForm.Control} className="contactpage-form__input" type="text" name="name" placeholder="First Name" />
                <Field as={BootstrapForm.Control} className="contactpage-form__input" type="text" name="companyName" placeholder="Last Name" />
              </div>
              <div className="contactpage-form__row">
                <Field as={BootstrapForm.Control} className="contactpage-form__input" type="email" name="email" placeholder="Email" />
                <Field as={BootstrapForm.Control} className="contactpage-form__input" type="tel" name="phone" placeholder="Phone" />
              </div>
              <Field as={BootstrapForm.Control} className="contactpage-form__input" type="text" name="subject" placeholder="Subject" />
              <Field as={BootstrapForm.Control} className="contactpage-form__textarea" name="message" rows="4" placeholder="Message" />
              <Button type="submit" className="contactpage-form__submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Now →'}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
