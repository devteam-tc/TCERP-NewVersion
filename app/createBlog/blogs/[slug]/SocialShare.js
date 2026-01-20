"use client";

import { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import styles from "./socialShare.module.css";

export default function SocialShare({ title }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  return (
    <div className={styles.shareContainer}>
      <p>Share this Blog:</p>
      <div className={styles.socialIcons}>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
        >
          <FaFacebook size={24} />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
        >
          <FaXTwitter size={24} />
        </a>
      </div>
    </div>
  );
}
