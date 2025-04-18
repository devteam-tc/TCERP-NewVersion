import React from 'react';
import Image from 'next/image';

const MainContentSection = ({ content }) => {
  return (
    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
      <div className="service-details-content">
        <div className="sec-title mb-3">
          <span className="sub-title mb-3 mt-3">{content?.subTitle}</span>
          <h2>{content?.heading}</h2>
          <p className="mt-3">{content?.paragraphs?.[0]}</p>
        </div>
    
        <div className="text-box">
          {content?.paragraphs?.slice(1).map((para, index) => (
            <p key={index} className={index === 0 ? 'mb-3' : ''}>
              {para}
            </p>
          ))}
        </div>
        <figure className="image-box mb-5">
          <Image className='mt-3'
            src={content?.image}
            alt={content?.subTitle}
            width={800}
            height={450}
          />
        </figure>
      </div>
    </div>
  );
};

export default MainContentSection;