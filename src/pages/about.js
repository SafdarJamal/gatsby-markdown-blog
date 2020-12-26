import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About</h1>
      <p>
        I'm currently working on passion projects, and I'm open to new
        opportunities.
      </p>
      <p>
        <Link to="/contact/">Want to work with me? Reach out.</Link>
      </p>
    </Layout>
  );
};

export default About;
