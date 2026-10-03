import React from 'react';
import styles from './Hero.module.css';
import DeveloperTerminal from '../ui/DeveloperTerminal';

const Hero = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.textContent}>
          <span className={`${styles.greeting} ${styles.animateIn}`}>Merhaba, ben</span>
          <h1 className={`${styles.name} ${styles.animateIn}`}>
            <span>HASAN HÜSEYİN</span> <span>KARAKOZAK</span>
          </h1>
          
          <h2 className={`${styles.role} ${styles.animateIn}`}>Bilgisayar Programcısı</h2>
          <h3 className={`${styles.subRole} ${styles.animateIn}`}>Web Development &bull; Backend &bull; Embedded Systems</h3>
          
          <p className={`${styles.description} ${styles.animateIn}`}>
            Yazılım geliştirme, robotik sistemler ve teknolojik çözümler üretmeye odaklanıyorum.
          </p>
          
          <div className={`${styles.buttonGroup} ${styles.animateIn}`}>
            <a href="#projects" className={styles.primaryBtn} aria-label="Projelerimi Gör">
              Projelerimi Gör <span className={styles.btnArrow}>&rarr;</span>
            </a>
            <a href="/cv" className={styles.secondaryBtn} aria-label="CV'yi İncele">
              CV'yi İncele
            </a>
          </div>
        </div>

        <div className={`${styles.visualContent} ${styles.animateIn}`}>
          <DeveloperTerminal />
        </div>
      </div>
    </section>
  );
};

export default Hero;
