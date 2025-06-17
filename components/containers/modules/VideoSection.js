
'use client';


import React, { useState, useEffect, useRef } from 'react';
import { FaMinus, FaTimes } from 'react-icons/fa';
import '../../../public/sass/components/_video-section.scss';
import { FaRegSquare } from "react-icons/fa6";

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
  const cloudinaryUrl = `${videoUrl}?f_auto,q_auto,w_800,c_scale`;

  return (
    <section className="video-section">
      <div className="video-section__container">
        <div className="video-section__header">
          <h2 className="video-section__title">{title}</h2>
          <p className="video-section__desc">{description}</p>
        </div>
        <div className="video-section__browser-window">
          <div className="video-section__browser-topbar">
            <div className="video-section__browser-dots">
              <span className="video-section__browser-dot"><FaMinus /></span>
              <span className="video-section__browser-dot"><FaRegSquare  /></span>
              <span className="video-section__browser-dot"><FaTimes /></span>

            </div>
          </div>
          <div className="video-section__browser-content">
            <video
              ref={videoRef}
              width="100%"
              height="auto"
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
              className="video-section__video"
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
            >
              <source src={cloudinaryUrl} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
