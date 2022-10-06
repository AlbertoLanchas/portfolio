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
          <div className="app__skills-exp">
            <p className="text_skills">
              I finished my degree in Food Science Technology, although I've
              founded my passion in software engineering, especially as a{" "}
              <b>Frontend Developer</b>. I am a highly motivated developer
              seeking to launch a carrer building web applications and services.
            </p>
            <p className="text_skills">
              One of my hobbies is based on exploring the possibilities of{" "}
              <b>Blockchain technology</b> in the transformation of companies's
              processes, code and infrastructure, new models of digital
              identity, and the development of governance models for data.
            </p>
          </div>
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
