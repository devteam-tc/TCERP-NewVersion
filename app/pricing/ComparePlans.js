'use client';
import styles from './ComparePlans.module.scss';

const plans = [
  {
    name: 'BASIC',
    buttonText: 'Get Basic',
    features: {
      versionHistory: '30days',
      sendInvoices: false,
      crossPlatform: true,
      scanReceipts: true,
      storage: '50gb',
    },
  },
  {
    name: 'GROWTH',
    buttonText: 'Get Growth',
    isHighlighted: true,
    features: {
      versionHistory: true,
      sendInvoices: true,
      crossPlatform: true,
      scanReceipts: true,
      storage: '100gb',
    },
  },
  {
    name: 'PREMIUM',
    buttonText: 'Get Premium',
    features: {
      versionHistory: true,
      sendInvoices: true,
      crossPlatform: true,
      scanReceipts: true,
      storage: 'Unlimited',
    },
  },
];

const ComparePlans = () => {
  return (
    <section className={styles.comparePlans}>
      <h2>
        <span>Compare</span> our plans
      </h2>
      <p>Comparing our pricing plans side-by-side so you can choose the best one for yourself.</p>

      <div className={styles.table}>
        <div className={`${styles.row} ${styles.header}`}>
          <div className={styles.cell}>Features and Services</div>
          {plans.map((plan, i) => (
            <div key={i} className={styles.cell}>
              <strong>{plan.name}</strong>
              <button className={plan.isHighlighted ? styles.activeBtn : ''}>{plan.buttonText}</button>
            </div>
          ))}
        </div>

        <div className={styles.row}>
          <div className={styles.cell}>Version history</div>
          {plans.map((plan, i) => (
            <div key={i} className={styles.cell}>
              {typeof plan.features.versionHistory === 'string'
                ? plan.features.versionHistory
                : <Checkmark />}
            </div>
          ))}
        </div>

        {[
          { label: 'Send invoices and quotes', key: 'sendInvoices' },
          { label: 'Cross platform', key: 'crossPlatform' },
          { label: 'Scan receipts and bills', key: 'scanReceipts' },
        ].map((feature, idx) => (
          <div className={styles.row} key={idx}>
            <div className={styles.cell}>{feature.label}</div>
            {plans.map((plan, i) => (
              <div key={i} className={styles.cell}>
                {plan.features[feature.key] ? <Checkmark /> : ''}
              </div>
            ))}
          </div>
        ))}

        <div className={styles.row}>
          <div className={styles.cell}>Storage</div>
          {plans.map((plan, i) => (
            <div key={i} className={styles.cell}>{plan.features.storage}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Checkmark = () => (
  <span className={styles.checkmark}>✔</span>
);

export default ComparePlans;
