import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { useModals } from "../../hooks/useModals";
import WorkModal from "./WorkModal";
import "./WorkModal.scss";
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
  const [isOpenModal0, openModal0, closeModal0] = useModals(false);
  const [isOpenModal1, openModal1, closeModal1] = useModals(false);
  const [isOpenModal2, openModal2, closeModal2] = useModals(false);
  const [isOpenModal3, openModal3, closeModal3] = useModals(false);
  const [isOpenModal4, openModal4, closeModal4] = useModals(false);
  const [isOpenModal5, openModal5, closeModal5] = useModals(false);

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
          onClick={openModal0}
        >
          <div className="Work-img">
            <WorkModal isOpen={isOpenModal0} closeModal={closeModal0}>
              <section className="Modal-section">
                <video
                  src={require(`../../assets/${projects[0].name}.mp4`)}
                  alt={projects[0].name}
                  className="Modal-section--video"
                  loop
                  autoPlay
                />
                <article className="Modal-section--article">
                  <h3>{projects[0].text}</h3>
                  <hr />
                  <p>{projects[0].description}</p>
                  <ul>
                    {projects[0].details.map((detail) => (
                      <li>{detail}</li>
                    ))}
                  </ul>
                </article>
              </section>
              <section className="Modal-logos">
                <article>
                  {projects[0].logo.map((detail) => (
                    <div className="Skills-item" key={detail}>
                      <div className="app__flex">
                        <img
                          src={require(`../../assets/${detail}.png`)}
                          alt={detail}
                        />
                      </div>
                      <p className="p-text">{detail}</p>
                    </div>
                  ))}
                </article>
                <div className="Modal-buttons">
                  {projects[0].web !== "" ? (
                    <>
                      <a
                        href={projects[0].web}
                        target="_blank"
                        rel="noreferrer"
                        className="Modal-button project"
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
                  {projects[0].code !== "" ? (
                    <>
                      <a
                        href={projects[0].code}
                        target="_blank"
                        rel="noreferrer"
                        className="Modal-button code"
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
              </section>
            </WorkModal>
            <img
              src={require(`../../assets/${projects[0].name}.webp`)}
              alt={projects[0].name}
              className="Work-img--front"
            />
          </div>
          <div className="Work-content">
            <h4 className="bold-text">{projects[0].text} </h4>
            <Search />
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
