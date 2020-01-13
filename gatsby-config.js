module.exports = {
  siteMetadata: {
    title: ``,
    description: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/teams/*`, `/matches/*`, `/players/*`] }
    }
  ]
}
