import React from "react";
import { useNavigate } from "react-router-dom";
import Header_Img from "../../images/svg/header-img.2c22aba1.svg";
import svg_1 from "../../images/svg/cardImg1.f2939aa4.svg";
import svg_2 from "../../images/svg/cardImg2.456b17f6.svg";
import svg_3 from "../../images/svg/cardImg3.fc316525.svg";
import svg_4 from "../../images/svg/cardImg4.c84ed8ec.svg";
import svg_5 from "../../images/svg/cardImg5.41b24bd2.svg";
import svg_6 from "../../images/svg/logo.png";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate("/text-form");
  };

  return (
    <header>
      <div className="container">
        <div className="header-text">
          <h1>Kendini Keşfetme Yolculuğuna Hoş Geldin!</h1>
          <p>
            Hazırsan yepyeni bir İK deneyimine başlıyoruz. Kendini keşfedeceğin
            yolculuğun ilk adımına hoş geldin! JobSwire'da kendini tanıyacak,
            sana en uygun meslekleri keşfedecek ve mentorlarımızla görüşerek
            kariyer yolculuğuna hızlı bir giriş yapacaksın. Bu yolculuk
            sırasında bizlerle CV'ni paylaşarak kendine en uygun iş önerilerinin
            doğrudan mailine gelmesini sağlayabilirsin. Hadi hemen teste başla
            ve bu yolculuktaki yerini al!
          </p>
          <button
            type="button"
            className="header-btn"
            onClick={handleClickNavigate}
          >
            Teste Başla!
          </button>
        </div>
        <div className="header-img">
          <img src={Header_Img} alt="header-img" />
        </div>
      </div>

      <h1>Ne Sunuyoruz?</h1>
      <div className="wrapper">
        <div className="wrapper-text">
          <img src={svg_1} alt="" />
          <div className="wrapper-desc">
            <h4>Testi Çöz!</h4>
            <p>Karakter testini çözerek kendine en uygun mesleği keşfet</p>
          </div>
        </div>
        <div className="wrapper-text">
          <img src={svg_2} alt="" />
          <div className="wrapper-desc">
            <h4>Arkadaşlarınla Paylaş!</h4>
            <p>
              Sana özel olarak tanımlanan referans kodunu arkadaşlarınla paylaş!
            </p>
          </div>
        </div>
        <div className="wrapper-text">
          <img src={svg_3} alt="" />
          <div className="wrapper-desc">
            <h4>Sosyal Medyanın Gücü!</h4>
            <p>
              Test sonucunu bizi etiketleyerek Instagram storylerinde paylaş ya
              da filtrelerimizle video çekip paylaş!
            </p>
          </div>
        </div>
        <div className="wrapper-text">
          <img src={svg_4} alt="" />
          <div className="wrapper-desc">
            <h4>Mentorlarımızla Görüş!</h4>
            <p>
              Testi en fazla arkadaşlarıyla paylaşan kişilerden biri ol,
              mentorlarımızla görüşme fırsatı yakala!
            </p>
          </div>
        </div>
        <div className="wrapper-text">
          <img src={svg_5} alt="" />
          <div className="wrapper-desc">
            <h4>Kariyerine Giriş Yap!</h4>
            <p>
              Testin sonunda CV'ni bizimle paylaş, karakterine ve
              yetkinliklerine en uygun iş önerileri mailine gelsin!
            </p>
          </div>
        </div>
        <div className="wrapper-text">
          <img src={svg_6} alt="" />
          <div className="wrapper-desc">
            <h4>JobSwire'da Yerini Al!</h4>
            <p>
              Yeni nesil İK platformu JobSwire'ın beta sürümünü deneyen ilk
              kişilerden biri olma şansını yakala!
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
