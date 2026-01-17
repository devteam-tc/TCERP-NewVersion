// // app/blogs2/how-erp-helps-the-signage-industry-work-smarter/sections/Introduction/Introduction.jsx
// 'use client';

// import styles from "./Introduction.module.css";
// import Image from 'next/image';
// import introContent from '../data/introContent';

// export default function Introduction() {
//   return (
//     <section id="introduction">
//       <Image 
//         src={introContent.image.src}
//         alt={introContent.image.alt}
//         width={introContent.image.width}
//         height={introContent.image.height}
//         className={styles.introImage}
//         priority
//       />
      
//       <div className={styles.introText}>
//       <h1 className={styles.bg_heading1}>{introContent.title}</h1>
//         {introContent.paragraphs.map((paragraph, index) => (
//           <p key={index} className={styles.dec_pr1}>
//             {paragraph}
//           </p>
//         ))}
//       </div>
//     </section>
//   );
// }



// app/blogs/[slugs]/sections/Introduction.jsx
'use client';

import styles from "./Introduction.module.css";
import Image from 'next/image';
import { format } from 'date-fns';

export default function Introduction({ title, description, imageUrl, date }) {
  const formattedDate = date ? format(new Date(date), 'MMMM d, yyyy') : '';

  return (
    <section id="introduction" className={styles.section}>
      {imageUrl && (
        <div className={styles.imageContainer}>
          <Image 
            src={imageUrl}
            alt={title || 'Blog post image'}
            width={1200}
            height={630}
            className={styles.introImage}
            priority
          />
        </div>
      )}
      
      <div className={styles.introText}>
        <h1 className={styles.bg_heading1}>{title}</h1>
        {formattedDate && <p className={styles.date}>{formattedDate}</p>}
        {description && (
          <div className={styles.description}>
            {Array.isArray(description) ? (
              description.map((paragraph, index) => (
                <p key={index} className={styles.dec_pr1}>
                  {paragraph}
                </p>
              ))
            ) : (
              <p className={styles.dec_pr1}>{description}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}