import React from "react";
// import { useJobSwire } from "../../context/JobSwireContext";
// import SingleHiring from "../SingleHiring";
import "./Hiring.css";
import img_hiring_1 from "../../images/svg/HiringE.83d6e6e4.svg";
import img_hiring_2 from "../../images/svg/HiringK.bc63dbc9.svg";

const Hiring = () => {
  // const { itemsHiring } = useJobSwire();

  return (
    <div>
      <h1>#Hiring</h1>
      <p>CV göndererek ekibimize katılabilirsin!</p>
      {/* İPTAL START */}
      {/* <div className="container-hiring">
        {itemsHiring.map((itemsHiringData, index) => (
          <SingleHiring key={index} itemsHiringData={itemsHiringData} />
        ))}
      </div> */}
      {/* İPTAL END */}
      <div className="container-hiring">
        <div className="card-hiring">
          <img src={img_hiring_1} alt="card-img" />
          <div className="card-hiring-text">
            <h3 className="card-hiring-name">Back End Developer</h3>
            <div className="card-hiring-title">
              <span>
                <i className="fa-solid fa-location-crosshairs"></i>
                <span>Gönüllü</span>
              </span>
              <span>
                <i className="fa-solid fa-location-crosshairs"></i>
                <span>Remote</span>
              </span>
              <span>
                <i className="fa-solid fa-location-crosshairs"></i>
                <span>1 Yıl Deneyim</span>
              </span>
            </div>
            <div className="card-hiring-desc">
              <span>Node Js</span>
              <span>Express Js</span>
              <span>Rest API</span>
              <span>Mango DB</span>
            </div>
          </div>
          <button type="button" className="card-hiring-btn">
            Başvur!
          </button>
        </div>
        <div className="card-hiring">
          <img src={img_hiring_1} alt="card-img" />
          <div className="card-hiring-text">
            <h3 className="card-hiring-name">Front End Developer</h3>
            <div className="card-hiring-title">
              <span>
                <i className="fa-solid fa-location-crosshairs"></i>
                <span>Gönüllü</span>
              </span>
              <span>
                <i className="fa-solid fa-location-crosshairs"></i>
                <span>Remote</span>
              </span>
              <span>
                <i className="fa-solid fa-location-crosshairs"></i>
                <span>1 Yıl Deneyim</span>
              </span>
            </div>
            <div className="card-hiring-desc">
              <span>React Js</span>
              <span>Html Html5</span>
              <span>CSS SCSS</span>
              <span>Rest API</span>
            </div>
          </div>
          <button type="button" className="card-hiring-btn">
            Başvur!
          </button>
        </div>
        <div className="card-hiring">
          <img src={img_hiring_2} alt="card-img" />
          <div className="card-hiring-text">
            <h3 className="card-hiring-name">Sosyal Medya Stajyeri</h3>
            <div className="card-hiring-title">
              <span>
                <i className="fa-solid fa-location-crosshairs social"></i>
                <span>Gönüllü</span>
              </span>
              <span>
                <i className="fa-solid fa-location-crosshairs social"></i>
                <span>Remote</span>
              </span>
              <span>
                <i className="fa-solid fa-location-crosshairs social"></i>
                <span>1 Yıl Deneyim</span>
              </span>
            </div>
            <div className="card-hiring-desc">
              <span className="social">Adobe Ps</span>
              <span className="social">Adobe Ai</span>
              <span className="social">Google Ads</span>
              <span className="social">Facebook BM</span>
            </div>
          </div>
          <button type="button" className="card-hiring-btn">
            Başvur!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
