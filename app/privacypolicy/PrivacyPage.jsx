'use client';

import styles from './PrivacyPage.module.scss';

const PrivacyPage = () => {
  return (
    <main className={styles.privacyPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Privacy Policy</h1>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Data Collection</h2>
            <p>Tech Cloud ERP collects the following types of data:</p>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <span className={styles.listMarker}>1</span>
                <p>We have your consent. We require opt-in consent for the sharing of any sensitive personal information.</p>
              </div>
              <div className={styles.listItem}>
                <span className={styles.listMarker}>2</span>
                <p>We provide such information to our other trusted businesses or persons for the purpose of processing the information on our behalf.</p>
              </div>
              <div className={styles.listItem}>
                <span className={styles.listMarker}>3</span>
                <p>We have a good faith belief that access, use, preservation or disclosure of such information is reasonably necessary.</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Security Measures</h2>
            <p>Tech Cloud ERP provides a Customized ERP Software in India, so we take appropriate security measures to protect against unauthorized access.</p>
          </section>

          <section className={styles.section}>
            <h2>Changes in Privacy Policy</h2>
            <p>It shall be noted that this Privacy Policy may change later or from time to time.</p>
          </section>

          <section className={styles.section}>
            <h2>Contact Details</h2>
            <p>Should you have any concerns regarding our cloud ERP software privacy policy, you can contact us through phone or email.</p>
          </section>

          <section className={styles.section}>
            <h2>Terms and Conditions</h2>
            <p>Tech Cloud ERP terms and conditions govern your use of this website.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.warning}>Note</h2>
            <p className={styles.warningText}>IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE WEBSITE.</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage; 