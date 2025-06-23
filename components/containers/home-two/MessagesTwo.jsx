"use client";

import SectionTitle from "../SectionTitle"

const MessagesTwo = ({ extraClassName = '' }) => {
  return (
    <section className={`ep-messages-section ep-messages-section-two pt-120 position-relative ${extraClassName}`}>
      <div className="container">
        <div className="message-main rounded-20">
          <div className="row">
            <div className="col-lg-7">
              <SectionTitle subTitle="Talk to us" title="Empowering Progress Through Technology" extraClass="mb-40 text-center text-md-start" />
            </div>
          </div>
          <div className="row g-4">
            <div
              data-aos-duration="600"
              data-aos="fade-up"
              className="col-xl-7 order-2 order-xl-1">
              <div className="message-text">
                <form action="#" className="message-form">
                  <div className="row g-3">
                    <div className="col-lg-6">
                      <div className="input-group">
                        <label className="form-label">Your Name</label>
                        <input type="text" className="form-control form-field shadow-none" placeholder="Adnan Walker" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group">
                        <label className="form-label">Your Email</label>
                        <input type="text" className="form-control form-field shadow-none"
                          placeholder="info.example@gmail.com" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group">
                        <label className="form-label">Your Number</label>
                        <input type="text" className="form-control form-field shadow-none" placeholder="+088123456789" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group">
                        <label className="form-label">Your Area</label>
                        <select className="form-select form-field shadow-none" aria-label="Default select example">
                          <option>New York City</option>
                          <option>Los Angeles</option>
                          <option>Chicago</option>
                          <option>Houston</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-group">
                        <label className="form-label">Your Area</label>
                        <textarea className="form-field textarea-control" placeholder="Message here.."></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit"
                        className="theme-btn w-100 text-center theme-btn-tertiary position-relative">Send Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              data-aos-duration="600"
              data-aos="fade-left"
              data-aos-delay="300"
              className="col-xl-5 order-1 order-xl-2">
              <div className="message-contact-info rounded-20">
                <h4 className="title text-white mb-40">Contact</h4>
                <ul className="list-unstyled contact-info">
                  <li className="d-flex align-items-center">
                    <div className="icon flex-shrink-0"><i className="fa-solid fa-paper-plane"></i></div>
                    <div className="text">
                      <p className="cn-title">Address </p>
                      <h5 className="cn-info">4517 Washington Ave. Manchester</h5>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="icon flex-shrink-0"><i className="fa-solid fa-envelope"></i></div>
                    <div className="text">
                      <p className="cn-title">Email</p>
                      <h5 className="cn-info">
                        <a href="mailto:info@example.com">info@example.com</a>
                      </h5>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="icon flex-shrink-0"><i className="fa-solid fa-phone"></i></div>
                    <div className="text">
                      <p className="cn-title">Phone</p>
                      <h5 className="cn-info">
                        <a href="tel:(239)555-0108">(239) 555-0108</a>
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MessagesTwo
