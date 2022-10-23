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
                  loading="lazy"
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
                  {projects[0].code !== "" ? (
                    <>
                      <a
                        href={projects[0].code}
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
        <motion.div
          className="Work-item"
          key={projects[1].id}
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          onClick={openModal1}
        >
          <div className="Work-img">
            <WorkModal isOpen={isOpenModal1} closeModal={closeModal1}>
              <section className="Modal-section">
                <video
                  src={require(`../../assets/${projects[1].name}.mp4`)}
                  alt={projects[1].name}
                  className="Modal-section--video"
                  loading="lazy"
                  loop
                  autoPlay
                />
                <article className="Modal-section--article">
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
              <section className="Modal-logos">
                <article>
                  {projects[1].logo.map((detail) => (
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
                  {projects[1].web !== "" ? (
                    <>
                      <a
                        href={projects[1].web}
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
                  {projects[1].code !== "" ? (
                    <>
                      <a
                        href={projects[1].code}
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
              </section>
            </WorkModal>
            <img
              src={require(`../../assets/${projects[1].name}.webp`)}
              alt={projects[1].name}
              className="Work-img--front"
            />
          </div>
          <div className="Work-content">
            <h4 className="bold-text">{projects[1].text} </h4>
            <Search />
          </div>
        </motion.div>
        <motion.div
          className="Work-item"
          key={projects[2].id}
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          onClick={openModal2}
        >
          <div className="Work-img">
            <WorkModal isOpen={isOpenModal2} closeModal={closeModal2}>
              <section className="Modal-section">
                <video
                  src={require(`../../assets/${projects[2].name}.mp4`)}
                  alt={projects[2].name}
                  className="Modal-section--video"
                  loading="lazy"
                  loop
                  autoPlay
                />
                <article className="Modal-section--article">
                  <h3>{projects[2].text}</h3>
                  <hr />
                  <p>{projects[2].description}</p>
                  <ul>
                    {projects[2].details.map((detail) => (
                      <li>{detail}</li>
                    ))}
                  </ul>
                </article>
              </section>
              <section className="Modal-logos">
                <article>
                  {projects[2].logo.map((detail) => (
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
                  {projects[2].web !== "" ? (
                    <>
                      <a
                        href={projects[2].web}
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
                  {projects[2].code !== "" ? (
                    <>
                      <a
                        href={projects[2].code}
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
              </section>
            </WorkModal>
            <img
              src={require(`../../assets/${projects[2].name}.webp`)}
              alt={projects[2].name}
              className="Work-img--front"
            />
          </div>
          <div className="Work-content">
            <h4 className="bold-text">{projects[2].text} </h4>
            <Search />
          </div>
        </motion.div>
        <motion.div
          className="Work-item"
          key={projects[3].id}
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          onClick={openModal3}
        >
          <div className="Work-img">
            <WorkModal isOpen={isOpenModal3} closeModal={closeModal3}>
              <section className="Modal-section">
                <video
                  src={require(`../../assets/${projects[3].name}.mp4`)}
                  alt={projects[3].name}
                  className="Modal-section--video"
                  loading="lazy"
                  loop
                  autoPlay
                />
                <article className="Modal-section--article">
                  <h3>{projects[3].text}</h3>
                  <hr />
                  <p>{projects[3].description}</p>
                  <ul>
                    {projects[3].details.map((detail) => (
                      <li>{detail}</li>
                    ))}
                  </ul>
                </article>
              </section>
              <section className="Modal-logos">
                <article>
                  {projects[3].logo.map((detail) => (
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
                  {projects[3].web !== "" ? (
                    <>
                      <a
                        href={projects[3].web}
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
                  {projects[3].code !== "" ? (
                    <>
                      <a
                        href={projects[3].code}
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
              </section>
            </WorkModal>
            <img
              src={require(`../../assets/${projects[3].name}.webp`)}
              alt={projects[3].name}
              className="Work-img--front"
            />
          </div>
          <div className="Work-content">
            <h4 className="bold-text">{projects[3].text} </h4>
            <Search />
          </div>
        </motion.div>
        <motion.div
          className="Work-item"
          key={projects[4].id}
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          onClick={openModal4}
        >
          <div className="Work-img">
            <WorkModal isOpen={isOpenModal4} closeModal={closeModal4}>
              <section className="Modal-section">
                <img
                  src={require(`../../assets/${projects[4].name}.webp`)}
                  alt={projects[4].name}
                  className="Modal-section--video"
                />
                <article className="Modal-section--article">
                  <h3>{projects[4].text}</h3>
                  <hr />
                  <p>{projects[4].description}</p>
                  <ul>
                    {projects[4].details.map((detail) => (
                      <li>{detail}</li>
                    ))}
                  </ul>
                </article>
              </section>
              <section className="Modal-logos">
                <article>
                  {projects[4].logo.map((detail) => (
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
                  {projects[4].web !== "" ? (
                    <>
                      <a
                        href={projects[4].web}
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
                  {projects[4].code !== "" ? (
                    <>
                      <a
                        href={projects[4].code}
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
              </section>
            </WorkModal>
            <img
              src={require(`../../assets/${projects[4].name}.webp`)}
              alt={projects[4].name}
              className="Work-img--front"
            />
          </div>
          <div className="Work-content">
            <h4 className="bold-text">{projects[4].text} </h4>
            <Search />
          </div>
        </motion.div>
        <motion.div
          className="Work-item"
          key={projects[5].id}
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          onClick={openModal5}
        >
          <div className="Work-img">
            <WorkModal isOpen={isOpenModal5} closeModal={closeModal5}>
              <section className="Modal-section">
                <img
                  src={require(`../../assets/${projects[5].photo}.webp`)}
                  alt={projects[5].name}
                  className="Modal-section--video"
                />
                <article className="Modal-section--article">
                  <h3>{projects[5].text}</h3>
                  <hr />
                  <p>{projects[5].description}</p>
                  <ul>
                    {projects[5].details.map((detail) => (
                      <li>{detail}</li>
                    ))}
                  </ul>
                </article>
              </section>
              <section className="Modal-logos">
                <article>
                  {projects[5].logo.map((detail) => (
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
                  {projects[5].web !== "" ? (
                    <>
                      <a
                        href={projects[5].web}
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
                  {projects[5].code !== "" ? (
                    <>
                      <a
                        href={projects[5].code}
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
              </section>
            </WorkModal>
            <img
              src={require(`../../assets/${projects[5].name}.webp`)}
              alt={projects[5].name}
              className="Work-img--front"
            />
          </div>
          <div className="Work-content">
            <h4 className="bold-text">{projects[5].text} </h4>
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
