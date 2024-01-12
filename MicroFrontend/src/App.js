import React from "react";
const Button = React.lazy(() => import("MicroFrontend/Button"));
//"webpack.config.js(가져올앱의 별칭)"/"expose한 모듈의 이름"
export default function App() {
  return (
    <div>
      ShellApplication
      <Button buttonName={"여기를 클릭하세요"} />
    </div>
  );
}
