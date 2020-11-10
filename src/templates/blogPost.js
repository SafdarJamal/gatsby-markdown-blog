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

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>Published on {data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </Layout>
  );
};

export default BlogPost;
