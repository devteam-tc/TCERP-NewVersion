"use client";
import SimpleReactValidator from 'simple-react-validator';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';
const ContactPage = () => {
  const [forms, setForms] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });
  const [validator] = useState(new SimpleReactValidator({
    className: 'errorMessage'
  }));

  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      validator.hideMessages();

      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Clear form fields after successful submission
      setForms({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
      });
    } else {
      validator.showMessages();
    }
  };

  return (
    <>
      <section className="ep-contact-section pt-120">
        <div className="container">
          <div className="contact-information">
            {/* Static Information like Phone, Email, Location */}
            <div className="row">
              <div
                className="col-lg-6 col-xl-4">
                <div className="info-item d-flex align-items-center rounded-20 gap-4">
                  <div className="icon section-bg rounded-pill flex-shrink-0 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="text">
                    <h4 className="title">Phone</h4>
                    <ul className="list-unstyled">
                      <li><a href="tel:(480)555-0103">(480) 555-0103</a></li>
                      <li><a href="tel:(505)555-0125">(505) 555-0125</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-xl-4">
                <div className="info-item d-flex align-items-center rounded-20 gap-4">
                  <div className="icon section-bg rounded-pill flex-shrink-0 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="text">
                    <h4 className="title">Email</h4>
                    <ul className="list-unstyled">
                      <li><a href="mailto:info@gmail.com">info@gmail.com</a></li>
                      <li><a href="mailto:example@example.com">example@example.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-xl-4">
                <div className="info-item d-flex align-items-center rounded-20 gap-4">
                  <div className="icon section-bg rounded-pill flex-shrink-0 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="text">
                    <h4 className="title">Location</h4>
                    <ul className="list-unstyled">
                      <li>4517 Washington Ave. Manchester, Kentucky 39495</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form position-relative section-bg">
            <h2 className="title text-center">Get In Touch</h2>
            <form onSubmit={submitHandler}>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="input-group">
                    <input required
                      type="text"
                      name="name"
                      value={forms.name}
                      onBlur={changeHandler}
                      onChange={changeHandler}
                      className="form-control form-field shadow-none"
                      placeholder="Your Name"
                    />
                    {validator.message('name', forms.name, 'required|alpha_space')}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-group">
                    <input required
                      type="email"
                      name="email"
                      value={forms.email}
                      onBlur={changeHandler}
                      onChange={changeHandler}
                      className="form-control form-field shadow-none"
                      placeholder="Your Email"
                    />
                    {validator.message('email', forms.email, 'required|email')}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-group">
                    <input required
                      type="phone"
                      name="phone"
                      value={forms.phone}
                      onBlur={changeHandler}
                      onChange={changeHandler}
                      className="form-control form-field shadow-none"
                      placeholder="Your Phone"
                    />
                    {validator.message('phone', forms.phone, 'required|phone')}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-group">
                    <select
                      name="subject"
                      value={forms.subject}
                      onBlur={changeHandler}
                      onChange={changeHandler}
                      className="form-control form-field shadow-none"
                    >
                      <option value="" disabled>Subject</option>
                      <option value="Support">Support</option>
                      <option value="Sales">Sales</option>
                      <option value="General">General</option>
                    </select>
                    {validator.message('subject', forms.subject, 'required')}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-group">
                    <textarea
                      name="message"
                      value={forms.message}
                      onBlur={changeHandler}
                      onChange={changeHandler}
                      className="form-field textarea-control"
                      placeholder="Message here.."
                    ></textarea>
                    {validator.message('message', forms.message, 'required')}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="text-center">
                    <button type="submit" className="theme-btn position-relative">
                      Submit Now
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280012016!2d-74.14448732737499!3d40.69763123331177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1727346263569!5m2!1sen!2sbd"
          ></iframe>
        </div>
      </section>

      {/* ToastContainer for Toastify notifications */}
      <ToastContainer />
    </>
  );
};

export default ContactPage;
