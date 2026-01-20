// import styles from './Form.module.css';

// const AnchorWordsForm = ({ anchorWords, setAnchorWords }) => {
   
//     const addAnchorWord = () => {
//         setAnchorWords([...anchorWords, { word: "", href: "" }]);
//       };
      
//       // Function to remove an anchor word entry
//       const removeAnchorWord = (index) => {
//         setAnchorWords(anchorWords.filter((_, i) => i !== index));
//       };
     
//       // Function to update anchor word and href
//       const handleAnchorWordChange = (index, field, value) => {
//         const updatedAnchorWords = [...anchorWords];
//         updatedAnchorWords[index][field] = value;
//         setAnchorWords(updatedAnchorWords);
//       };
      
//     return (
//         <div>
//         {anchorWords.map((item, index) => (
//           <div key={index} className={styles.section}>
//                     <h3>Anchor Words</h3>
//             {/* Input for Anchor Word */}
//             <input className={styles.input}
//               type="text"
//               placeholder="Anchor Word"
//               value={item.word}
//               onChange={(e) => handleAnchorWordChange(index, "word", e.target.value)}
//             />

//             {/* Input for Href (URL) */}
//             <input className={styles.input}
//               type="text"
//               placeholder="Href (URL)"
//               value={item.href}
//               onChange={(e) => handleAnchorWordChange(index, "href", e.target.value)}
//             />

//             {/* Remove Button */}
//             <button className={styles.crossbutton} onClick={() => removeAnchorWord(index)}>Remove</button>
//           </div>
//         ))}

//         {/* Button to Add New Anchor Word */}
//         <button className={styles.addButton} onClick={addAnchorWord}>Add Anchor Word</button>
//       </div>
//     );
//   };
  
//   export default AnchorWordsForm;
  

import styles from './Form.module.css';

const AnchorWordsForm = ({ anchorWords = [], setAnchorWords }) => {

  console.log("Rendered with anchorWords:", anchorWords); // Debugging log

  // Function to add a new anchor word
  const addAnchorWord = () => {
    setAnchorWords((prevWords) => {
      const updatedWords = [...prevWords, { word: "", href: "" }];
      console.log("Updated anchorWords after adding:", updatedWords);
      return updatedWords;
    });
  };

  // Function to remove an anchor word entry
  const removeAnchorWord = (index) => {
    setAnchorWords((prevWords) => {
      const updatedWords = prevWords.filter((_, i) => i !== index);
      console.log("Updated anchorWords after removing:", updatedWords);
      return updatedWords;
    });
  };

  // Function to update anchor word and href
  const handleAnchorWordChange = (index, field, value) => {
    setAnchorWords((prevWords) => {
      const updatedWords = [...prevWords];
      updatedWords[index][field] = value;
      console.log("Updated anchorWords after editing:", updatedWords);
      return updatedWords;
    });
  };

  return (
    <div>
      <h3>Anchor Words</h3>
      {Array.isArray(anchorWords) && anchorWords.length > 0 ? (
        anchorWords.map((item, index) => (
          <div key={index} className={styles.section}>
            {/* Input for Anchor Word */}
            <input className={styles.input}
              type="text"
              placeholder="Anchor Word"
              value={item.word}
              onChange={(e) => handleAnchorWordChange(index, "word", e.target.value)}
            />

            {/* Input for Href (URL) */}
            <input className={styles.input}
              type="text"
              placeholder="Href (URL)"
              value={item.href}
              onChange={(e) => handleAnchorWordChange(index, "href", e.target.value)}
            />

            {/* Remove Button */}
            <button className={styles.crossbutton} onClick={() => removeAnchorWord(index)}>Remove</button>
          </div>
        ))
      ) : (
        <p>No anchor words added.</p> // Fallback when anchorWords is empty
      )}

      {/* Button to Add New Anchor Word */}
      <button className={styles.addButton} onClick={addAnchorWord}>Add Anchor Word</button>
    </div>
  );
};

export default AnchorWordsForm;
