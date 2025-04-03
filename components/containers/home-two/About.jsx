import aboutImg from "@/public/images/about-us/about-img.png";
import aboutShape from "@/public/images/about-us/about-shape.svg";
import userIcon from "@/public/images/icons/group-user.svg";
import Image from "next/image";
import OdometerCounter from "../Odometer";
import Link from "next/link";
import SectionTitle from "../SectionTitle";

const About = ({extraClassName = ''}) => {
  return (
    <section className={`ep-about-section pt-120 ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div
            data-aos-duration="600"
            data-aos="fade-left"
            className="col-xl-6 col-lg-7 col-md-10 mx-auto">
            <div className="about-image position-relative">
              <Image src={aboutImg} alt="about-img" className="img-fluid w-100" />
              <Image src={aboutShape} alt="about-shape" className="about-shape position-absolute" />
              <div className="clients rounded-20 position-absolute d-flex align-items-center">
                <div className="icon-box icon-box-tertiary d-flex align-items-center justify-content-center rounded-pill">
                  <Image src={userIcon} alt="group-user" />
                </div>
                <div className="counter-info">
                  <div className="number">
                    <OdometerCounter value={5000} />
                  </div>
                  <p>Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos-duration="600"
            data-aos="fade-left"
            data-aos-delay="300"
            className="col-xl-6 col-lg-9 mx-auto">
            <div className="about-text">
              <SectionTitle subTitle="about us" className="section-title-custom" />
              <h3 className="mb-20">Our Vision</h3>
              <p>
              Our vision is to provide businesses with a smooth, scalable, and secure platform that improves productivity, stimulates innovation and speeds up digital transformation. Our goal is to give real-time information, optimize processes and promote development across sectors. We want to be a trusted partner in crafting the future of business resource planning by constantly developing and integrating cutting-edge technology. 
              </p>
              <h3 className="mb-20 mt-20">Our Mission
              </h3>
              <p>
              Our mission is to provide innovative, cloud-based ERP solutions to businesses of all sizes and sectors, promoting efficiency, innovation and long-term success. We strive to simplify challenging business procedures, improve decision-making with real-time insights and help enterprises reach their full potential through effortless integration and greater scalability.
              </p> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
