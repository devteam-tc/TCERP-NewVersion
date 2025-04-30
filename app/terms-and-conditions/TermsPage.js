'use client';

import styles from './TermsPage.module.scss';

const TermsPage = () => {
  return (
    <div className={styles.termsContainer}>
      <div className={styles.termsContent}>
        <h1 className={styles.title}>Terms and Conditions</h1>
        <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString()}</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Introduction</h2>
          <p className={styles.paragraph}>
          Tech Cloud ERP terms and conditions administrate your use of this website; by using this website,
           you accept these terms and conditions. In case you want to disagree with these terms and conditions,
            you must not use this website. If you endure browsing this website, you approve to obey with the following 
            terms and conditions of use, which together with our privacy policy govern Tech Cloud ERP association with you 
            in relation to this website. The term “Tech Cloud ERP” or “us” or “we” refer to the owner of the website. 
          The term “you” refers to the user of our website.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Surfing this website is subject to the following terms of use:
          </h2>
          <ul className={styles.list}>
            <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.
            </li>
            <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors fully permitted by law. Your use of any information or materials on this website is entirely at your risk, for which we shall not be liable.
            </li>
            <li>"Content" refers to all materials, information, and data available on our platform</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Account Registration</h2>
          <p className={styles.paragraph}>
            To access certain features of the Service, you must register for an account. You agree to:
          </p>
          <ul className={styles.list}>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Notify us immediately of any unauthorized access</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. User Responsibilities</h2>
          <p className={styles.paragraph}>
            As a user of our Service, you agree to:
          </p>
          <ul className={styles.list}>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not engage in any fraudulent or illegal activities</li>
            <li>Respect the intellectual property rights of others</li>
            <li>Not interfere with the proper functioning of the Service</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Intellectual Property</h2>
          <p className={styles.paragraph}>
            All content, features, and functionality of the Service are owned by TCERP and are protected by 
            international copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Limitation of Liability</h2>
          <p className={styles.paragraph}>
            TCERP shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
            resulting from your use of or inability to use the Service.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Changes to Terms</h2>
          <p className={styles.paragraph}>
            We reserve the right to modify these Terms at any time. We will notify users of any material changes 
            through the Service or via email.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Contact Information</h2>
          <p className={styles.paragraph}>
            For any questions about these Terms, please contact us at:
          </p>
          <p className={styles.contactInfo}>
            Email: support@tcerp.com<br />
            Phone: +1 (555) 123-4567<br />
            Address: 123 Business Street, Suite 100, City, State 12345
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage; 