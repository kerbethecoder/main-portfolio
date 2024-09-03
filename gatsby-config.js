/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Kerby Cantos`,
    description: `A clean and user-friendly portfolio website, offering a glimpse into my skills and achievements.`,
    author: `@kerbethecoder`,
    siteUrl: `https://kerbethecoder.com/`,
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
