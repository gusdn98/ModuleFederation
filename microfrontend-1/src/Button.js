import React from "react";

export default function Button({ buttonName }) {
  return (
    <button onClick={console.log("microfrontend의 버튼이에요")}>
      {buttonName}
    </button>
  );
}
