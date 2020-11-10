import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const SEO = ({ title: customTitle, description: customDescription }) => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      defaultTitle={title}
      title={customTitle}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: 'description',
          content: customDescription || description,
        },
      ]}
    />
  );
};

export default SEO;
