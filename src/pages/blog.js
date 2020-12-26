import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styles from './blog.module.scss';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Blog = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <ol className={styles.posts}>
        {edges.map((edge, i) => (
          <li className={styles.post} key={i}>
            <Link to={`/blog${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default Blog;
