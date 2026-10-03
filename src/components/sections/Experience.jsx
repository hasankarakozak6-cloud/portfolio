import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className={`${styles.experienceSection} reveal`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>DENEYİM</h2>
          <div className={styles.sectionLine}></div>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDate}>
              <span className={styles.dateBadge}>Devam Ediyor</span>
            </div>
            
            <div className={styles.timelineDot}></div>
            
            <div className={styles.timelineContent}>
              <a 
                href="https://ilimera.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.companyName}
                aria-label="İlimera Teknoloji web sitesini yeni sekmede aç"
              >
                İlimera Teknoloji <span className={styles.arrowIcon}>&#8599;</span>
              </a>
              <div className={styles.roleName}>Stajyer</div>
              
              <div className={styles.companyFields}>
                Ar-Ge &bull; Elektronik &bull; Yazılım &bull; IoT &bull; Otomasyon
              </div>
              
              <p className={styles.description}>
                İlimera Teknoloji bünyesinde devam eden staj sürecimde profesyonel bir Ar-Ge ve teknoloji geliştirme ortamını deneyimliyorum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
