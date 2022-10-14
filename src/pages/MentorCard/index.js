import React, { useState } from "react";
import Modal from "../Modal";
import "./MentorCard.css";

const MentorCard = ({ item }) => {
  const [readMore, setReadMore] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const onClose = () => {
    setOpenModal(false);
  };

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
      <Modal openModal={openModal} onClose={onClose} item={item} />
    </div>
  );
};

export default MentorCard;
