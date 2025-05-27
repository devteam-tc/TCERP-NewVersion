import React, { useState } from 'react';
import './VideoSection.scss';

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <section className="video-section">
      <div className="video-section__container">
        <div className="video-section__header">
          <h2 className="video-section__title">Get The Fastest Time To Hire</h2>
          <p className="video-section__desc">
            suitable full-time and temporary candidates. Publish job vacancies all major sites to broaden your reach – and access a global
            candidate warehouse that offers thousands of pre-vetted technical, professional, and scientific candidates.
          </p>
        </div>
        <div className="video-section__video-wrapper">
          {!showVideo ? (
            <>
              <img
                src="/images/modules/banner-shot.png"
                alt="Two people looking at a laptop"
                className="video-section__video-thumb"
                draggable="false"
              />
              <button 
                className="video-section__play-btn" 
                aria-label="Play video" 
                tabIndex={0}
                onClick={handlePlayClick}
              >
                <span className="play-icon"></span>
              </button>
            </>
          ) : (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/x4cxxrDdzWo?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
