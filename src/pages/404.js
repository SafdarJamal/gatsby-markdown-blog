import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <Layout>
      <SEO title="404" />
      <h1>Page not found</h1>
      <p>Oops! The page you are looking for has been removed or relocated.</p>
      <p>
        <Link to="/">Go Back</Link>
      </p>
    </Layout>
  );
};

export default NotFound;
