import React from 'react';
import styles from './style.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; 2020{' '}
        <a
          href="https://safdarjamal.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Safdar Jamal
        </a>
      </p>
    </footer>
  );
};

export default Footer;
