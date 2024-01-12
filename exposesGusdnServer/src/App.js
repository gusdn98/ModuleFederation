import "./App.css";
import React from "react";
import Counter from "./Counter";
import Timer from "./Timer";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Timer" element={<Timer />} />
          <Route path="/Counter" element={<Counter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
