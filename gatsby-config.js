module.exports = {
  siteMetadata: {
    title: `이용준 - 이력서`,
    description: `이력서 및 경력을 기술해 놓은 문서입니다.`,
    author: `@gatsbyjs`,
    siteUrl: `https://northfacegawd.github.io/`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Roboto`,
            file: `https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: '`https://northfacegawd.github.io/`',
        stripQueryString: true,
      },
    },
    'gatsby-plugin-sitemap',
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `contents`,
    //     path: `${__dirname}/contents`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: <https://gatsby.dev/offline>
    // `gatsby-plugin-offline`,
  ],
};
