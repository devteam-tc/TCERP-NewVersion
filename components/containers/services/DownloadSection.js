"use client";
import Image from 'next/image';
import PropTypes from 'prop-types';

// Import static download guide data
import downloadGuideData from '../../../data/services/downloadGuide.json';

// Feature List Component
const FeatureList = ({ features }) => (
  <ul className="list-item mb_30">
    {features.map((feature, index) => (
      <li key={index}>
        <p className="fw-semibold black" style={{ fontSize: '20px !important' }}>{feature}</p>
      </li>
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
      style={{ color: '#fff !important' }}
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
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset',
          borderRadius: '10px',
          overflow: 'hidden'
        }}
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
  return (
    <section className="download-section alternat-2 pb_120 pt_120">
      <div className="auto-container">
        <div className="inner-container">
          <div 
            className="pattern-layer" 
            style={{ backgroundImage: `url('${downloadGuideData.backgroundImage}')` }} 
          />
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
              <ContentBox
                title={downloadGuideData.title}
                subtitle={downloadGuideData.subtitle}
                features={downloadGuideData.features}
                buttonText={downloadGuideData.buttonText}
                onDownload={onDownload}
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 image-column" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
              <ImageBox
                src={downloadGuideData.image.src}
                alt={downloadGuideData.image.alt}
                width={downloadGuideData.image.width}
                height={downloadGuideData.image.height}
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