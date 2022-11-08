import React, { useState } from "react";
import Modal from "../Modal";
import "./MentorCard.css";

const MentorCard = ({ item }) => {
  const [readMore, setReadMore] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="card">
        <img src={item.image} alt="card-img" />
        <div className="card-text">
          <h5 className="card-name">{item.name}</h5>
          <h6 className="card-title">{item.title}</h6>
          <p>
            {readMore ? item.desc : `${item.desc.substring(0, 55)}...`}
            <button
              type="button"
              className="card-btn"
              onClick={() => setOpenModal(true)}
            >
              Devamını gör
            </button>
          </p>
        </div>
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <img src={item.image} alt="m-images" />
        <div className="modal-text">
          <h5 className="m-name">{item.name}</h5>
          <h6 className="m-title">{item.title}</h6>
          <p className="m-desc">{item.desc}</p>
        </div>
      </Modal>
    </div>
  );
};

export default MentorCard;
