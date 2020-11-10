import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
      html
    }
  }
`;

const BlogPost = ({
  data: {
    markdownRemark: {
      frontmatter: { title, date },
      html,
    },
  },
}) => {
  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <p>Published on {date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  );
};

export default BlogPost;
