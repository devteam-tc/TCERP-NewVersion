import React from 'react'
import messageImg from '@/public/images/img/message-img.jpg';
import SectionTitle from '../SectionTitle';
import Image from 'next/image';

const Messages = () => {
  return (
    <section className="ep-messages-section position-relative pt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="message-text position-relative">
              <SectionTitle subTitle="Talk to us" title=" Elevate Your Business with ERP" extraClass="mb-40" />
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
                    <button type="submit" className="theme-btn position-relative">Send Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="message-image overflow-hidden reveal zoom-out position-absolute bottom-0 end-0">
              <Image src={messageImg} alt="message-image" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Messages
