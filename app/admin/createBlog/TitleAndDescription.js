// const TitleAndDescription = ({ title, setTitle, description, setDescription, slug }) => (
//     <div>
//       <input type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
//       <textarea placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
//       <div>
//         <label>Slug (Auto-generated):</label>
//         <input type="text" value={slug} readOnly />
//       </div>
//     </div>
//   );
//   export default TitleAndDescription;
  

import { useState, useEffect } from "react";
import styles from './Form.module.css';

const TitleAndDescription = ({ title, setTitle, description, setDescription }) => {
  const [slug, setSlug] = useState("");

  useEffect(() => {
    if (title) {
      setSlug(
        title
          .toLowerCase()
          .replace(/\s+/g, "-") // Replace spaces with hyphens
          .replace(/[^a-z0-9-]/g, "") // Remove special characters
      );
    } else {
      setSlug("");
    }
  }, [title]);

  return (
    <div className={styles.section}>
      <input className={styles.input}
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ width: "100%", marginBottom: "10px" }}
      />

      {/* ✅ Description Field */}
      <input className={styles.input}
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <div>
        <label>Slug (Auto-generated):</label>
        <input type="text" value={slug} readOnly className={styles.input} />
      </div>
    </div>
  );
};

export default TitleAndDescription;