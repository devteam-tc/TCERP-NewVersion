import { useState } from "react";
import styles from './Form.module.css';

const MetaKeywordsForm = ({ metaKeywords, setMetaKeywords }) => {
      const [metaKeywordInput, setMetaKeywordInput] = useState("");
    
    const addMetaKeyword = (e) => {
      if (e.key === "Enter" && e.target.value) {
        setMetaKeywords([...metaKeywords, e.target.value]);
        e.target.value = "";
      }
      
    };
    const removeMetaKeyword = (index) => {
        setMetaKeywords(metaKeywords.filter((_, i) => i !== index));
      };
      const addMetaKeywordItem = () => {
        if (metaKeywordInput.trim() !== "") {
          setMetaKeywords([...metaKeywords, metaKeywordInput.trim()]);
          setMetaKeywordInput("");
        }
      };
      
    return (
        <div className={styles.section}>
        <h3>Meta Keywords</h3>

        <input className={styles.input}
          type="text"
          placeholder="meta keywords"
          value={metaKeywordInput}
          onChange={(e) => setMetaKeywordInput(e.target.value)}
          onKeyDown={addMetaKeyword} // Enter Key to Add
        />

        {/* Add Button */}
        <button type="button" className={styles.addButton} onClick={addMetaKeywordItem}>+ Add Meta Keyword</button>

        {/* Meta Keywords List */}
        <div style={{ marginTop: "10px" }}>
          {metaKeywords.map((keyword, index) => (
            <span key={index} style={{ marginRight: "5px", padding: "5px", border: "1px solid #000", borderRadius: "5px", display: "inline-block" }}>
              {keyword} 
              <button className={styles.crossbutton} onClick={() => removeMetaKeyword(index)}>x</button>
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default MetaKeywordsForm;
  