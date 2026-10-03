import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          
          <div className={styles.footerTop}>
            <div className={styles.brand}>
              <div className={styles.logo}>HK<span>.</span></div>
              <div className={styles.name}>Hasan Hüseyin Karakozak</div>
            </div>
            
            <button 
              className={styles.backToTopBtn} 
              onClick={handleBackToTop}
              aria-label="Sayfanın en üstüne dön"
            >
              &uarr; Başa Dön
            </button>
          </div>

          <div className={styles.footerBottom}>
            <div className={styles.copyright}>
              <span>&copy; 2026</span>
              <a 
                href="https://github.com/hasankarakozak6" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
                aria-label="GitHub profilimi yeni sekmede aç"
              >
                GitHub &uarr;
              </a>
            </div>
            <div className={styles.techStack}>
              React + Vite ile geliştirildi.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
