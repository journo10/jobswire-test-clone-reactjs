import React from "react";
import "./HiringButtonModal.css";

const HiringButtonModal = ({ itemsHiringData, setOpenModal }) => {
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <h2>CV Gönder</h2>
      <p>{itemsHiringData.title}</p>
      <form>
        <div className="f-input">
          <label>İsminiz</label>
          <input type="text" />
        </div>
        <div className="f-input">
          <label>Soyisminiz</label>
          <input type="text" />
        </div>
        <div className="f-input">
          <label>E-mailiniz</label>
          <input type="email" />
        </div>
        <div className="f-file">
          <label htmlFor="upload-input">Dosya Seç</label>
          <input id="upload-input" className="f-file-input" type="file" />
        </div>
        <div className="form-button">
          <button className="f-btn" type="submit">
            Gönder
          </button>
          <button className="f-btn" type="button" onClick={closeModal}>
            İptal
          </button>
        </div>
      </form>
    </div>
  );
};

export default HiringButtonModal;
