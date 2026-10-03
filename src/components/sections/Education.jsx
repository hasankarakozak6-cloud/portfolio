import React from 'react';
import styles from './Education.module.css';

const Education = () => {
  return (
    <section id="education" className={styles.educationSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>EĞİTİM</h2>
          <div className={styles.sectionLine}></div>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDate}>
              <span className={styles.dateText}>2025 &mdash; Devam Ediyor</span>
            </div>
            
            <div className={styles.timelineDot}></div>
            
            <div className={styles.timelineContent}>
              <h3 className={styles.schoolName}>Isparta Uygulamalı Bilimler Üniversitesi (ISUBÜ)</h3>
              <div className={styles.programName}>Bilgisayar Programcılığı</div>
              <div className={styles.degreeType}>Önlisans Programı</div>
              
              <p className={styles.description}>
                Aktif Bilgisayar Programcılığı Öğrencisi
              </p>
              
              <div className={styles.focusArea}>
                <span className={styles.focusLabel}>Odak Alanları</span>
                <ul className={styles.focusList}>
                  <li className={styles.focusItem}>Gömülü Sistemler</li>
                  <li className={styles.focusItem}>Web Teknolojileri</li>
                  <li className={styles.focusItem}>Veritabanı Teknolojileri</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
