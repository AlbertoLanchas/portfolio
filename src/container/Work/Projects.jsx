import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Projects.scss";

//IMPORTS POST COPIA
import { projects } from "../../data";

const Projects = () => {
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {projects.map(({ id, name, tags, text, description }) => (
          <div className="app__work-item app__flex" key={id}>
            <div className="app__work-img app__flex">
              <img src={require(`../../assets/${name}.jpg`)} alt={name} />
            </div>
            <div className="app__work-content app__flex">
              <a href={`project-${id}`} className="work-details">
                DETAILS
              </a>
              <article className="modal" id={`project-${id}`}>
                <div>Ey</div>
              </article>
              <h4 className="bold-text">{text} </h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {description}
              </p>
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
  MotionWrap(Projects, "app__works"),
  "work",
  "app__primarybg"
);
