import React from "react";
import Link from "next/link";
import styles from "./ImageComponent.module.css";

const ImageComponent = () => {
  const posterImage =
    "https://firebasestorage.googleapis.com/v0/b/tech-cloud-erp-1532582683650.firebasestorage.app/o/blogs_images%2F1742558635429-Design-01-01-01.jpg?alt=media&token=2f22bbca-4908-40f1-9d64-aa6ef248b927";

  return (
    <div className={styles.imageWrapper}>
      <Link href="/schedule-demo">
        <img src={posterImage} alt="Poster" className={styles.image} />
      </Link>
    </div>
  );
};

export default ImageComponent;
