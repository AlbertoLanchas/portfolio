import React from "react";
import "./WorkModal.css";

const WorkModal = ({ children, isOpen, closeModal }) => {
  const handleModalClick = (e) => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default WorkModal;
