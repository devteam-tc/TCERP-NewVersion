'use client';

import React, { useState, useRef } from 'react';
import { FaMinus, FaTimes } from 'react-icons/fa';
import '../../../public/sass/components/_video-section.scss';
import { FaRegSquare } from "react-icons/fa6";

const VideoSection = ({ moduleData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

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

  if (!moduleData?.videosection) {
    return null;
  }

  const { title, description, videoUrl } = moduleData.videosection;
  
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
              muted
              loop
              autoPlay
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
