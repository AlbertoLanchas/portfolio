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

  const [isOpen, setIsOpen] = useState(false);
  const openModal = (id) => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(true);
  };

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
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          {projects.map(
            ({
              id,
              name,
              tags,
              text,
              description,
              web,
              code,
              details,
              logo,
            }) => (
              <div className="Work" key={id}>
                <motion.div
                  className="Work-item"
                  key={id}
                  animate={animateCard}
                  transition={{ duration: 0.5, delayChildren: 0.5 }}
                  onClick={() => openModal(id)}
                >
                  <div className="Work-img">
                    <WorkModal isOpen={isOpen} closeModal={closeModal}>
                      <section className="Modal-section">
                        <video
                          src={require(`../../assets/${name}.mp4`)}
                          alt={name}
                          className="Modal-section--video"
                          loading="lazy"
                          loop
                          autoPlay
                        />
                        <article className="Modal-section--article">
                          <h3>{text}</h3>
                          <hr />
                          <p>{description}</p>
                          <ul>
                            {details.map((detail) => (
                              <li>{detail}</li>
                            ))}
                          </ul>
                        </article>
                      </section>
                      <section className="Modal-logos">
                        <article>
                          {logo.map((detail) => (
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
                          {web !== "" ? (
                            <>
                              <a
                                href={web}
                                target="_blank"
                                rel="noreferrer"
                                className="Modal-button Project"
                              >
                                <span className="Modal-button--text">
                                  VIEW PROJECT
                                </span>
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
                                <span className="Modal-button--text">
                                  VIEW CODE
                                </span>
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
                      src={require(`../../assets/${name}.webp`)}
                      alt={name}
                      className="Work-img--front"
                    />
                  </div>
                  <div className="Work-content">
                    <h4 className="bold-text">{text} </h4>
                    <Search />
                  </div>
                </motion.div>
              </div>
            )
          )}
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
