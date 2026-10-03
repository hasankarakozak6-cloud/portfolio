import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Hakkımda</h2>
          <div className={styles.sectionLine}></div>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutTextWrapper}>
            <p className={styles.leadText}>
              Yazılım geliştirme, robotik sistemler ve teknolojik çözümler üretmeye ilgi duyan, kendini sürekli geliştirmeyi hedefleyen bir bilgisayar programcılığı öğrencisiyim.
            </p>
            <p className={styles.subText}>
              Problemleri analiz etmek ve bu problemlere etkili, modern yazılım çözümleri üretmek en büyük motivasyonum. Hem yazılımın arka planındaki mantığı kurmak hem de donanımla yazılımın buluştuğu noktalarda projeler geliştirmek odak alanlarımı oluşturuyor.
            </p>
          </div>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <span className={styles.cardNumber}>01</span>
              <h3 className={styles.cardTitle}>Software Development</h3>
            </div>
            
            <div className={styles.infoCard}>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>Embedded Systems & Robotics</h3>
            </div>
            
            <div className={styles.infoCard}>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>Backend & Data Management</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
