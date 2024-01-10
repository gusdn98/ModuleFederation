import React from "react";
const Button = React.lazy(() => import("MicroFrontend/Button"));

export default function App() {
  return (
    <div>
      ShellApplication
      <Button buttonName={"여기를 클릭하세요"} />
    </div>
  );
}
