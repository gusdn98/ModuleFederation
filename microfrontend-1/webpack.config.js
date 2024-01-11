const HtmlwebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlwebpackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});

module.exports = {
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3001,
    historyApiFallback: {
      index: "/public/index.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "MicroFrontend", //원격모듈 이름
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button", //내보낼 모듈 설정
      },
    }),
  ],
};
