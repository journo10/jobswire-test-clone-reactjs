import React from "react";
import "./Modal.css";

const Modal = ({ openModal, onClose, item}) => {
  if (!openModal) {
    return null;
  }

  return (
    <div className="m-card" >
      <div className="modal">
        <img src={item.image} alt="m-images" />
        <div className="modal-text">
          <h5 className="m-name">{item.name}</h5>
          <h6 className="m-title">{item.title}</h6>
          <p  className="m-desc">{item.desc}</p>
          <button type="button" className="m-btn" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
