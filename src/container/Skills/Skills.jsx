import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { tech } from "../../data";
import { AppWrap, MotionWrap } from "../../wrapper";
import "../../scss/Skills.scss";

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Tech Stack </h2>
      <div className="Skills">
        <div className="Skills-exp">
          <div className="Skills-exp">
            <p className="Skills-text">
              I finished my degree in Food Science Technology, although I've
              founded my passion in software engineering, especially as a{" "}
              <b>Frontend Developer</b>. I am a highly motivated developer
              seeking to launch a carrer building web applications and services.
            </p>
            <p className="Skills-text">
              One of my hobbies is based on exploring the possibilities of{" "}
              <b>Blockchain technology</b> in the transformation of companies's
              processes, code and infrastructure, new models of digital
              identity, and the development of governance models for data.
            </p>
          </div>
        </div>
        <motion.div className="Skills-list">
          {tech.map(({ name, logo, id, text }) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="Skills-item"
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
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
