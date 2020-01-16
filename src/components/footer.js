import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './footer.module.scss';

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
        Created by{' '}
        <a href="https://github.com/safdarjamal">
          {data.site.siteMetadata.author}
        </a>{' '}
        © 2020
      </p>
    </footer>
  );
};

export default Footer;
