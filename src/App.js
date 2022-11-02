import React from "react";
import { Header, Skills, Work } from "./container";
import { NavBar } from "./components";
import "./scss/App.scss";
import WorkCopy from "./container/Work/Work copy";

const App = () => {
  return (
    <div className="app">
      <NavBar></NavBar>
      <Header></Header>
      <Skills></Skills>
      <Work></Work>
      {/* <WorkCopy /> */}
    </div>
  );
};

export default App;
