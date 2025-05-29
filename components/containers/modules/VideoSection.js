import React, { useState, useEffect } from 'react';

const VideoSection = ({ slug }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (slug) {
      import(`../../../data/modules/${slug}.json`)
        .then((moduleData) => {
          setData(moduleData.default);
        })
        .catch((err) => {
          console.error('Failed to load video data:', err);
        });
    }
  }, [slug]);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  if (!data?.videosection) {
    return null;
  }

  const { title, description, thumbnail, videoUrl } = data.videosection;

  return (
    <section className="video-section">
      <div className="video-section__container">
        <div className="video-section__header">
          <h2 className="video-section__title">{title}</h2>
          <p className="video-section__desc">{description}</p>
        </div>
        <div className="video-section__video-wrapper">
          {!showVideo ? (
            <>
              <img
                src={thumbnail}
                alt={`${title} video thumbnail`}
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
              src={`${videoUrl}?autoplay=1`}
              title={`${title} video player`}
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
