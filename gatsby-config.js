module.exports = {
  siteMetadata: {
    title: `Resume - 이용준`,
    description: `안녕하세요.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    {
      resoleve: 'gatsby-plugin-typescript',
      options: { isTsx: true, allExtensions: true },
    },
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
