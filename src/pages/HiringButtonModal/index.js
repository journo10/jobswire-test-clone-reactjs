import React, { useState } from "react";
import "./HiringButtonModal.css";

const HiringButtonModal = ({ itemsHiringData, setOpenModal }) => {
  const [form, setForm] = useState({
    username: "",
    lastname: "",
    email: "",
    file: "",
  });

  //close
  const closeModal = () => {
    setOpenModal(false);
  };

  //onChange
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //onSubmit
  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(form));
  };

  return (
    <div>
      <h2>CV Gönder</h2>
      <p>{itemsHiringData.title}</p>
      <form onSubmit={onSubmitForm}>
        <div className="f-input">
          <label>İsminiz</label>
          <input
            value={form.username}
            onChange={handleChange}
            name="username"
            type="text"
          />
        </div>
        <div className="f-input">
          <label>Soyisminiz</label>
          <input
            value={form.lastname}
            onChange={handleChange}
            name="lastname"
            type="text"
          />
        </div>
        <div className="f-input">
          <label>E-mailiniz</label>
          <input
            value={form.email}
            onChange={handleChange}
            name="email"
            type="email"
          />
        </div>
        <div className="f-file">
          <label htmlFor="upload-input">Dosya Seç</label>
          <input
            value={form.file}
            onChange={handleChange}
            name="file"
            id="upload-input"
            className="f-file-input"
            type="file"
          />
        </div>
        <div className="form-button">
          <button
            disabled={
              !form.username || !form.lastname || !form.email || !form.file
            }
            className="f-btn"
            type="submit"
          >
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
