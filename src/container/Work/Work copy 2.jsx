import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { useModals } from "../../hooks/useModals";
import WorkModal from "./WorkModal";
import "../../scss/WorkModal.scss";
import "../../scss/Work.scss";

//IMPORTS POST COPIA
import { projects } from "../../data";
import Github from "../../icons/Github";
import Eye from "../../icons/Eye";
import Search from "../../icons/Search";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  const [isOpen, setIsOpenn] = useState(false);
  const openModal = () => setIsOpenn(true);
  const closeModal = () => setIsOpenn(false);

  useEffect(() => {
    setWorks(projects);
    setFilterWork(projects);
  }, []);
  return (
    <>
      <h2 className="head-text"> Portfolio Section</h2>
      <div className="Work">
        <motion.div
          className="Work-item"
          key={projects[0].id}
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          onClick={() => openModal}
        >
          {projects.map(({ id, name, tags, text, description, web, code }) => (
            <div className="Work-img" key={id}>
              <div className="app__work-img app__flex">
                <img src={require(`../../assets/${name}.webp`)} alt={name} />
              </div>
              <div className="app__work-content app__flex">
                <h4 className="bold-text">{text} </h4>
                <div className="Modal-buttons">
                  {web !== "" ? (
                    <>
                      <a
                        href={web}
                        target="_blank"
                        rel="noreferrer"
                        className="Modal-button Project"
                      >
                        <span className="Modal-button--text">VIEW PROJECT</span>
                        <span className="Modal-button--icon">
                          <Eye />
                        </span>
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                  {code !== "" ? (
                    <>
                      <a
                        href={code}
                        target="_blank"
                        rel="noreferrer"
                        className="Modal-button Code"
                      >
                        <span className="Modal-button--text">VIEW CODE</span>
                        <span className="Modal-button--icon">
                          <Github />
                        </span>
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
