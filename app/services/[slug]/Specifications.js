'use client';
import Image from 'next/image';
import Link from 'next/link';
import specificationsData from '@/data/services/specifications.json';
import './servicesection.scss';

const SolutekServices = () => {
  return (
    <section className=' '>
      <div className="sservice-area pt_120 pb_120 ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-title text-center">
             
               
            </div>
          </div>

          {specificationsData.services.map((service, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
              <div className="service-single-box">
                <div className="service-icon">
                  <Image src={service.img} alt={service.title} width={64} height={64} />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-text">{service.para}  </p>
                   
                </div>
              </div>
            </div>
          ))}

          {/* Decorative Shapes */}
          <div className="service-shape bounce-animate3">
            <Image
              src="/images/services/service5.webp"
              alt="shape"
              width={100}
              height={100}
              style={{ width: '199px', height: '420px', aspectRatio: '199 / 420' }}
            />
          </div>

          <div className="service-shape2">
            <Image src="/images/services/service7.png" alt="shape" width={100} height={100} />
          </div>
          <div className="service-shape3 bounce-animate4">
            <Image
              src="/images/services/service8.png"
              alt="shape"
              width={100}
              height={100}
              style={{ width: '341px', height: '351px', aspectRatio: '341 / 351' }}
            />
          </div>

        </div>
      </div>
    </div>
    </section>
  );
};

export default SolutekServices;

