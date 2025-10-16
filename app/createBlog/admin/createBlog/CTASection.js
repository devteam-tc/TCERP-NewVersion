import styles from './Form.module.css';

const CTASection = ({ ctaSection, setCtaSection }) => {

  const handleCtaChange = (index, value) => {
    const updatedDescriptions = [...ctaSection.descriptions];
    updatedDescriptions[index] = value;
    setCtaSection({ ...ctaSection, descriptions: updatedDescriptions });
  };
  
  const removeDescription = (index) => {
    const updatedDescriptions = ctaSection.descriptions.filter((_, i) => i !== index);
    setCtaSection({ ...ctaSection, descriptions: updatedDescriptions });
  };

  const addDescription = () => {
    setCtaSection((prevContent) => {
      const updatedDescriptions = [...(prevContent.descriptions || []), ""]; // Ensure array update
      console.log("Updated descriptions array:", updatedDescriptions); // Debugging
      return {
        ...prevContent,
        descriptions: updatedDescriptions,
      };
    });
  };
  
  
  

  return (
    <div className={styles.section}>
      <h3>Conclusion</h3>
      <input
        className={styles.input}
        type="text"
        placeholder="CTA Title"
        value={ctaSection.ctaTitle}
        onChange={(e) => setCtaSection({ ...ctaSection, ctaTitle: e.target.value })}
        required
      />
      
      {ctaSection.descriptions && ctaSection.descriptions.map((desc, index) => (
        <div key={index} className={styles.descriptionContainer}>
          <input
            className={styles.input}
            placeholder="Description"
            value={desc}
            onChange={(e) => handleCtaChange(index, e.target.value)}
            required
          />
          <button className={styles.crossbutton} type="button" onClick={() => removeDescription(index)}>
            ❌
          </button>
        </div>
      ))}

      <button className={styles.addButton} type="button" onClick={addDescription}>
        + Add Description
      </button>
    </div>
  );
};

export default CTASection;
  