import React from "react";
import { Header, Skills, Work } from "./container";
import { NavBar } from "./components";
import "./scss/App.scss";

const App = () => {
  return (
    <div className="app">
      <NavBar></NavBar>
      <Header></Header>
      <Skills></Skills>
      <Work></Work>
    </div>
  );
};

export default App;
