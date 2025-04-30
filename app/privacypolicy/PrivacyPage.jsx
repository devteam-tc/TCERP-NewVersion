'use client';

import styles from './PrivacyPage.module.scss';

const PrivacyPage = () => {
  return (
    <main className={styles.privacyPage}>
      <div className={styles.header}>
        <h1>Privacy Policy</h1>
        <p className={styles.updateDate}>Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            At TCERP, we are committed to protecting your privacy. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you use our Service.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Information We Collect</h2>
          <p>We collect several types of information from and about users of our Service:</p>
          <ul>
            <li>Personal Information (name, email, contact details)</li>
            <li>Business Information (company name, industry, size)</li>
            <li>Usage Data (how you interact with our Service)</li>
            <li>Technical Data (IP address, browser type, device information)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our Service</li>
            <li>Improve and personalize your experience</li>
            <li>Communicate with you about updates and support</li>
            <li>Ensure security and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Data Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Service providers who assist in our operations</li>
            <li>Business partners for joint marketing efforts</li>
            <li>Legal authorities when required by law</li>
            <li>Third parties in case of business transfers</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our Service and hold certain 
            information. You can instruct your browser to refuse all cookies or to indicate when a cookie is 
            being sent.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
            the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <div className={styles.contactDetails}>
            <p>Email: privacy@tcerp.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Business Street, Suite 100, City, State 12345</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPage; 