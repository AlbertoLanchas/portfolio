import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { objetives } from "../../data";
import { AppWrap, MotionWrap } from "../../wrapper";
import Slider from "./Slider";
import "./Goals.scss";

const Goal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [goals, setGoals] = useState([]);
  const [brands, setBrands] = useState([]);
  const images = [objetives[0].url, objetives[1].url, objetives[2].url];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setGoals(objetives);
    setBrands(objetives);
    console.log(objetives[0].url);
  }, []);

  return (
    <>
      <p>Technologies I would like to learn</p>
      <div className="app__goal-item app__flex">
        <Slider images={images} autoPlay={false} showButtons={true} />
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Goal, "app__goal"), "goals", "app__whitebg");
