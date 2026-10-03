import React from 'react';
import styles from './RobotDiagram.module.css';

const RobotDiagram = () => {
  return (
    <div className={styles.diagramContainer}>
      <div className={styles.node}>IR SENSORS</div>
      <div className={styles.arrow}></div>
      <div className={styles.node}>ARDUINO</div>
      <div className={styles.arrow}></div>
      <div className={styles.node}>PID CONTROL</div>
      <div className={styles.arrow}></div>
      <div className={styles.node}>L298N</div>
      <div className={styles.arrow}></div>
      <div className={styles.node}>MOTORS</div>
    </div>
  );
};

export default RobotDiagram;
