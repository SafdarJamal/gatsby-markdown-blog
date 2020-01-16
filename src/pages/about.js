import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>I'm currently working on passion projects.</p>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </Layout>
  );
};

export default About;
