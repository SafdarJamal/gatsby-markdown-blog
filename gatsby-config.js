require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    author: 'Safdar Jamal',
    title: 'Full-Stack Bootcamp;',
    description:
      'A minimal blogging site built with Gatsby using Markdown and hosted on Netlify.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
};
