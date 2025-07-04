import styles from './Form.module.css';

const ContentForm = ({ content = [], setContent }) => {
  // Handle title change
  const handleContentChange = (index, field, value) => {
    setContent((prevContent) =>
      prevContent.map((item, i) =>
        i === index ? { ...item, [field]: value, description: item.description || [] } : item
      )
    );
  };

  // Handle description change for a specific point
  const handleDescriptionChange = (contentIndex, descIndex, value) => {
    setContent((prevContent) =>
      prevContent.map((item, i) =>
        i === contentIndex
          ? {
              ...item,
              description: item.description.map((desc, j) => (j === descIndex ? value : desc)),
            }
          : item
      )
    );
  };

  // Add a new description point inside a content section
  const addDescriptionPoint = (contentIndex) => {
    setContent((prevContent) =>
      prevContent.map((item, i) =>
        i === contentIndex
          ? { ...item, description: [...(item.description || []), ""] }
          : item
      )
    );
  };

  // Remove a description point
  const removeDescriptionPoint = (contentIndex, descIndex) => {
    setContent((prevContent) =>
      prevContent.map((item, i) =>
        i === contentIndex
          ? { ...item, description: item.description.filter((_, j) => j !== descIndex) }
          : item
      )
    );
  };

  // Add a new content section
  const addContentItem = () => {
    setContent((prevContent) => [...(prevContent || []), { title: "", description: [""] }]);
  };

  return (
    <div className={styles.section}>
      <h3>Content Section</h3>
      
      {/* Ensure content is an array before mapping */}
      {Array.isArray(content) && content.length > 0 ? (
        content.map((item, contentIndex) => (
          <div key={contentIndex}>
            <input
              className={styles.input}
              type="text"
              placeholder="Content Title"
              value={item.title}
              onChange={(e) => handleContentChange(contentIndex, "title", e.target.value)}
              required
            />

            {Array.isArray(item.description) &&
              item.description.map((desc, descIndex) => (
                <div key={descIndex} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <input
                    className={styles.input}
                    placeholder={`Description Point ${descIndex + 1}`}
                    value={desc}
                    onChange={(e) => handleDescriptionChange(contentIndex, descIndex, e.target.value)}
                    required
                  />
                  <button
                    className={styles.crossbutton}
                    type="button"
                    onClick={() => removeDescriptionPoint(contentIndex, descIndex)}
                  >
                    ❌
                  </button>
                </div>
              ))}

            <button className={styles.addButton} type="button" onClick={() => addDescriptionPoint(contentIndex)}>
              + Add Description Point
            </button>
          </div>
        ))
      ) : (
        <p>No content added yet.</p>
      )}

      <button style={{ marginTop: '10px' }} className={styles.addButton} type="button" onClick={addContentItem}>
        + Add Content
      </button>
    </div>
  );
};

export default ContentForm;
