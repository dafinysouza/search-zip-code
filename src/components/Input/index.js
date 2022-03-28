import { useState } from 'react';
import styles from './style.module.css';

const Input = ({ type, placeholder, ...props }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <div className={styles.wrapper}>
        <label className={styles.label}>
          {placeholder}
          <input
            className={styles.input}
            onChange={(event) => setInputValue(event.target.value)}
            type={type}
            placeholder={placeholder}
            value={inputValue}
            {...props}
          />
        </label>
      </div>
    </>
  );
};

export default Input;
