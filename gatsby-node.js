const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/blogPost.js');
  const res = await graphql(
    `
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: `/blog${edge.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
};
