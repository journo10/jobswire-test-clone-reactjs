import React from "react";
import "./Modal.css";

const Modal = ({ openModal, setOpenModal, children }) => {
  if (!openModal) {
    return null;
  }

  const onClose = () => {
    setOpenModal(false);
  };

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
