import React from 'react';
import styles from './DashboardMockup.module.css';

const DashboardMockup = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.header}>
        <div className={styles.title}>Fuel Analytics</div>
        <div className={styles.controls}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
      
      <div className={styles.body}>
        <div className={styles.statsRow}>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>TOTAL FUEL</div>
            <div className={styles.statValue}></div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>COST</div>
            <div className={styles.statValue}></div>
          </div>
        </div>
        
        <div className={styles.chartArea}>
          <div className={styles.bar} style={{ height: '40%' }}></div>
          <div className={styles.bar} style={{ height: '60%' }}></div>
          <div className={styles.bar} style={{ height: '35%' }}></div>
          <div className={styles.bar} style={{ height: '80%' }}></div>
          <div className={styles.bar} style={{ height: '50%' }}></div>
          <div className={styles.bar} style={{ height: '90%' }}></div>
        </div>
        
        <div className={styles.recordsArea}>
          <div className={styles.recordLabel}>Recent Records</div>
          <div className={styles.recordItem}>
            <div className={styles.recordIcon}></div>
            <div className={styles.recordLine} style={{ width: '80%' }}></div>
          </div>
          <div className={styles.recordItem}>
            <div className={styles.recordIcon}></div>
            <div className={styles.recordLine} style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
