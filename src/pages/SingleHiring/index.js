import React, { useState } from "react";
import HiringButtonModal from "../HiringButtonModal";
import Modal from "../Modal";
import "./SingleHring.css";

const SingleHiring = ({ itemsHiringData }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="card-hiring">
      <img src={itemsHiringData.image} alt="card-img" />
      <div className="card-hiring-text">
        <h3 className="card-hiring-name">{itemsHiringData.title}</h3>
        <div className="card-hiring-title">
          {itemsHiringData.text.map((t) => (
            <span key={t.id}>
              <i className="fa-solid fa-location-crosshairs"></i>
              {t.name}
            </span>
          ))}
        </div>
        <div className="card-hiring-desc">
          {itemsHiringData.desc.map((d) => (
            <span key={d.id}>{d.name}</span>
          ))}
        </div>
      </div>
      <button
        onClick={() => setOpenModal(true)}
        type="button"
        className="card-hiring-btn"
      >
        Başvur!
      </button>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <HiringButtonModal />
      </Modal>
    </div>
  );
};

export default SingleHiring;
