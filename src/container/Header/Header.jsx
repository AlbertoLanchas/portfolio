import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";

import { images } from "../../constants";
import "./Header.scss";
import { BsDownload } from "react-icons/bs";
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
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Alberto</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Frontend Developer</p>
        </div>
      </div>
      <a
        className="app__cv app__flex"
        href="../../assets/cv.pdf"
        target="_blank"
        download
      >
        <BsDownload />
        <p className="cv__text">Download my CV</p>
      </a>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.javascript, images.react, images.sass].map((circle, index) => (
        <motion.div
          className="overlay_item"
          transition={{ duration: 1.5 }}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
