import React, { useEffect } from 'react';
import styles from './CVPage.module.css';
import { portfolioData } from '../data/portfolioData';

const CVPage = () => {
  const { personal, experience, education, projects, skills, languages } = portfolioData;

  // Change body background color to match app container when mounted
  useEffect(() => {
    document.body.style.overflow = 'auto'; // ensure scrolling works
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.cvWrapper}>
      
      {/* Screen-only Toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.toolbarContainer}>
          <a href="/" className={styles.backBtn}>
            &larr; Portfolio'ya Dön
          </a>
          <button onClick={handlePrint} className={styles.printBtn}>
            PDF Olarak Kaydet
          </button>
        </div>
      </div>

      {/* CV Document (A4 Printable Area) */}
      <div className={styles.cvDocument}>
        
        <header className={styles.cvHeader}>
          <h1 className={styles.name}>{personal.name}</h1>
          <div className={styles.role}>{personal.role}</div>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span>E-mail:</span>
              <a href={`mailto:${personal.email}`} className={styles.contactLink}>{personal.email}</a>
            </div>
            <div className={styles.contactItem}>
              <span>GitHub:</span>
              <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                {personal.github}
              </a>
            </div>
            <div className={styles.contactItem}>
              <span>Konum:</span>
              <span>{personal.location}</span>
            </div>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hakkımda</h2>
          <p className={styles.sectionText}>{personal.aboutCV}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Deneyim</h2>
          {experience.map((exp, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.itemHeader}>
                <h3 className={styles.itemTitle}>{exp.company}</h3>
                <span className={styles.itemDate}>{exp.date}</span>
              </div>
              <div className={styles.itemSubtitle}>{exp.role}</div>
              <p className={styles.itemContent}>{exp.description}</p>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Eğitim</h2>
          {education.map((edu, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.itemHeader}>
                <h3 className={styles.itemTitle}>{edu.school}</h3>
                <span className={styles.itemDate}>{edu.date}</span>
              </div>
              <div className={styles.itemSubtitle}>{edu.degree}</div>
              <div className={styles.itemContent}>
                {edu.status}
                <ul className={styles.list}>
                  {edu.focus.map((f, i) => (
                    <li key={i} className={styles.listItem}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projeler</h2>
          {projects.map((proj, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.itemHeader}>
                <h3 className={styles.itemTitle}>{proj.name}</h3>
              </div>
              <p className={styles.itemContent} style={{ marginTop: '0.4rem' }}>{proj.summary}</p>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Teknik Yetenekler</h2>
          <div className={styles.skillsGrid}>
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index}>
                <div className={styles.skillCategory}>{category}</div>
                <div className={styles.skillList}>{items.join(', ')}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Diller</h2>
          <div className={styles.languagesList}>
            {languages.map((lang, index) => (
              <div key={index} className={styles.langItem}>
                <span className={styles.langName}>{lang.name}</span>
                <span className={styles.langLevel}>{lang.level}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default CVPage;
