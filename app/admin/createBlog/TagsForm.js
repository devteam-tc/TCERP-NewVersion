// const TagsForm = ({ tags, setTags }) => {
//     const addTag = (e) => {
//       if (e.key === "Enter" && e.target.value) {
//         setTags([...tags, e.target.value]);
//         e.target.value = "";
//       }
//     };
  
//     return (
//       <div>
//         <h3>Tags</h3>
//         <input type="text" placeholder="Add a tag and press Enter" onKeyDown={addTag} />
//         <ul>
//           {tags.map((tag, index) => (
//             <li key={index}>
//               {tag} <button type="button" onClick={() => setTags(tags.filter((_, i) => i !== index))}>X</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };
  
//   export default TagsForm;
  


import { useState } from "react";
import styles from './Form.module.css';

const TagsForm = ({ tags = [], setTags }) => { // Provide default value for tags
  const [tagInput, setTagInput] = useState("");

  // ✅ Add tags dynamically
  const addTag = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
      e.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const addTagItem = () => {
    if (tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  // ✅ Remove a tag
  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.section}>
      <h3>Tags</h3>

      <input
        className={styles.input}
        type="text"
        placeholder="tags"
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        onKeyDown={addTag} // Enter Key to Add
        style={{ width: "100%", marginBottom: "10px" }}
      />

      {/* Add Button */}
      <button type="button" className={styles.addButton} onClick={addTagItem}>
        + Add tag
      </button>

      {/* Tags List */}
      <div style={{ marginTop: "10px" }}>
        {tags.length > 0 ? (
          tags.map((tag, index) => (
            <span
              key={index}
              style={{
                marginRight: "5px",
                padding: "5px",
                border: "1px solid #000",
                borderRadius: "5px",
                display: "inline-block",
              }}
            >
              {tag}
              <button className={styles.crossbutton} onClick={() => removeTag(index)}>
                x
              </button>
            </span>
          ))
        ) : (
          <p>No tags added yet</p> // Display message when no tags are available
        )}
      </div>
    </div>
  );
};

export default TagsForm;