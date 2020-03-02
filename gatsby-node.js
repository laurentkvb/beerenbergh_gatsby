/* eslint-disable */

const path = require("path");

exports.onCreateWebpackConfig = function ({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@models": path.resolve(__dirname, "src/models"),
        "@images": path.resolve(__dirname, "src/images")
      }
    }
  });
};
