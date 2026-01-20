import styles from "./Form.module.css";

const AnchorWordsForm = ({ anchorWords = [], setAnchorWords }) => {
  // ✅ Add a new anchor word directly
  const addAnchorWord = () => {
    setAnchorWords((prev) => [...prev, { word: "", href: "" }]);
  };

  // ✅ Remove an anchor word directly
  const removeAnchorWord = (index) => {
    setAnchorWords((prev) => prev.filter((_, i) => i !== index));
  };

  // ✅ Update anchor words in parent state directly on change
  const handleAnchorWordChange = (index, field, value) => {
    setAnchorWords((prev) => {
      const updatedWords = [...prev];
      updatedWords[index] = { ...updatedWords[index], [field]: value };
      return updatedWords;
    });
  };

  return (
    <div className={styles.section}>
      <h3>Anchor Words</h3>

      {anchorWords.length > 0 ? (
        anchorWords.map((item, index) => (
          <div key={index} className={styles.section}>
            <input
              className={styles.input}
              type="text"
              placeholder="Anchor Word"
              value={item.word}
              onChange={(e) =>
                handleAnchorWordChange(index, "word", e.target.value)
              }
              required
            />

            <input
              className={styles.input}
              type="text"
              placeholder="Href (URL)"
              value={item.href}
              onChange={(e) =>
                handleAnchorWordChange(index, "href", e.target.value)
              }
              required
            />

            <button
              className={styles.crossbutton}
              onClick={() => removeAnchorWord(index)}
            >
              ❌
            </button>
          </div>
        ))
      ) : (
        <p>No anchor words added yet.</p>
      )}

      <button className={styles.addButton} type="button" onClick={addAnchorWord}>
        + Add Anchor Word
      </button>
    </div>
  );
};

export default AnchorWordsForm;
