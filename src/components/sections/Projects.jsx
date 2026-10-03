import React from 'react';
import styles from './Projects.module.css';
import RobotDiagram from '../ui/RobotDiagram';
import DashboardMockup from '../ui/DashboardMockup';

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>PROJELER</h2>
          <p className={styles.sectionDesc}>Fikirden çalışan sisteme dönüştürdüğüm projeler.</p>
        </div>

        <div className={styles.projectsWrapper}>
          
          {/* Project 01 */}
          <div className={styles.projectShowcase}>
            <div className={styles.projectInfo}>
              <div className={styles.projectNumber}>01 / EMBEDDED SYSTEMS</div>
              <h3 className={styles.projectTitle}>8 Sensörlü Çizgi İzleyen Robot</h3>
              <h4 className={styles.projectSubtitle}>Arduino Tabanlı Gömülü Sistem & Yarışma Platformu</h4>
              
              <div className={styles.projectDesc}>
                <p>
                  Arduino Uno/Nano mikrodenetleyicileri ve 8'li kızılötesi sensör dizisi kullanılarak hassas çizgi algılama sistemi geliştirildi.
                </p>
                <br />
                <p>
                  L298N motor sürücüsü ile motor yön ve hız kontrolü sağlandı. PID kontrol algoritması ile anlık hat takibi ve virajlarda daha kararlı hareket hedeflendi.
                </p>
              </div>

              <div className={styles.techStack}>
                <span className={styles.techTag}>Arduino</span>
                <span className={styles.techTag}>PID</span>
                <span className={styles.techTag}>IR Sensors</span>
                <span className={styles.techTag}>L298N</span>
                <span className={styles.techTag}>Embedded Systems</span>
              </div>

              <div className={styles.projectLinks}>
                <a className={styles.primaryLink} style={{cursor: 'pointer'}}>
                  Projeyi İncele <span className={styles.arrowIcon}>&rarr;</span>
                </a>
                <span className={styles.githubLink} style={{cursor: 'not-allowed', opacity: 0.5}} title="Repository Private/Not Available">
                  GitHub
                </span>
              </div>
            </div>
            
            <div className={styles.projectVisual}>
              <RobotDiagram />
            </div>
          </div>

          {/* Project 02 */}
          <div className={`${styles.projectShowcase} ${styles.reversed}`}>
            <div className={styles.projectInfo}>
              <div className={styles.projectNumber}>02 / WEB APPLICATION</div>
              <h3 className={styles.projectTitle}>Yakıt Takip ve Analiz Uygulaması</h3>
              <h4 className={styles.projectSubtitle}>Node.js & JavaScript Tabanlı Veri Yönetim Paneli</h4>
              
              <div className={styles.projectDesc}>
                <p>
                  Operasyonel yakıt tüketimlerini hesaplayan ve raporlayan bir web uygulaması geliştirildi.
                </p>
                <br />
                <p>
                  Yerel veri yönetimi altyapısı ile kullanıcı girdilerinin işlenmesi sağlandı. Sade ve işlevsel web arayüzü ile maliyet ve tüketim takibi gerçekleştirildi.
                </p>
              </div>

              <div className={styles.techStack}>
                <span className={styles.techTag}>Node.js</span>
                <span className={styles.techTag}>JavaScript</span>
                <span className={styles.techTag}>Data Storage</span>
                <span className={styles.techTag}>Web Application</span>
              </div>

              <div className={styles.projectLinks}>
                <a className={styles.primaryLink} style={{cursor: 'pointer'}}>
                  Projeyi İncele <span className={styles.arrowIcon}>&rarr;</span>
                </a>
                <span className={styles.githubLink} style={{cursor: 'not-allowed', opacity: 0.5}} title="Repository Private/Not Available">
                  GitHub
                </span>
              </div>
            </div>
            
            <div className={styles.projectVisual}>
              <DashboardMockup />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
