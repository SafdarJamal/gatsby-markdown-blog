import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const SEO = ({ title: customTitle, description: customDescription }) => {
  const {
    site: { siteMetadata },
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
      defaultTitle={siteMetadata.title}
      title={customTitle}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: customDescription || siteMetadata.description,
        },
      ]}
    />
  );
};

export default SEO;
