import styles from './contact.module.scss';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';


export default function ContactSection() {
  return (
    <section className={`${styles.contactSection} container`}>
      <div className="row align-items-center">
        <div className={`col-md-6 ml-50 mb-30 ${styles.formWrapper}`}>
          <h2 className={styles.title}>Send us a Message</h2>
          <p className={styles.subText}>
            Have questions or need assistance? We're here to help! Whether you're exploring
            solutions, looking for a consultation, or need.
          </p>

          <div className={styles.inputRow}>
            <input className={styles.input} type="text" placeholder="First Name" />
            <input className={styles.input} type="text" placeholder="Last Name" />
          </div>

          <div className={styles.inputRow}>
            <input className={styles.input} type="email" placeholder="Email" />
            <input className={styles.input} type="text" placeholder="Number" />
          </div>
          <div className={styles.inputRow}>
          <input className={styles.input} type="text" placeholder="Company Name" />
          </div>

          <input className={styles.textarea} placeholder="Message"></input>



       

          <button className={styles.button}>
            SEND NOW 
          </button>
        </div>

        <div className={`col-md-6 ${styles.infoWrapper}`}>
          <h4 className={styles.headingpara}>Contact us</h4>
          <h2 className={`${styles.upperheading} mt-3 mb-3`}>
            Let’s Connect Empower And Your Business
          </h2>

          <div className={styles.contactCard}>
          <div className={styles.iconCircle}><HiOutlinePhone className={styles.icon} /></div>
          <div>
              <span>Give us a Call</span>
              <strong>123-456-7890</strong>
            </div>
          </div>

          <div className={styles.contactCard}>
          <div className={styles.iconCircle}><HiOutlineMail className={styles.icon} /></div>
          <div>
              <span>Send me Mail</span>
              <strong>OTech It Service.com</strong>
            </div>
          </div>

          <div className={styles.contactCard}>
          <div className={styles.iconCircle}><HiOutlineLocationMarker className={styles.icon} /></div>
          <div>
              <span>Contact us</span>
              <strong>8708 Technology, USA</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
