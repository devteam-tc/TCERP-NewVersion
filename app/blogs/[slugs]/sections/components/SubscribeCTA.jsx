// // app/blogs/how-erp-helps-the-signage-industry-work-smarter/components/SubscribeCTA.jsx
// import styles from "./SubscribeCTA.module.css";
// import Image from "next/image";
// import brochureImage from "./brocher.png";

// export default function SubscribeCTA() {
//   return (
//     <div className={styles.subscribe}>
//       <Image 
//         src={brochureImage} 
//         alt="Download our brochure" 
//         width={300}  // Adjust these dimensions as needed
//         height={200} // Adjust these dimensions as needed
//         className={styles.brochureImage}
//       />
        
//     </div>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import styles from "./SubscribeCTA.module.css";
import Image from "next/image";

export default function SubscribeCTA({ post }) {
  // Get brochure URL from post data
  const brochureUrl = post?.brocher || "https://techclouderp.com/images/industry-icons/book-a-demo-img.webp";

  if (!brochureUrl) {
    return null; // Don't render anything if no brochure URL is available
  }

  return (
    <div className={styles.subscribe}>
      <a 
        href={brochureUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.downloadLink}
      >
        <Image 
          src={brochureUrl} 
          alt="Download our brochure" 
          width={300}
          height={300}
          className={styles.brochureImage}
        />
      
      </a>
    </div>
  );
}