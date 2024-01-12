import React from "react";
import "./Styles/Home.css";
import BackImage from "./assets/smartcity1.png";
function Address(props) {
  return <h2>This is {props.name.addr}!</h2>;
}

function Home() {
  const buliding = { name: "City", addr: "Kr" };
  return (
    <div className="home" style={{ backgroundImage: `url(${BackImage})` }}>
      <div className="headerContainer" style={{ fontSize: `15px` }}>
        <h1 style={{ color: "Black" }}>SmartCity</h1>
        <Address name={buliding} />
      </div>
    </div>
  );
}
export default Home;
