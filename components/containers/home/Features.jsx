import React from 'react';
import featureImg1 from '../../../public/images/features/feature-img-1.webp';
import featureImg2 from '../../../public/images/features/feature-img-2.gif';

import SectionTitle from '../SectionTitle';
import Image from 'next/image';

const Features = () => {
  return (
    <section className="ep-features-section overflow-hidden pb-60 pt-60-desktop">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-2 order-md-1 d-none d-lg-block">
            <div className="feature-image position-relative">
              <div className="img-one overflow-hidden rounded-20 reveal left position-relative">
                <Image src={featureImg1} alt="25 years of ERP software excellence with mobile and desktop dashboard"
                  className="img-fluid w-100 rounded-20" />
              </div>
              <div className="img-two overflow-hidden position-absolute">
                <Image src={featureImg2} alt="25+ years ERP expertise with 2000+ clients and 10000+ software users"
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
