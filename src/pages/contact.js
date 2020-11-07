import React from 'react';

import Layout from '../components/Layout';
import Head from '../components/Head';

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{' '}
        <a href="https://twitter.com/_safdarjamal">@_safdarjamal</a> on Twitter.
      </p>
    </Layout>
  );
};

export default Contact;
