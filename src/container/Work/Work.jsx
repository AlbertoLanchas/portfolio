import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
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
              <section className="container__text-modal">
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
                  <ul>
                    {projects[0].details.map((detail) => (
                      <li>{detail}</li>
                    ))}
                  </ul>
                </article>
              </section>
              <section className="container__logo-modal">
                <article>
                  {projects[0].logo.map((detail) => (
                    <div className="app__skills-item app__flex" key={detail}>
                      <div className="app__flex">
                        <img
                          src={require(`../../assets/${detail}.png`)}
                          alt={detail}
                          className="modal__tech"
                        />
                      </div>
                      <p className="p-text">{detail}</p>
                    </div>
                  ))}
                </article>
                <div className="container-buttons">
                  {projects[0].web !== "" ? (
                    <>
                      <a
                        href={projects[0].code}
                        target="_blank"
                        rel="noreferrer"
                        className="app-icon project"
                      >
                        <span class="button__text">VIEW PROJECT</span>
                        <span class="button__icon">
                          <AiFillEye />
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
                        className="app-icon code"
                      >
                        <span class="button__text">VIEW CODE</span>
                        <span class="button__icon">
                          <AiFillGithub />
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
              src={require(`../../assets/${projects[0].name}.jpg`)}
              alt={projects[0].name}
              className="photo__front"
            />
          </div>
          <div className="app__work-content app__flex">
            <h4 className="bold-text">{projects[0].text} </h4>
            <br />
            <div className="app__icon">
              <FcSearch />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="app__work-item app__flex"
          key={projects[1].id}
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          onClick={openModal2}
        >
          <div className="app__work-img app__flex">
            <WorkModal isOpen={isOpenModal2} closeModal={closeModal2}>
              <section className="container__text-modal">
                <video
                  src={require(`../../assets/${projects[0].name}.mp4`)}
                  alt={projects[1].name}
                  className="video__modal"
                  loop
                  autoPlay
                />
                <article className="modal__article">
                  <h3>{projects[1].text}</h3>
                  <hr />
                  <p>{projects[1].description}</p>
                  <ul>
                    {projects[1].details.map((detail) => (
                      <li>{detail}</li>
                    ))}
                  </ul>
                </article>
              </section>
              <section className="container__logo-modal">
                <article>
                  {projects[1].logo.map((detail) => (
                    <div className="app__skills-item app__flex" key={detail}>
                      <div className="app__flex">
                        <img
                          src={require(`../../assets/${detail}.png`)}
                          alt={detail}
                          className="modal__tech"
                        />
                      </div>
                      <p className="p-text">{detail}</p>
                    </div>
                  ))}
                </article>
                <div className="container-buttons">
                  {projects[1].web !== "" ? (
                    <>
                      <a
                        href={projects[1].code}
                        target="_blank"
                        rel="noreferrer"
                        className="app-icon project"
                      >
                        <span class="button__text">VIEW PROJECT</span>
                        <span class="button__icon">
                          <AiFillEye />
                        </span>
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
                        className="app-icon code"
                      >
                        <span class="button__text">VIEW CODE</span>
                        <span class="button__icon">
                          <AiFillGithub />
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
              src={require(`../../assets/${projects[1].name}.jpg`)}
              alt={projects[1].name}
              className="photo__front"
            />
          </div>
          <div className="app__work-content app__flex">
            <h4 className="bold-text">{projects[1].text} </h4>
            <br />
            <div className="app__icon">
              <FcSearch />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="app__work-item app__flex"
          key={projects[2].id}
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          onClick={openModal1}
        >
          <div className="app__work-img app__flex">
            <WorkModal isOpen={isOpenModal1} closeModal={closeModal1}>
              <section className="container__text-modal">
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
                  <ul>
                    {projects[0].details.map((detail) => (
                      <li>{detail}</li>
                    ))}
                  </ul>
                </article>
              </section>
              <section className="container__logo-modal">
                <article>
                  {projects[0].logo.map((detail) => (
                    <div className="app__skills-item app__flex" key={detail}>
                      <div className="app__flex">
                        <img
                          src={require(`../../assets/${detail}.png`)}
                          alt={detail}
                          className="modal__tech"
                        />
                      </div>
                      <p className="p-text">{detail}</p>
                    </div>
                  ))}
                </article>
                <div className="container-buttons">
                  {projects[0].web !== "" ? (
                    <>
                      <a
                        href={projects[0].code}
                        target="_blank"
                        rel="noreferrer"
                        className="app-icon project"
                      >
                        <span class="button__text">VIEW PROJECT</span>
                        <span class="button__icon">
                          <AiFillEye />
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
                        className="app-icon code"
                      >
                        <span class="button__text">VIEW CODE</span>
                        <span class="button__icon">
                          <AiFillGithub />
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
              src={require(`../../assets/${projects[0].name}.jpg`)}
              alt={projects[0].name}
              className="photo__front"
            />
          </div>
          <div className="app__work-content app__flex">
            <h4 className="bold-text">{projects[0].text} </h4>
            <br />
            <div className="app__icon">
              <FcSearch />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="app__work-item app__flex"
          key={projects[0].id}
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          onClick={openModal1}
        >
          <div className="app__work-img app__flex">
            <WorkModal isOpen={isOpenModal1} closeModal={closeModal1}>
              <section className="container__text-modal">
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
                  <ul>
                    {projects[0].details.map((detail) => (
                      <li>{detail}</li>
                    ))}
                  </ul>
                </article>
              </section>
              <section className="container__logo-modal">
                <article>
                  {projects[0].logo.map((detail) => (
                    <div className="app__skills-item app__flex" key={detail}>
                      <div className="app__flex">
                        <img
                          src={require(`../../assets/${detail}.png`)}
                          alt={detail}
                          className="modal__tech"
                        />
                      </div>
                      <p className="p-text">{detail}</p>
                    </div>
                  ))}
                </article>
                <div className="container-buttons">
                  {projects[0].web !== "" ? (
                    <>
                      <a
                        href={projects[0].code}
                        target="_blank"
                        rel="noreferrer"
                        className="app-icon project"
                      >
                        <span class="button__text">VIEW PROJECT</span>
                        <span class="button__icon">
                          <AiFillEye />
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
                        className="app-icon code"
                      >
                        <span class="button__text">VIEW CODE</span>
                        <span class="button__icon">
                          <AiFillGithub />
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
              src={require(`../../assets/${projects[0].name}.jpg`)}
              alt={projects[0].name}
              className="photo__front"
            />
          </div>
          <div className="app__work-content app__flex">
            <h4 className="bold-text">{projects[0].text} </h4>
            <br />
            <div className="app__icon">
              <FcSearch />
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
