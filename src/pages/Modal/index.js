import React from "react";
import "./Modal.css";

const Modal = ({ openModal, onClose, item, children }) => {
  if (!openModal) {
    return null;
  }

  return (
    <div className="m-card">
      <div className="modal">
        <button type="button" className="m-btn" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
