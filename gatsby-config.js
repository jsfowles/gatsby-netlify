module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `enuudjgqptyk`,
        accessToken: `23d0a47d8859e21c5c9978bf2953a079a75cb4c5b7cabdffeea48b09f12f5e0b`
      }
    },
    `gatsby-plugin-react-helmet`
  ]
}
