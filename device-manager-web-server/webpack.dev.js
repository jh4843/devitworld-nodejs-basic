// webpack.dev.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    port: 8080,
    proxy: [
      {
        context: ['/'],
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    ],
  },
});