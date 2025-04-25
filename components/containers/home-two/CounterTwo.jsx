import counterImg from "../../../public/images/bg/counter-two-bg.svg"; // Counter background image
import Image from 'next/image';
import OdometerCounter from "../Odometer";
import TestimonialTwo from "./TestimonialTwo";

const CounterTwo = () => {

  return (
    <div className="ep-counter-section-two pt-120 overflow-hidden">
      <div className="counter-main rounded-30 position-relative">
        <div className="bg-img position-absolute top-0 start-50 translate-middle-x">
          <Image src={counterImg} alt="counter-two-bg" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="counter-item-two text-center rounded-20">
                <div className="number">
                  <OdometerCounter value={30} />+
                </div>
                <span className="short-info">Winning Award</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="counter-item-two text-center rounded-20">
                <div className="number">
                  <OdometerCounter value={500} />+
                </div>
                <span className="short-info">Satisfied Clients</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="counter-item-two text-center rounded-20">
                <div className="number">
                  <OdometerCounter value={180} />+
                </div>
                <span className="short-info">Active Members</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="counter-item-two text-center rounded-20">
                <div className="number">
                  <OdometerCounter value={250} />+
                </div>
                <span className="short-info">Clients Comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial section two start */}
      <TestimonialTwo />
      {/* Testimonial section two end */}
    </div>
  );
};

export default CounterTwo;
