module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `enuudjgqptyk`,
        accessToken: `f199cbb7753bf3c0798fd5d42fad3080f28a0be27d95121bb97925972ac8dcad`
      }
    },
    `gatsby-plugin-react-helmet`
  ]
}
