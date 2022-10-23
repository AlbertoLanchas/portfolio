import React from "react";
import "../../scss/WorkModal.scss";

const WorkModal = ({ children, isOpen, closeModal }) => {
  const handleModalClick = (e) => e.stopPropagation();
  return (
    <article className={`Modal ${isOpen && "isOpen"}`} onClick={closeModal}>
      <div className="Modal-container" onClick={handleModalClick}>
        <button className="Modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default WorkModal;
