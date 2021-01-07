import React from "react";
import "./App.css";

const Home = () => {
  return <p>Home</p>;
};

const About = () => {
  return <p>About</p>;
};

const App = () => {
  return (
    <div className="App">
      <p>React-tutorial</p>
      <p>How we can layout structure</p>
      <Home />
      <About />
    </div>
  );
};

export default App;
