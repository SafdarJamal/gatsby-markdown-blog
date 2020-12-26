import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via email at{' '}
        <strong>safdarjamal.dev@gmail.com</strong> or on Twitter{' '}
        <a href="https://twitter.com/_safdarjamal" target="_blank">
          @_safdarjamal
        </a>
        .
      </p>
    </Layout>
  );
};

export default Contact;
