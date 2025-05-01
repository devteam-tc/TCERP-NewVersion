'use client';
import { Container } from 'react-bootstrap';
import styles from './TermsPage.module.scss';
import { FaShieldAlt, FaLock, FaGlobe, FaFileContract } from 'react-icons/fa';

const TermsPage = () => {
  return (
    <Container>
      <div className={styles.termsContainer}>
        <div className={styles.termsContent}>
          <h1 className={styles.title}>
            <FaFileContract style={{ marginRight: '10px' }} />
            Terms and Conditions
          </h1>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaShieldAlt style={{ marginRight: '10px' }} />
              1. Introduction
            </h2>
            <p className={styles.paragraph}>
              Tech Cloud ERP terms and conditions administrate your use of this website; by using this website,
              you accept these terms and conditions. In case you want to disagree with these terms and conditions,
              you must not use this website. If you endure browsing this website, you approve to obey with the following 
              terms and conditions of use, which together with our privacy policy govern Tech Cloud ERP association with you 
              in relation to this website. The term "Tech Cloud ERP" or "us" or "we" refer to the owner of the website. 
              The term "you" refers to the user of our website.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaLock style={{ marginRight: '10px' }} />
              Surfing this website is subject to the following terms of use:
            </h2>
            <ul className={styles.list}>
              <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
              <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance,
                  completeness or suitability of the information and materials found or offered on this website for any purpose.
                  You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for
                  any such inaccuracies or errors fully permitted by law. Your use of any information or materials on this website
                  is entirely at your risk, for which we shall not be liable.</li>
              <li>This website contains material which is owned by or licensed to us. This material is not limited to the design, layout, look, appearance and graphics. Reproduction or tampering of information is prohibited other than in accordance with the copyright notice.</li>
              <li>This website may also include links to other websites belonging to our business. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s).</li>
              <li>You may not create a link to this website from another website or document without our consent.</li>
              <li>Your use of this website and any dispute arising out of use of the website is subject to the Cyber Law of India.</li>
            </ul>
          </section>

        
        </div>
      </div>
    </Container>
  );
};

export default TermsPage; 