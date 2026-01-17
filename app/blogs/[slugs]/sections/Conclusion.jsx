// // app/blogs2/how-erp-helps-the-signage-industry-work-smarter/sections/Conclusion/Conclusion.jsx
// import styles from './Conclusion.module.css';
// import introStyles from './Introduction.module.css'
// import mainContentStyles from './maincontent.module.css'


// const faqItems = [
//   {
//     question: "Is Tech Cloud ERP for wholesale and distribution?",
//     answer: "Tech Cloud ERP solution for Wholesale Distribution allows distributors to run their entire company on a single cloud-based platform that provides real-time visibility across the business and the flexibility to meet unique requirements."
//   },
//   {
//     question: "What is wholesale distribution software?",
//     answer: "Wholesale distribution software lets distributors track customer orders and sales transactions in real-time. This provides visibility into the status of orders, including order processing, fulfillment, and shipping. Distributors can then easily access their order history and track the progress of each order."
//   },
//   {
//     question: "What is wholesale CRM?",
//     answer: "A wholesale CRM is a software solutions system that can help a wholesaler or wholesale distribution company to streamline their day to day. The system helps by integrating with other systems that a wholesaler may use to create a central spot for all sales, marketing, and customer communication."
//   }
// ];

// export default function Conclusion() {
//   return (
//     <div className={styles.container}>
//       {/* Conclusion Section */}
//       <section className={styles.conclusionSection}>
//         <h2 className={introStyles.bg_heading1}>Conclusion</h2>
//           <p className={introStyles.dec_pr1}>
//           Adapt to evolving market demands and business growth with a dynamic ERP system. 
//           Tech Cloud ERP supports multi-location operations, real-time data access, and 
//           agile workflows, ensuring businesses stay competitive and future-ready.
//         </p>
//       </section>

//       {/* FAQ Section */}
//       <section className={styles.faqSection}>
//         <h2 className={styles.sectionHeading}>FAQ's</h2>
//         <div className={styles.faqContainer}>
//           {faqItems.map((faq, index) => (
//             <div key={index} className={styles.faqItem}>
//               <h3 className={mainContentStyles.contentSubheading}>{faq.question}</h3>
//               <p className={introStyles.dec_pr1}>{faq.answer}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }


// app/blogs/[slugs]/sections/Conclusion.jsx
// 'use client';

// import styles from './Conclusion.module.css';
// import KeywordParser from './components/KeywordParser';

// const FAQItem = ({ question, answer, anchorWords }) => (
//   <div className={styles.faqItem}>
//     <h3 className={styles.question}>{question}</h3>
//     <div className={styles.answer}>
//       <KeywordParser 
//         description={answer} 
//         anchorWords={anchorWords} 
//       />
//     </div>
//   </div>
// );

// const Conclusion = ({  faqs = [], anchorWords = [] }) => {
//   return (
//     <div className={styles.conclusionContainer}>
//       {/* CTA Section */}
//       {/* {ctaSection && (
//         <section className={styles.ctaSection}>
//           {ctaSection.ctaTitle && (
//             <h2 className={styles.ctaTitle}>{ctaSection.ctaTitle}</h2>
//           )}
//           {ctaSection.descriptions?.map((desc, index) => (
//             <div key={index} className={styles.ctaDescription}>
//               <KeywordParser 
//                 description={desc} 
//                 anchorWords={anchorWords} 
//               />
//             </div>
//           ))}
//         </section>
//       )} */}

//       {/* FAQ Section */}
//       {faqs.length > 0 && (
//         <section className={styles.faqSection}>
//           <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
//           <div className={styles.faqList}>
//             {faqs.map((faq, index) => (
//               <FAQItem 
//                 key={index}
//                 question={faq.question}
//                 answer={faq.answer}
//                 anchorWords={anchorWords}
//               />
//             ))}
//           </div>
//         </section>
//       )}
//     </div>
//   );
// };

// export default Conclusion;

'use client';

import { useEffect, useState } from 'react';
import styles from './Conclusion.module.css';
import introStyles from './Introduction.module.css';
import mainContentStyles from './maincontent.module.css';
import KeywordParser from './components/KeywordParser';
import { doc, getDoc } from "firebase/firestore";
import { blogDb } from '../../../../firebaseConfig';

const FAQItem = ({ question, answer, anchorWords }) => (
  <div className={styles.faqItem}>
    <h3 className={mainContentStyles.contentSubheading}>{question}</h3>
    <div className={introStyles.dec_pr1}>
      <KeywordParser 
        description={answer} 
        anchorWords={anchorWords} 
      />
    </div>
  </div>
);

const Conclusion = ({ postId, faqs = [], anchorWords = [] }) => {
  const [conclusion, setConclusion] = useState({
    title: "Conclusion",
    content: "Adapt to evolving market demands and business growth with a dynamic ERP system. Tech Cloud ERP supports multi-location operations, real-time data access, and agile workflows, ensuring businesses stay competitive and future-ready."
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConclusion = async () => {
      try {
        if (!postId) {
          setLoading(false);
          return;
        }
        
        const docRef = doc(blogDb, "blogs", postId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const postData = docSnap.data();
          if (postData.Conclusion) {
            setConclusion(prev => ({
              ...prev,
              content: postData.Conclusion
            }));
          }
        }
      } catch (error) {
        console.error("Error fetching conclusion:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchConclusion();
  }, [postId]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.conclusionContainer}>
      {/* Conclusion Section */}
      <section className={styles.conclusionSection}>
        <h2 className={introStyles.bg_heading1}>{conclusion.title}</h2>
        <div className={introStyles.dec_pr1}>
          <KeywordParser 
            description={conclusion.content} 
            anchorWords={anchorWords} 
          />
        </div>
      </section>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className={styles.faqSection}>
          <h2 className={styles.sectionHeading}>FAQ's</h2>
          {/* <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                anchorWords={anchorWords}
              />
            ))}
          </div> */}
          {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <h3 className={mainContentStyles.contentSubheading}>{faq.question}</h3>
          <div className={introStyles.dec_pr1}>
            <KeywordParser 
              description={faq.answer} 
              anchorWords={anchorWords} 
            />
          </div>
        </div>
      ))}
        </section>
      )}
    </div>
  );
};

export default Conclusion;