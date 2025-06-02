import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';

// Dynamically import the popup to avoid SSR issues
const DownloadFormPopup = dynamic(() => import('./DownloadFormPopup'), {
  ssr: false
});

// Storage key for tracking first submission
const FIRST_SUBMISSION_KEY = 'tcerp_first_submission_done';

// Helper to get brochure filename
const getBrochureFilename = (title) => {
  return title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Helper to download brochure
const downloadBrochure = async (industryTitle) => {
  const filename = getBrochureFilename(industryTitle);
  const brochurePath = `/brochures/${filename}.pdf`;
  
  try {
    const response = await fetch(brochurePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch brochure: ${response.status}`);
    }
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = `${industryTitle} Brochure.pdf`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Download failed:', error);
    throw error;
  }
};

const DownloadWidget = ({ bgShape, image, title, spanTitle, buttonText }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasSubmittedBefore, setHasSubmittedBefore] = useState(false);
  const [downloadError, setDownloadError] = useState('');

  // Check if user has submitted before
  useEffect(() => {
    try {
      const hasSubmitted = localStorage.getItem(FIRST_SUBMISSION_KEY) === 'true';
      setHasSubmittedBefore(hasSubmitted);
    } catch (error) {
      console.error('Error checking submission status:', error);
    }
  }, []);

  const handleDownloadClick = useCallback(async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDownloadError('');

    const industryTitle = spanTitle?.replace(" Solutions Brochure", "") || title;

    if (hasSubmittedBefore) {
      // If user has submitted before, download directly
      try {
        await downloadBrochure(industryTitle);
      } catch (error) {
        console.error('Download failed:', error);
        setDownloadError('Unable to download the brochure. Please try again later.');
      }
    } else {
      // Show popup only for first-time users
      setShowPopup(true);
    }
  }, [hasSubmittedBefore, spanTitle, title]);

  const handleClosePopup = useCallback(() => {
    setShowPopup(false);
    setDownloadError('');
  }, []);

  return (
    <div className="download-widget mt-5 mb-5">
      <div
        className="shape"
        style={{
          backgroundImage: `url(${bgShape})`,
        }}
      ></div>
      <div className="inner-box">
        <figure className="image-box">
          <Image
            src={image || ""}
            alt={`${title} ${spanTitle} preview`}
            width={300}
            height={300}
          />
        </figure>
        <h4 style={{
          textAlign: "left"
        }}>
          {title}
          <span style={{color: "var(--bs-primary-500)", fontSize: "16px", fontWeight: "600"}}>{spanTitle}</span>
        </h4>
        {downloadError && (
          <div className="alert alert-danger mb-3" role="alert" style={{ fontSize: '0.9rem' }}>
            {downloadError}
          </div>
        )}
        <button 
          type="button"
          onClick={handleDownloadClick}
          style={{
            background: "linear-gradient(45deg, var(--bs-primary-500), var(--bs-primary-700))",
            color: "white",
            border: "none",
            padding: "10px 40px",
            borderRadius: "50px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontWeight: "500",
            position: "relative",
            zIndex: 1
          }}
          onMouseOver={(e) => e.target.style.opacity = "0.9"}
          onMouseOut={(e) => e.target.style.opacity = "1"}
        >
          {buttonText}
        </button>
      </div>

      {showPopup && !hasSubmittedBefore && (
        <DownloadFormPopup 
          show={showPopup}
          onHide={handleClosePopup}
          industryTitle={spanTitle?.replace(" Solutions Brochure", "") || title}
        />
      )}
    </div>
  );
};

export default DownloadWidget;
  
