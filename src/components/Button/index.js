import React from 'react';
import styles from './style.module.css';

const Button = ({ children, click, color }) => {
  return (
    <button style={{ backgroundColor: color || '#4caf50' }} onClick={click} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
