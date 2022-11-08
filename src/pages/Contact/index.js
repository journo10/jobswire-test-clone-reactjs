import React from "react";
import "./Contact.css";
import contact_img from "../../images/svg/contact-img.e6f4167f.svg";

const Contact = () => {
  return (
    <div>
      <h1>İletişim</h1>
      <p>Aklına takılan tüm sorularda bize ulaşabilirsin!</p>
      <div className="container-form">
        <img src={contact_img} alt="form" />
        <form>
          <input
            className="form-input"
            type="text"
            placeholder="Adınız Soyadınız"
          />
          <input
            className="form-input"
            type="text"
            placeholder="E-mail Adresiniz "
          />
          <input className="form-input" type="text" placeholder="Konu" />
          <textarea
            className="form-textarea"
            name="textarea"
            id="textarea-form"
            cols="30"
            rows="10"
            placeholder="Mesajınız"
          ></textarea>
          <button type="submit" className="form-btn">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
