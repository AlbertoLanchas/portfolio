import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

//IMPORTS POST COPIA
import { projects } from "../../data";
import { BsSearch } from "react-icons/bs";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  {
    // projects.map((project) => console.log(project.tags));
  }
  useEffect(() => {
    setWorks(projects);
    setFilterWork(projects);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(works);
      } else {
        projects.map((project) =>
          setFilterWork(project.filter((work) => work.tags.includes(item)))
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["All", "React JS", "Javascript"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {/* {console.log(item, index)} */}
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {projects.map(({ id, name, tags, text, description }) => (
          <div className="app__work-item app__flex" key={id}>
            <div className="app__work-img app__flex">
              <img src={require(`../../assets/${name}.jpg`)} alt={name} />
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{text} </h4>
              <br />
              <BsSearch />
              <div className="app__work-tag app__flex">
                <p className="p-text">{tags}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
