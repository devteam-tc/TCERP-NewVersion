'use client';
import styles from './StepWise.module.scss';
import Image from 'next/image';

const steps = [
  {
    title: '1.Choose Your Plan',
    description:
      "Pick the pricing plan that best fits your business needs—whether you're a startup, SME, or enterprise. Each plan includes core ERP features with scalable options as you grow.",
    img: '/images/icons/icon-acquis.svg',
  },
  {
    title: '2.Setup & Customization',
    description:
      'Our experts help you configure the ERP system to suit your workflows. From user setup to module customization, we ensure a smooth implementation tailored to your business processes.',
      img: '/images/icons/icon-active.svg',
  },
  {
    title: '3.Go Live & Scale',
    description:
      'Launch your ERP system and start managing operations from a single platform. Add users, integrate tools, and expand modules anytime as your business evolves.',
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
          Getting started with TCERP is simple, seamless, and scalable
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
