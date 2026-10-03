import React, { useState, useEffect, useRef } from 'react';
import styles from './DeveloperTerminal.module.css';

const DeveloperTerminal = () => {
  const [step, setStep] = useState(0);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const hasAnimated = useRef(false);

  const fullCommand1 = "whoami";
  const fullCommand2 = "role";
  const fullCommand3 = "interests";

  useEffect(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setText1(fullCommand1);
      setText2(fullCommand2);
      setText3(fullCommand3);
      setStep(6);
      return;
    }

    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Typing logic
    const typeSpeed = 50;
    
    const type1 = () => {
      let i = 0;
      const interval = setInterval(() => {
        setText1(fullCommand1.substring(0, i + 1));
        i++;
        if (i >= fullCommand1.length) {
          clearInterval(interval);
          setTimeout(() => setStep(1), 300);
          setTimeout(() => setStep(2), 700);
          setTimeout(type2, 1200);
        }
      }, typeSpeed);
    };

    const type2 = () => {
      let i = 0;
      const interval = setInterval(() => {
        setText2(fullCommand2.substring(0, i + 1));
        i++;
        if (i >= fullCommand2.length) {
          clearInterval(interval);
          setTimeout(() => setStep(3), 300);
          setTimeout(() => setStep(4), 700);
          setTimeout(type3, 1200);
        }
      }, typeSpeed);
    };

    const type3 = () => {
      let i = 0;
      const interval = setInterval(() => {
        setText3(fullCommand3.substring(0, i + 1));
        i++;
        if (i >= fullCommand3.length) {
          clearInterval(interval);
          setTimeout(() => setStep(5), 300);
          setTimeout(() => setStep(6), 800);
        }
      }, typeSpeed);
    };

    // Start sequence
    setTimeout(type1, 1200); // Wait for entrance animation

  }, []);

  return (
    <div className={styles.terminalWrapper}>
      <div className={styles.terminalHeader}>
        <div className={`${styles.dot} ${styles.dotRed}`}></div>
        <div className={`${styles.dot} ${styles.dotYellow}`}></div>
        <div className={`${styles.dot} ${styles.dotGreen}`}></div>
      </div>
      <div className={styles.terminalBody}>
        
        {/* Command 1 */}
        <div className={styles.commandRow}>
          <div>
            <span className={styles.prompt}>&gt;</span>
            <span className={styles.command}>{text1}</span>
            {step === 0 && <span className={styles.cursor}></span>}
          </div>
          {step >= 1 && <div className={styles.output}>Hasan Hüseyin Karakozak</div>}
        </div>

        {/* Command 2 */}
        {step >= 2 && (
          <div className={styles.commandRow}>
            <div>
              <span className={styles.prompt}>&gt;</span>
              <span className={styles.command}>{text2}</span>
              {step === 2 && <span className={styles.cursor}></span>}
            </div>
            {step >= 3 && <div className={styles.output}>Computer Programmer</div>}
          </div>
        )}

        {/* Command 3 */}
        {step >= 4 && (
          <div className={styles.commandRow}>
            <div>
              <span className={styles.prompt}>&gt;</span>
              <span className={styles.command}>{text3}</span>
              {step === 4 && <span className={styles.cursor}></span>}
            </div>
            {step >= 5 && (
              <div className={styles.output}>
                <div className={styles.outputList}>
                  <span>Web Development</span>
                  <span>Backend</span>
                  <span>Embedded Systems</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Final blinking cursor */}
        {step >= 6 && (
          <div className={styles.commandRow}>
            <div>
              <span className={styles.prompt}>&gt;</span>
              <span className={styles.cursor}></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeveloperTerminal;
