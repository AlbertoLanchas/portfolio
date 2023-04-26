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
              I'm a <b>Frontend</b> developer with a strong interest in{"  "}
              <b>blockchain technology</b> and its potential for transforming
              businesses and industries. My background in{"  "}
              <b>Food Science and Technology</b>, combined with my experience in
              software development, gives me a unique perspective on how these
              two fields can intersect and create innovative solutions.
            </p>
            <p className="Skills-text">
              As a self-taught programmer with over <b>2 years of experience</b>
              , I have completed several freelance projects that showcase my
              skills in Frontend development, as well as my growing expertise in
              Full Stack development. I am a highly motivated individual who is
              always looking to learn and expand my skill set, and I'm excited
              to bring my enthusiasm and expertise to any team I join.
            </p>
            <p className="Skills-text">
              I'm excited to connect with like-minded professionals and
              contribute to the continued growth and innovation of the crypto
              space. Whether you're looking for a Frontend developer, a
              blockchain enthusiast, I'm confident that I can offer a valuable
              perspective and make a positive impact on your team.
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
