import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "../../scss/Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="Header">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="Header-info"
    >
      <div className="Header-badge">
        <div className="Header-badge--cmp">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Alberto</h1>
          </div>
        </div>

        <div className="Header-tag">
          <p className="Header-tag--text p-text">Frontend Developer</p>
        </div>
      </div>

      <a
        className="Header-cv"
        href={images.cv}
        target="_blank"
        download="CV_ALBERTO-LANCHAS"
      >
        <p className="Header-cv--text">Download my CV</p>
      </a>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="Header-img"
    >
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="Header-img--circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="Header-circles"
    >
      {[images.javascript, images.react, images.sass].map((circle, index) => (
        <motion.div
          className="Header-img--item"
          transition={{ duration: 1.5 }}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
          }}
        >
          <div className="circle-cmp" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
