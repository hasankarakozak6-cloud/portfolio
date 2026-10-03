import React from 'react';
import styles from './Languages.module.css';

const Languages = () => {
  return (
    <section id="languages" className={styles.languagesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>DİLLER</h3>
        </div>

        <div className={styles.languagesGrid}>
          
          <div className={styles.langCard}>
            <div className={styles.indicator}></div>
            <span className={styles.langCode}>EN</span>
            <div className={styles.langName}>English</div>
            <div className={styles.langLevel}>B1</div>
          </div>

          <div className={styles.langCard}>
            <div className={styles.indicator}></div>
            <span className={styles.langCode}>DE</span>
            <div className={styles.langName}>Deutsch</div>
            <div className={styles.langLevel}>A2</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Languages;
