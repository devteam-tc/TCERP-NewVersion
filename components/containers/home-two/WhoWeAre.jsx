
"use client";

import IconPhone from '../../../public/images/icons/icon-headphone.svg';
import WhoImg from '../../../public/images/img/who-we-are.png';
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import OdometerCounter from '../Odometer';

const WhoWeAre = () => {

  return (
    <section className="ep-who-we-area-section pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div
            data-aos-duration="600"
            data-aos="fade-left"
            className="col-xl-5 align-self-center">
            <div className="short-info text-center text-md-start">
              <SectionTitle title="What Sets Us Apart" extraClass=" text-center text-md-start" />
              <p style={{ textAlign: 'justify' }} className='pt-3 pb-3'>Our company focusses on providing customised ERP software features at an affordable cost. We simplify the ERP process for manufacturers and provide personalised and developed software to meet specific company requirements across all segments. We have been using the latest technologies to provide the best ERP solutions to our customers for over 25 years.
              </p>
              <p style={{ textAlign: 'justify' }}> There are other ERP software providers on the market, but none of them sell exclusively for your specific industry. Tech Cloud ERP provides customised design and pricing, as well as the use of the latest technologies to understand your industry's unique requirements.</p>
            </div>
          </div>
          <div
            className="col-xl-7">
            <div
              className="image d-sm-flex justify-content-end">
              <div
                data-aos-duration="600"
                data-aos="fade-left"
                data-aos-delay="300"
                className="counter flex-shrink-0 text-center flex-grow-1 d-flex flex-column justify-content-center">
                <div
                  className="icon-box rounded-pill d-flex justify-content-center align-items-center icon-box-primary mx-auto">
                  <Image src={IconPhone} alt="icon-headphone" />
                </div>
                <div className="count d-flex align-items-center justify-content-center">
                  <OdometerCounter value={24} /> / <OdometerCounter value={7} />
                </div>
                <h5 className="title">Support we provide</h5>
              </div>
              <div className="img overflow-hidden reveal left">
                <Image src={WhoImg} alt="Customized ERP with 24/7 support for industry workflows" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
