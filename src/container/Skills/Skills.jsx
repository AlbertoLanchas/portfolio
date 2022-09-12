import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { tech } from "../../data";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import images from "../../constants/images";

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Tech Stack </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {tech.map(({ name, logo, id, text }) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={id}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: "rgba(255,255,255.0.4)" }}
              >
                <img src={require(`../../assets/${name}.png`)} alt={name} />
              </div>
              <p className="p-text">{text}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {/* {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
