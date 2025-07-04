import { useState } from "react";
import styles from "./Form.module.css";

const PointWiseForm = ({ setSelectedIndustry }) => {
  const [sections, setSections] = useState([
    {
      sectionName: "section1",
      data: [{ TopHeading: "", TopIntro: "" }]
    }
  ]);

  // Handle input changes for sections
  const handleChange = (sectionIndex, pointIndex, field, value) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].data[pointIndex][field] = value;
    setSections(updatedSections);
  };

  // Remove a specific point inside a section
  const removePoint = (sectionIndex, pointIndex) => {
    const updatedSections = [...sections];

    if (updatedSections[sectionIndex].data.length > 1) {
      updatedSections[sectionIndex].data.splice(pointIndex, 1);
      setSections(updatedSections);
    }
  };

  // Remove a section (Only Section 2 can be deleted)
  const removeSection = (sectionIndex) => {
    if (sectionIndex !== 1) {
      alert("You can only delete Section 2.");
      return;
    }

    if (sections.length > 1) {
      const updatedSections = sections.filter((_, index) => index !== sectionIndex);
      setSections(updatedSections);
    } else {
      alert("At least one section is required.");
    }
  };

  // Add a new point inside a section
  const addPoint = (sectionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].data.push({ TopHeading: "", TopIntro: "" }); // Ensuring consistency
    setSections(updatedSections);
  };

  // Add a new section dynamically
  const addSection = () => {
    setSections([
      ...sections,
      { sectionName: `section${sections.length + 1}`, data: [{ TopHeading: "", TopIntro: "" }] }
    ]);
  };

  return (
    <div className={styles.section}>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className={styles.section}>
          <h3>{section.sectionName}</h3>

          {/* Section Top Heading */}
          <input
            className={styles.input}
            type="text"
            placeholder="Section Top Heading"
            value={section.data[0].TopHeading}
            onChange={(e) => handleChange(sectionIndex, 0, "TopHeading", e.target.value)}
            required
            style={{ width: "100%", marginBottom: "5px" }}
          />

          {/* Section Top Intro */}
          <input
            className={styles.input}
            type="text"
            placeholder="Section Top Intro"
            value={section.data[0].TopIntro}
            onChange={(e) => handleChange(sectionIndex, 0, "TopIntro", e.target.value)}
            required
            style={{ width: "100%", marginBottom: "10px" }}
          />

          {/* Points Inside Section */}
          {section.data.slice(1).map((point, pointIndex) => (
            <div key={pointIndex}>
              <input
                className={styles.input}
                type="text"
                placeholder="Point Title"
                value={point.TopHeading} // Consistent with initial state
                onChange={(e) => handleChange(sectionIndex, pointIndex + 1, "TopHeading", e.target.value)}
                required
                style={{ width: "100%", marginBottom: "5px" }}
              />
              <input
                className={styles.input}
                placeholder="Point Description"
                value={point.TopIntro} // Consistent with initial state
                onChange={(e) => handleChange(sectionIndex, pointIndex + 1, "TopIntro", e.target.value)}
                required
                style={{ width: "100%", marginBottom: "10px" }}
              />
              <button className={styles.crossbutton} type="button" onClick={() => removePoint(sectionIndex, pointIndex + 1)}>
                ❌
              </button>
            </div>
          ))}

          {/* Add Point Button */}
          <button className={styles.addButton} type="button" onClick={() => addPoint(sectionIndex)}>
            + Add Point
          </button>

          {/* Add Section Button */}
          <button className={styles.addButton} type="button" onClick={addSection} style={{ marginTop: "10px" }}>
            + Add Section
          </button>

          {/* Remove Section Button */}
          <button className={styles.crossbutton} type="button" onClick={() => removeSection(sectionIndex)}>
            ❌
          </button>
        </div>
      ))}
    </div>
  );
};

export default PointWiseForm;