import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { filterProps, motion } from "framer-motion";
import { images } from "../../constants";

import "./NavBar.scss";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(true);

  const controlNavBar = () => {
    window.scrollY > 950 ? setShow(false) : setShow(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, []);
  return (
    <nav className={show ? "app__navbar" : "app__navbar active"}>
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "skills", "work", "goals", "contact"].map((item) => (
          <li className="app__flex li-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "skills", "work", "goals", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
