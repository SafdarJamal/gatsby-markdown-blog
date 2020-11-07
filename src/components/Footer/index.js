import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './style.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer className={styles.footer}>
      <p>
        &copy; 2020{' '}
        <a
          href="https://safdarjamal.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.site.siteMetadata.author}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
