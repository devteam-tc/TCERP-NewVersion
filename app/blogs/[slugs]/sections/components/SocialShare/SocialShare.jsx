'use client';

import React from 'react';
import styles from './SocialShare.module.css';

const SocialShare = () => {
  const shareOnSocial = (platform) => {
    if (typeof window === 'undefined') return;
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'pop', 'width=600, height=400, scrollbars=no');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, 'pop', 'width=600, height=500');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, 'pop', 'width=600, height=400');
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.socialShare}>
      <span className={styles.shareText}>Share this article :</span>
      <div className={styles.socialIcons}>
        <button 
          onClick={() => shareOnSocial('facebook')} 
          className={`${styles.socialIcon} ${styles.facebook}`}
          aria-label="Share on Facebook"
        >
          <span className={styles.iconText}>f</span>
        </button>
        <button 
          onClick={() => shareOnSocial('linkedin')} 
          className={`${styles.socialIcon} ${styles.linkedin}`}
          aria-label="Share on LinkedIn"
        >
          <span className={styles.iconText}>in</span>
        </button>
        <button 
          onClick={() => shareOnSocial('twitter')} 
          className={`${styles.socialIcon} ${styles.twitter}`}
          aria-label="Share on Twitter"
        >
          <span className={styles.iconText}>X</span>
        </button>
      </div>
    </div>
  );
};

export default SocialShare;