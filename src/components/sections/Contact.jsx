import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.contactGrid}>
          
          <div className={styles.contactIntro}>
            <h2 className={styles.title}>
              BİRLİKTE BİR ŞEYLER<br />
              ÜRETELİM.
            </h2>
            <p className={styles.description}>
              Projeler, yazılım geliştirme ve teknoloji üzerine iletişime geçmekten memnuniyet duyarım.
            </p>
          </div>

          <div className={styles.contactInfoList}>
            <a 
              href="mailto:hasankarakozak6@gmail.com" 
              className={`${styles.infoItem} ${styles.linkItem}`}
              aria-label="Bana e-posta gönderin"
            >
              <span className={styles.label}>E-POSTA</span>
              <div className={styles.valueWrapper}>
                <span className={styles.value}>hasankarakozak6@gmail.com</span>
                <span className={styles.arrow}>&#8599;</span>
              </div>
            </a>

            <a 
              href="https://github.com/hasankarakozak6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.infoItem} ${styles.linkItem}`}
              aria-label="GitHub profilimi inceleyin"
            >
              <span className={styles.label}>GITHUB</span>
              <div className={styles.valueWrapper}>
                <span className={styles.value}>github.com/hasankarakozak6</span>
                <span className={styles.arrow}>&#8599;</span>
              </div>
            </a>

            <div className={styles.infoItem}>
              <span className={styles.label}>KONUM</span>
              <div className={styles.valueWrapper}>
                <span className={styles.value}>Isparta, Türkiye</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
