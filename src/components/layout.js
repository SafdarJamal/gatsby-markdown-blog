import React from 'react';

import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
