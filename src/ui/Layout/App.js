import React from "react";
import About from "../customPages/About/About";
import Home from "../customPages/Home/Home";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <p>React-tutorial</p>
      <Home />
      <About />
    </div>
  );
};

export default App;
