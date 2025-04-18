"use client";
import { useEffect, useRef } from "react";
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Formik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyAxMtzzipvLVRrXSqtoaVCFy2Ywm9X5Tko&callback=initMap";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      window.initMap = initMap;
    };

    if (!window.google) {
      loadGoogleMaps();
    } else {
      initMap();
    }

    function initMap() {
      const locations = [
        { lat: 17.447342, lng: 78.386427, name: "Hyderabad, Telangana" },
        { lat: 11.023765, lng: 77.005325, name: "Coimbatore, Tamilnadu" },
        { lat: 13.023398, lng: 80.207697, name: "Chennai, TamilNadu" },
        { lat: 22.751765, lng: 75.896715, name: "Indore, Madhya Pradesh" },
      ];

      const map = new google.maps.Map(mapRef.current, {
        zoom: 5,
        center: locations[0],
      });

      locations.forEach((location) => {
        const marker = new google.maps.Marker({
          position: location,
          map: map,
          title: location.name,
        });

        const infowindow = new google.maps.InfoWindow({
          content: `<div style="color: green; font-size: 14px; font-weight: bold; padding: 5px; background: white; border-radius: 5px; text-align: center;">${location.name}</div>`,
          disableAutoPan: true,
        });

        marker.addListener("mouseover", function () {
          infowindow.open(map, marker);
        });

        marker.addListener("mouseout", function () {
          infowindow.close();
        });
      });
    }
  }, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    subject: Yup.string().required("Company is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    toast.success("Form submitted successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    resetForm();
  };

  return (
    <>
      <section className="ep-contact-section pt-120">
        <div className="container">
          <div className="contact-information">
            <div className="row">
              {/* Contact Info Cards */}
              {/* Phone */}
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

              {/* Email */}
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

              {/* Location */}
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

          {/* Form */}
          <div className="contact-form position-relative section-bg mt-5 p-4 rounded-4">
            <h2 className="title text-center mb-4">Get In Touch</h2>

            <Formik
              initialValues={initialValues}
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
                        <Field name="subject" type="text" className="form-control" placeholder="Your Company" />
                        {touched.subject && errors.subject && <div className="text-danger mt-1">{errors.subject}</div>}
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
                        <Button type="submit" className="theme-btn position-relative">
                          Submit Now
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </FormikForm>
              )}
            </Formik>
          </div>
        </div>

        {/* Map Section */}
        <div className="contact-map mt-5" ref={mapRef} style={{ height: "630px", width: "100%" }}></div>
      </section>
      <ToastContainer />
    </>
  );
};

export default ContactPage;
