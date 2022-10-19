import React from "react";
import "./Navbar.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <h2>JobSwire App çok yakında sizlerle, beklemede kalın!</h2>
        <div className="footer-text">
          <span>Copyright © 2021 JobSwire All Rights Reserved</span>
          <span>Gizlilik Politikası ve Aydınlatma Metni </span>
          <span>Çerez Politikası</span>
        </div>
        <div className="footer-icons">
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
