'use client';
import styles from './StepWise.module.scss';
import Image from 'next/image';

const steps = [
  {
    title: '1. Acquisition',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.',
    img: '/images/icons/icon-acquis.svg',
  },
  {
    title: '2. Activation',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.',
      img: '/images/icons/icon-active.svg',
  },
  {
    title: '3. Retention',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.',
      img: '/images/icons/icon-retent.svg',
  },
];

export default function StepWise() {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h4 className={styles.textheading}>
            How It <br /> Works
          </h4>
          <p >
            Ac sapien purus tristique neque nibh vitae faucibus non phasellus vulputate nulla in eget amet, risus
          </p>
        </div>
        <div className={styles.right}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.stepCard}>
              <div className={styles.iconWrapper}>
                <Image src={step.img} alt={step.title} width={150} height={150} />
              </div>
              <h3 className={styles.excerpt}>{step.title}</h3>
              <p>{step.description}</p>
              <div className={styles.underline}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
