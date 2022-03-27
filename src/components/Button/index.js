import React from 'react';
import styles from './style.module.css';

const Button = ({ children, click }) => {
  return (
    <button onClick={click} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
