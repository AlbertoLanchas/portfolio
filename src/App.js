import React from "react";
import { Footer, Header, Skills, Goals, Work, Slider } from "./container";
import { NavBar } from "./components";
import "./App.scss";
import Projects from "./container/Work/Projects";
import { objetives } from "./data";

const App = () => {
  return (
    <div className="app">
      <NavBar></NavBar>
      <Header></Header>
      <Skills></Skills>
      {/* <Work></Work> */}
      <Projects></Projects>
      <Goals></Goals>
      <Footer></Footer>
    </div>
  );
};

export default App;
