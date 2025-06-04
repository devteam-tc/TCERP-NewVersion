import React, { useState, useEffect, useRef } from 'react';
import '../../../public/sass/components/_video-section.scss';

const VideoSection = ({ slug }) => {
  const [data, setData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

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
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  if (!data?.videosection) {
    return null;
  }

  const { title, description, videoUrl } = data.videosection;
  
  // Add Cloudinary transformations for optimal playback
  const cloudinaryUrl = `${videoUrl}?f_auto,q_auto,w_1280,c_scale`;

  return (
    <section className="video-section">
      <div className="video-section__container">
        <div className="video-section__header">
          <h2 className="video-section__title">{title}</h2>
          <p className="video-section__desc">{description}</p>
        </div>
        <div className="video-section__video-wrapper">
          <video
            ref={videoRef}
            width="100%"
            height="100%"
            muted
            loop
            playsInline
            controls
            preload="auto"
            className="video-section__video"
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
          >
            <source src={cloudinaryUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button 
            className={`video-section__play-button ${isPlaying ? 'hidden' : ''}`}
            onClick={handlePlayClick}
            aria-label="Play video"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
