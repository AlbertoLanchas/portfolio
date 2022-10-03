import React, { useState, useEffect } from "react";
import { objetives } from "../../data";
import { AppWrap, MotionWrap } from "../../wrapper";
import Slider from "./Slider";
import "./Goals.scss";

const Goal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [goals, setGoals] = useState([]);
  const [brands, setBrands] = useState([]);
  const images = [
    objetives[0].url,
    objetives[1].url,
    objetives[2].url,
    objetives[3].url,
  ];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setGoals(objetives);
    setBrands(objetives);
  }, []);

  return (
    <>
      <h2 className="head-text">
        New languages <span>to learn</span> in the future
      </h2>
      <div className="app__goal-item app__flex">
        <Slider images={images} autoPlay={false} showButtons={true} />
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Goal, "app__goal"), "goals", "app__whitebg");
