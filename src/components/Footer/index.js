import React from 'react';
import styles from './style.module.css';

import Container from '../Container';

const Footer = () => {
  return (
    <div>
      <div className={styles.banner}></div>
      <footer className={styles.footer}>
        <Container>2022 © Desenvolvido por Dafiny Souza e Gabriel Brasil</Container>
      </footer>
    </div>
  );
};

export default Footer;
