import React, { useState } from "react";
import "./Styles/Home.css";

function Counter() {
  const [number, setNumber] = useState(0);
  const [color, setFont] = useState([]);

  const change = ["blue", "red", "gold", "black"];

  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };
  const onChange = () => {
    const i = Math.floor(Math.random() * change.length);
    setFont(change[i]);
  };

  return (
    <div className="headerContainer button" style={{ fontSize: `30px` }}>
      <h1 className="home" style={{ color: color }}>
        {number}
      </h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={onChange}>무작위 색 변경</button>
    </div>
  );
}

export default Counter;
