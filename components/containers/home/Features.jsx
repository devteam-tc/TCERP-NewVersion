<<<<<<< HEAD
import React from 'react';
import featureImg1 from '../../../public/images/features/feature-img-1.webp';
// import featureImg2 from '../../../public/images/features/feature-img-2.gif';
const featureImg2 = "https://res.cloudinary.com/techclouderp/image/upload/v1767353613/feature-img-2_vwahfm.gif";

import SectionTitle from '../SectionTitle'; 
import Image from 'next/image';

const Features = () => {
  return (
    <section className="ep-features-section overflow-hidden pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-2 order-md-1 d-none d-lg-block">
            <div className="feature-image position-relative">
              <div className="img-one overflow-hidden rounded-20 reveal left position-relative">
              <Image src={featureImg1} alt="ERP dashboard with analytics for business performance"
                  className="img-fluid w-100 rounded-20" />
              </div>
              <div className="img-two overflow-hidden position-absolute">
                 <Image src={featureImg2} alt="25 years business software experience"
                  className="img-fluid w-100 rounded-20"  width={500}  // Add appropriate width
  height={300}/>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-md-2">
            <div className="feature-text">
              <SectionTitle subTitle="About Tech Cloud ERP" title="Empowering Business Growth with Smart ERP" />
              <p className='mt-3 mb-3 ' style={{ textAlign: 'justify' }}>  Tech Cloud ERP is a powerful cloud-based solution that streamlines business operations. It automates
tasks, reduces manual work, and improves efficiency with real-time insights. Centralising data and
optimising workflows, it ensures accuracy, minimises errors, and boosts productivity. </p>
              <p className='mt-3 mb-3' style={{ textAlign: 'justify' }}>Suitable for both small and large businesses, the system helps reduce costs, improve performance, and

scale efficiently. With seamless integration, robust analytics, and user-friendly features, it supports long-
term growth while keeping businesses organised, competitive, and future-ready.
              </p>
            </div>
          </div>
        </div>           
      </div>
    </section>
  )
}

export default Features
=======
import React from 'react';
import featureImg1 from '../../../public/images/features/feature-img-1.webp';
import featureImg2 from '../../../public/images/features/feature-img-2.gif';

import SectionTitle from '../SectionTitle';
import Image from 'next/image';

const Features = () => {
  return (
    <section className="ep-features-section overflow-hidden pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-2 order-md-1 d-none d-lg-block">
            <div className="feature-image position-relative">
              <div className="img-one overflow-hidden rounded-20 reveal left position-relative">
              <Image src={featureImg1} alt="ERP dashboard with analytics for business performance"
                  className="img-fluid w-100 rounded-20" />
              </div>
              <div className="img-two overflow-hidden position-absolute">
                 <Image src={featureImg2} alt="25 years business software experience"
                  className="img-fluid w-100 rounded-20" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-md-2">
            <div className="feature-text">
              <SectionTitle subTitle="About Tech Cloud ERP" title="Empowering Business Growth with Smart ERP" />
              <p className='mt-3 mb-3 ' style={{ textAlign: 'justify' }}> Tech Cloud ERP is a powerful, cloud-based solution that streamlines business operations. It automates tasks, reduces manual work and enhances efficiency with real-time insights. Centralising data and optimising workflows ensure accuracy, minimise errors and boost productivity.
              </p>
              <p className='mt-3 mb-3' style={{ textAlign: 'justify' }}>Whether managing a small or large business, this adaptable system helps cut costs, improve performance and scale efficiently. With seamless integration, robust analytics and user-friendly features, it supports long-term growth while keeping businesses competitive. Stay organised, work smarter and achieve more.
              </p>
            </div>
          </div>
        </div>           
      </div>
    </section>
  )
}

export default Features
>>>>>>> 61b7ab182e6fa8efa1dfad8622b8749b7a6ec29f
