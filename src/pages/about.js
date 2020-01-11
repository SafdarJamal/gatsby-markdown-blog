import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </Layout>
  );
};

export default About;
