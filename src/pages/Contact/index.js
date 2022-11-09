import React, { useState } from "react";
import "./Contact.css";
import contact_img from "../../images/svg/contact-img.e6f4167f.svg";

const Contact = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    subject: "",
    textarea: "",
  });

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
    alert(JSON.stringify(form))
    console.log(JSON.stringify(form));
  };

  return (
    <div>
      <h1>İletişim</h1>
      <p className="c-title">
        Aklına takılan tüm sorularda bize ulaşabilirsin!
      </p>
      <div className="container-form">
        <img src={contact_img} alt="form" />
        <form onSubmit={onSubmitForm}>
          <input
            value={form.username}
            onChange={handleChange}
            name="username"
            className="form-input"
            type="text"
            placeholder="Adınız Soyadınız"
          />
          <input
            value={form.email}
            onChange={handleChange}
            name="email"
            className="form-input"
            type="text"
            placeholder="E-mail Adresiniz "
          />
          <input
            value={form.subject}
            onChange={handleChange}
            name="subject"
            className="form-input"
            type="text"
            placeholder="Konu"
          />
          <textarea
            value={form.textarea}
            onChange={handleChange}
            name="textarea"
            className="form-textarea"
            id="textarea-form"
            cols="30"
            rows="10"
            placeholder="Mesajınız"
          ></textarea>
          <button
            type="submit"
            className="form-btn"
            disabled={
              !form.username || !form.email || !form.subject || !form.textarea
            }
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
