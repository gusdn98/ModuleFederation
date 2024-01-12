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
    port: 3000,
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
      name: "gusdn", //해당 앱의 이름 - 지금은 Host 이름
      filename: "remoteEntry.js", //다른앱에서 사용하기 위한 정보가 담긴 Manifest 파일의 이름을 지정 - defalt remoteEntry.js
      remotes: {
        gusdnServer: "gusdnServer@http://localhost:8080/remoteEntry.js",
        //프레임앱 내부에서 사용하는 별칭 : "불러올 앱의 이름(원격 모듈)@주소:port/Manifest파일"
      },
      shared: {
        react: {
          eager: true,
        },
      },
    }),
  ],
};
