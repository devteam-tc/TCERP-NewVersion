"use client";
import { useState, useEffect, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
              <div className="col-lg-6 col-xl-4">
                <div className="info-item d-flex align-items-center rounded-20 gap-4">
                  <div className="icon section-bg rounded-pill flex-shrink-0 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="text">
                    <h4 className="title">Phone</h4>
                    <ul className="list-unstyled">
                      <li><a href="tel:(480)555-0103">+91 8919439603</a></li>
                      <li><a href="tel:(505)555-0125">+91 7032082300</a></li>
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
                      <li><a href="mailto:info@gmail.com">info@techclouderp.com</a></li>
                      {/* <li><a href="mailto:example@example.com">example@example.com</a></li> */}
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
                      <li>VVG ELITE, Plot No 301, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081</li>
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
                     <input required
                      type="text"
                      name="subject"
                      value={forms.subject}
                      onBlur={changeHandler}
                      onChange={changeHandler}
                      className="form-control form-field shadow-none"
                      placeholder="Your Message"
                    />
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

        <div className="contact-map" ref={mapRef}
          style={{ height: "630px", width: "100%" }}>
        </div>
      </section>

      <ToastContainer />
    </>
  );
};

export default ContactPage;
