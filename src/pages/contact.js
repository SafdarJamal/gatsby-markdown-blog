import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{' '}
        <a href="https://twitter.com/_safdarjamal">@_safdarjamal</a> on Twitter.
      </p>
    </Layout>
  );
};

export default Contact;
