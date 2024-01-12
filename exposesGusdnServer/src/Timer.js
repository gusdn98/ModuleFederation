import React, { useState, useEffect } from "react";
import "./Styles/Home.css";

function Timer() {
  const [count, setCount] = useState(0);
  const rests = count % 4;

  const color = ["blue", "red", "gold", "black"];

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <div className="home">
      <h1 style={{ color: color[rests] }}> 멍떄리기 전용 페이지</h1>;
    </div>
  );
}

export default Timer;
