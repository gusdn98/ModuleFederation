const HtmlwebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

//// html 파일 생성후 번들된 JS 를 자동으로 추가하는 설정
const htmlPlugin = new HtmlwebpackPlugin({
  template: "./public/index.html", //웹팩이 사용할 HTML 템플릿 파일의 경로를 설정
  filename: "./index.html", //생성될 HTML 파일의 이름을 설정
});

module.exports = {
  //webpack 기본설정
  mode: "development", //개발모드 production - 배포모드 none - development 모드와 비슷, 설정을 안하면 자동으로 production
  devServer: {
    static: path.join(__dirname, "dist"), //정적 파일의 위치 설정
    port: 3000,
    historyApiFallback: {
      index: "/public/index.html", //404 발생시 리다이렉트위치 설정, 기본값 false historyApiFallback:true로 사용가능
    },
  },
  module: {
    //모듈 정의
    rules: [
      {
        test: /\.js$/, //어떤파일에 규칙을 적용할 것인지 .css, .html, .png 가능
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", //사용할 로더
        },
      },
    ],
  },
  plugins: [
    htmlPlugin,
    //module federation 설정
    new ModuleFederationPlugin({
      name: "ShellApplication", //호스트의 이름
      filename: "remoteEntry.js",
      remotes: {
        MicroFrontend: "MicroFrontend@http://localhost:3001/remoteEntry.js", //불러올 원격 모듈 주소
      },
    }),
  ],
};
