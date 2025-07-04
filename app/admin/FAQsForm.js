// import styles from './Form.module.css';

// const FAQsForm = ({ faqs, setFaqs }) => {
//     const handleFaqChange = (faqIndex, field, value) => {
//         const updatedFaqs = [...faqs];
//         updatedFaqs[faqIndex][field] = value;
//         setFaqs(updatedFaqs);
//       };
//       const addFaq = () => {
//         setFaqs([...faqs, { question: "", answer: "" }]);
//       };
//     return (
//         <div className={styles.section}>
//         <h3>FAQ’s</h3>
//         {faqs.map((faq, faqIndex) => (
//           <div key={faqIndex}>
//             <input className={styles.input}
//               type="text"
//               placeholder="FAQ Question"
//               value={faq.question}
//               onChange={(e) => handleFaqChange(faqIndex, "question", e.target.value)}
//               required
//               style={{ width: "100%", marginBottom: "5px" }}
//             />
//             <input  className={styles.input}
//               placeholder="FAQ Answer"
//               value={faq.answer}
//               onChange={(e) => handleFaqChange(faqIndex, "answer", e.target.value)}
//               required
//               style={{ width: "100%", marginBottom: "10px" }}
//             />
//           </div>
//         ))}
//         <button type="button" onClick={addFaq}  className={styles.addButton} >
//           + Add FAQ
//         </button>
//       </div>
//     );
//   };
  
//   export default FAQsForm;
  

import styles from './Form.module.css';

const FAQsForm = ({ faqs = [], setFaqs }) => {

  console.log("Rendered with faqs:", faqs); // Debugging log

  // Handle FAQ change
  const handleFaqChange = (faqIndex, field, value) => {
    setFaqs((prevFaqs) => {
      const updatedFaqs = [...prevFaqs];
      updatedFaqs[faqIndex][field] = value;
      console.log("Updated faqs after editing:", updatedFaqs);
      return updatedFaqs;
    });
  };

  // Add new FAQ
  const addFaq = () => {
    setFaqs((prevFaqs) => {
      const updatedFaqs = [...prevFaqs, { question: "", answer: "" }];
      console.log("Updated faqs after adding:", updatedFaqs);
      return updatedFaqs;
    });
  };

  return (
    <div className={styles.section}>
      <h3>FAQ’s</h3>

      {Array.isArray(faqs) && faqs.length > 0 ? (
        faqs.map((faq, faqIndex) => (
          <div key={faqIndex}>
            <input
              className={styles.input}
              type="text"
              placeholder="FAQ Question"
              value={faq.question}
              onChange={(e) => handleFaqChange(faqIndex, "question", e.target.value)}
              required
              style={{ width: "100%", marginBottom: "5px" }}
            />
            <input
              className={styles.input}
              placeholder="FAQ Answer"
              value={faq.answer}
              onChange={(e) => handleFaqChange(faqIndex, "answer", e.target.value)}
              required
              style={{ width: "100%", marginBottom: "10px" }}
            />
          </div>
        ))
      ) : (
        <p>No FAQs added.</p> // Fallback when faqs is empty
      )}

      <button type="button" onClick={addFaq} className={styles.addButton}>
        + Add FAQ
      </button>
    </div>
  );
};

export default FAQsForm;
