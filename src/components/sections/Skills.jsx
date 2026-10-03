import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      id: "01",
      title: "PROGRAMLAMA",
      skills: ["C#", "SQL", "PHP", "HTML5", "JavaScript"]
    },
    {
      id: "02",
      title: "YAZILIM & TASARIM",
      skills: ["Visual Studio", "Adobe Photoshop", "SQL Server"]
    },
    {
      id: "03",
      title: "TEKNOLOJİLER",
      skills: [".NET Framework", "Node.js", "Arduino IDE"]
    },
    {
      id: "04",
      title: "DONANIM & ROBOTİK",
      skills: ["Arduino Uno/Nano", "Sensörler", "Motor Kontrolü"]
    }
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Teknik Yetenekler</h2>
          <div className={styles.sectionLine}></div>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category) => (
            <div key={category.id} className={styles.skillCategory}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryNumber}>{category.id} /</span>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <ul className={styles.skillsList}>
                {category.skills.map((skill, index) => (
                  <li key={index} className={styles.skillItem}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
