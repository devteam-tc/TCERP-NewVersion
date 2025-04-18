import React from 'react';
import Image from 'next/image';
import '../../../TCERP-NewVersion/public/sass/common/_common.scss';

const DownloadWidget = ({ widget }) => {
  // Log the widget prop to verify if it's passed correctly
  console.log('Widget Data:', widget);

  if (!widget) return <div>Download widget data is unavailable.</div>;

  return (
    <div className="download-widget mt-5 mb-5">
      <div
        className="shape"
        style={{ backgroundImage: `url(${widget.bgShape})` }}
      ></div>
      <div className="inner-box">
        <figure className="image-box">
          <Image
            src={widget.image || '/fallback-image.jpg'} // Use a fallback image if no image is provided
            alt="Book"
            width={200}
            height={300}
          />
        </figure>
        <h4>
          {widget.title}
          <span>{widget.spanTitle}</span>
        </h4>
        <button type="button" className="theme-btn btn-one">
          {widget.buttonText}
        </button>
      </div>
    </div>
  );
};

export default DownloadWidget;
