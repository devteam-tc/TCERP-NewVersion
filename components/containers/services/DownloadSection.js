"use client";
import Image from 'next/image';
import PropTypes from 'prop-types';
import { usePathname } from 'next/navigation';

// Import all service data
import appDevData from '../../../data/services/app-development.json';
import webDevData from '../../../data/services/web-development.json';
import digitalMarketingData from '../../../data/services/digital-marketing.json';

// Feature List Component
const FeatureList = ({ features }) => (
  <ul className="list-item mb_30">
    {features.map((feature, index) => (
      <li key={index}>{feature}</li>
    ))}
  </ul>
);

FeatureList.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Content Box Component
const ContentBox = ({ title, subtitle, features, buttonText, onDownload }) => (
  <div className="content-box">
    <h2>
      {title} <span>{subtitle}</span>
    </h2>
    <FeatureList features={features} />
    <button 
      type="button" 
      className="theme-btn btn-one" 
      onClick={onDownload}
      disabled={!onDownload}
    >
      {buttonText}
    </button>
  </div>
);

ContentBox.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
  onDownload: PropTypes.func,
};

// Image Box Component
const ImageBox = ({ src, alt, width, height }) => (
  <div className="image-box">
    <figure className="image">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
      />
    </figure>
  </div>
);

ImageBox.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

// Main Download Section Component
const DownloadSection = ({ onDownload }) => {
  const pathname = usePathname();
  
  // Get the correct data based on the current route
  const getServiceData = () => {
    if (pathname.startsWith('/services')) {
      if (pathname.includes('web-development')) {
        return webDevData.downloadGuide;
      } else if (pathname.includes('digital-marketing')) {
        return digitalMarketingData.downloadGuide;
      } else {
        return appDevData.downloadGuide;
      }
    }
    return null;
  };

  const data = getServiceData();

  // If no matching route/data, don't render the section
  if (!data) return null;

  return (
    <section className="download-section alternat-2 pb_120 pt_120">
      <div className="auto-container">
        <div className="inner-container">
          <div 
            className="pattern-layer" 
            style={{ backgroundImage: `url('${data.backgroundImage}')` }} 
          />
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
              <ContentBox
                title={data.title}
                subtitle={data.subtitle}
                features={data.features}
                buttonText={data.buttonText}
                onDownload={onDownload}
              />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 image-column">
              <ImageBox
                src={data.image.src}
                alt={data.image.alt}
                width={data.image.width}
                height={data.image.height}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

DownloadSection.propTypes = {
  onDownload: PropTypes.func,
};

DownloadSection.defaultProps = {
  onDownload: null,
};

export default DownloadSection;
