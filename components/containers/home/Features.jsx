import React from 'react';
import featureImg1 from '../../../public/images/features/feature-img-1.webp';
import featureImg2 from '../../../public/images/features/feature-img-2.gif';
const featureImg2 = "https://res.cloudinary.com/techclouderp/video/upload/v1768985671/25_yrs_-02_1_wzzvzo.webm";

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
              {/* <div className="img-two overflow-hidden position-absolute">
                 <Image src={featureImg2} alt="25 years business software experience"
                  className="img-fluid w-100 rounded-20"  width={500}  // Add appropriate width
                   height={300}/>
              </div> */}
              {/* <div className="img-two overflow-hidden position-absolute">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="img-fluid w-100 rounded-20"
                  style={{ width: '500px', height: '300px', objectFit: 'cover', backgroundColor: 'transparent' }}
                >
                  <source src={featureImg2} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div> */}
              <div className="img-two overflow-hidden position-absolute" style={{ 
  width: '500px', 
  height: '300px',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' // Match your site's background
}}>
  <video 
    autoPlay 
    loop 
    muted 
    playsInline 
    className="w-100 h-100"
    style={{
      objectFit: 'contain',
      mixBlendMode: 'multiply'
    }}
    preload="auto"
  >
    <source src={featureImg2} type="video/webm" />
  </video>
</div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-md-2">
            <div className="feature-text">
              <SectionTitle subTitle="About Tech Cloud ERP" title="Empowering Business Growth with Smart, Industry-Focused ERP" />
              <p className='mt-3 mb-3 ' style={{ textAlign: 'justify' }}>  Tech Cloud ERP is a powerful cloud-based enterprise solution designed to streamline
operations for <span className='orange-text'  >Manufacturing, Trading, Retail and Project-Driven Businesses</span>. It brings all critical business functions onto a single platform, enabling better control, visibility, and decision-making. </p>
              <p className='mt-3 mb-3' style={{ textAlign: 'justify' }}>Backed by <span className='blue-text'  >25+ Years of Industry Expertise</span>, the platform simplifies complex workflows,
supports business growth, and enables organizations to scale with confidence.
              </p>
              <ul className="feature-list">
  <li>Industry-focused ERP for Manufacturing</li>
  <li>End-to-End Process Automation</li>
  <li>Real-Time Reports & Dashboards</li>
  <li>Scalable Cloud Architecture</li>
</ul>
            </div>
          </div>
        </div>           
      </div>
    </section>
    
  )
}

export default Features
