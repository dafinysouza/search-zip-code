import React from 'react';
import styles from './style.module.css';

import Text from '../Text';
import Container from '../Container';

const Header = ({ text }) => {
  return (
    <div className={styles.banner}>
      <Container>
        <Text tag="h1">{text}</Text>
      </Container>
    </div>
  );
};

export default Header;
