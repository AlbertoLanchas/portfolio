import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "../../scss/NavBar.scss";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="Navbar">
      <ul className="Navbar-links">
        {["home", "skills", "work"].map((item) => (
          <li className="app__flex li-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="Navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <div>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "skills", "work"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
