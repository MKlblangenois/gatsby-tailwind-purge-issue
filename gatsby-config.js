module.exports = {
   siteMetadata: {
      title: "Gatsby with Tailwind purge issue",
   },
   plugins: [
      "gatsby-plugin-react-helmet",
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/images`,
         },
      },
      {
         resolve: `gatsby-transformer-sharp`,
      },
      `gatsby-plugin-postcss`,
   ],
};
