import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { useModals } from "../../hooks/useModals";
import WorkModal from "./WorkModal";
import "./WorkModal.scss";
import "./Work.scss";

//IMPORTS POST COPIA
import { projects } from "../../data";
import { objetives } from "../../data";
import { BsSearch } from "react-icons/bs";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [isOpenModal1, openModal1, closeModal1] = useModals(false);
  const [isOpenModal2, openModal2, closeModal2] = useModals(false);

  useEffect(() => {
    setWorks(projects);
    setFilterWork(projects);
  }, []);
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      <div className="app__work-portfolio">
        <motion.div
          className="app__work-item app__flex"
          key={projects[0].id}
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          onClick={openModal1}
        >
          <div className="app__work-img app__flex">
            <WorkModal isOpen={isOpenModal1} closeModal={closeModal1}>
              <section className="container__modal">
                <video
                  src={require(`../../assets/${projects[0].name}.mp4`)}
                  alt={projects[0].name}
                  className="video__modal"
                  loop
                  autoPlay
                />
                <article className="modal__article">
                  <h3>{projects[0].text}</h3>
                  <hr />
                  <p>{projects[0].description}</p>
                </article>
              </section>
            </WorkModal>
            <img
              src={require(`../../assets/${projects[0].name}.jpg`)}
              alt={projects[0].name}
              className="photo__front"
            />
          </div>
          <div className="app__work-content app__flex">
            <h4 className="bold-text">{projects[0].text} </h4>
            <br />
            <div className="app__icon">
              {projects[0].web !== "" ? (
                <>
                  <a
                    href={projects[0].web}
                    target="_blank"
                    rel="noreferrer"
                    className="app__icon"
                  >
                    <AiFillEye />
                  </a>
                </>
              ) : (
                <></>
              )}
              {projects[0].code !== "" ? (
                <>
                  <a
                    href={projects[0].code}
                    target="_blank"
                    rel="noreferrer"
                    className="app__icon"
                  >
                    <AiFillGithub />
                  </a>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="app__work-item app__flex"
          key={projects[0].id}
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          onClick={openModal2}
        >
          <div className="app__work-img app__flex">
            <WorkModal isOpen={isOpenModal2} closeModal={closeModal2}>
              <h3>{projects[1].text}</h3>
            </WorkModal>
            <img
              src={require(`../../assets/${projects[1].name}.jpg`)}
              alt={projects[1].name}
              className="photo__front"
            />
          </div>
          <div className="app__work-content app__flex">
            <h4 className="bold-text">{projects[1].text} </h4>
            <br />
            <div className="app__icon">
              {projects[1].web !== "" ? (
                <>
                  <a
                    href={projects[1].web}
                    target="_blank"
                    rel="noreferrer"
                    className="app__icon"
                  >
                    <AiFillEye />
                  </a>
                </>
              ) : (
                <></>
              )}
              {projects[1].code !== "" ? (
                <>
                  <a
                    href={projects[1].code}
                    target="_blank"
                    rel="noreferrer"
                    className="app__icon"
                  >
                    <AiFillGithub />
                  </a>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
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
