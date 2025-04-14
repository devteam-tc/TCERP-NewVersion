"use client";
import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAxMtzzipvLVRrXSqtoaVCFy2Ywm9X5Tko&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = initMap;
      document.body.appendChild(script);
    };

    const initMap = () => {
      const locations = [
        { lat: 17.447342, lng: 78.386427, name: "Hyderabad, Telangana" },
        { lat: 11.023765, lng: 77.005325, name: "Coimbatore, Tamilnadu" },
        { lat: 13.023398, lng: 80.207697, name: "Chennai, TamilNadu" },
        { lat: 22.751765, lng: 75.896715, name: "Indore, Madhya Pradesh" },
      ];

      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 5,
        center: locations[0],
      });

      locations.forEach((location) => {
        const marker = new window.google.maps.Marker({
          position: location,
          map,
          title: location.name,
        });

        const infowindow = new window.google.maps.InfoWindow({
          content: `<div style="color: green; font-size: 14px; font-weight: bold; padding: 5px; background: white; border-radius: 5px; text-align: center;">${location.name}</div>`,
          disableAutoPan: true,
        });

        marker.addListener("mouseover", () => infowindow.open(map, marker));
        marker.addListener("mouseout", () => infowindow.close());
      });
    };

    if (!window.google || !window.google.maps) {
      loadGoogleMaps();
    } else {
      initMap();
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string().required("Phone is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required")
    }),
    onSubmit: (values, { resetForm }) => {
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 5000,
      });
      resetForm();
    }
  });

  return (
    <>
      <section className="ep-contact-section pt-120">
        <div className="container">
          {/* Contact Info Section */}
          <div className="contact-information">
            <div className="row">
              {/* Phone */}
              <div className="col-lg-6 col-xl-4">
                <div className="info-item d-flex align-items-center rounded-20 gap-4">
                  <div className="icon section-bg rounded-pill d-flex align-items-center justify-content-center">
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
                  <div className="icon section-bg rounded-pill d-flex align-items-center justify-content-center">
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
                  <div className="icon section-bg rounded-pill d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="text">
                    <h4 className="title">Location</h4>
                    <ul className="list-unstyled">
                      <li>VVG ELITE, Plot No 301, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form position-relative section-bg">
            <h2 className="title text-center">Get In Touch</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="input-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control form-field shadow-none"
                      placeholder="Your Name"
                      {...formik.getFieldProps("name")}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <span className="errorMessage">{formik.errors.name}</span>
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control form-field shadow-none"
                      placeholder="Your Email"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <span className="errorMessage">{formik.errors.email}</span>
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-group">
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-field shadow-none"
                      placeholder="Your Phone"
                      {...formik.getFieldProps("phone")}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <span className="errorMessage">{formik.errors.phone}</span>
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-group">
                    <select
                      name="subject"
                      className="form-control form-field shadow-none"
                      {...formik.getFieldProps("subject")}
                    >
                      <option value="" disabled>Subject</option>
                      <option value="Support">Support</option>
                      <option value="Sales">Sales</option>
                      <option value="General">General</option>
                    </select>
                    {formik.touched.subject && formik.errors.subject && (
                      <span className="errorMessage">{formik.errors.subject}</span>
                    )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-group">
                    <textarea
                      name="message"
                      className="form-field textarea-control"
                      placeholder="Message here.."
                      {...formik.getFieldProps("message")}
                    />
                    {formik.touched.message && formik.errors.message && (
                      <span className="errorMessage">{formik.errors.message}</span>
                    )}
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

        {/* Map Section */}
        <div className="contact-map" ref={mapRef} style={{ height: "630px", width: "100%" }}></div>
      </section>

      <ToastContainer />
    </>
  );
};

export default ContactPage;
