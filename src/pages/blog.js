import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import styles from './blog.module.scss';

const Blog = () => {
  const data = useStaticQuery(graphql`
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
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={styles.posts}>
        {data.allMarkdownRemark.edges.map((edge, i) => {
          return (
            <li className={styles.post} key={i}>
              <Link to={`/blog${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default Blog;
