import React from 'react';
import styles from './style.module.css';

import Container from '../Container';
import Text from '../Text';

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
