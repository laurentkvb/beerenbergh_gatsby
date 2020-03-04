const cssnano = require("css-mqpacker");
const autoprefixer = require("autoprefixer");
const mqPacker = require("css-mqpacker");

module.exports = {
  siteMetadata: {
    title: "Beerenbergh Gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "o8dkh7aieolb",
        accessToken: "LzrO5YoO3lV9TxxE6IJ5vv2f85zlWFQJN8KpwKvXSp8",
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [
          autoprefixer(),
          cssnano({
            preset: [
              "default",
              {
                autoprefixer: true,
                discardUnused: true,
                mergeIdents: true,
                zindex: true
              }
            ]
          }),
          mqPacker({
            sort: true
          })
        ]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-transformer-sharp",
    "gatsby-plugin-remove-serviceworker",
    "gatsby-plugin-favicon",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-styled-components",
  ],
};
