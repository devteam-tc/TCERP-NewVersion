import counterImg from '@/public/images/img/counter-img.webp';
import OdometerCounter from '../Odometer';
import Image from 'next/image';

const Counter = () => {
  return (
    <section className="ep-counter-section pt-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <h2
              className="heading-style1 mb-40 title-anim">
            Trusted ERP Solutions for Businesses 
            </h2>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="counter-text">
              <p>
              At Tech Cloud ERP, we deliver innovative ERP solutions that help businesses streamline operations, enhance productivity, and drive growth. With decades of expertise, we empower industries worldwide through digital transformation and seamless business management.
              </p>
              <div className="counter-wrapper">
                <div className="row g-4">
                  <div
                    data-aos-duration="800"
                    data-aos="fade-up"
                    className="col-sm-6">
                    <div className="counter-item text-center rounded-20">
                      <div className="number">
                        <OdometerCounter value={25} /> +
                      </div>
                      <span className="short-info">Experience</span>
                    </div>
                  </div>
                  <div
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="col-sm-6">
                    <div className="counter-item text-center rounded-20">
                      <div className="number">
                        <OdometerCounter value={2000} /> +
                      </div>
                      <span className="short-info">Happy Clients</span>
                    </div>
                  </div>
                  <div
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="col-sm-6">
                    <div className="counter-item text-center rounded-20">
                      <div className="number">
                        <OdometerCounter value={10000} /> +
                      </div>
                      <span className="short-info">Users</span>
                    </div>
                  </div>
                  <div
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="col-sm-6">
                    <div className="counter-item text-center rounded-20">
                      <div className="number">
                        <OdometerCounter value={38000} /> +
                      </div>
                      <span className="short-info">Professionals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="counter-image rounded-20 overflow-hidden ms-lg-auto">
              <div className="reveal left">
                <Image src={counterImg} alt="Counter Section" className="img-fluid w-100 parallax-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
