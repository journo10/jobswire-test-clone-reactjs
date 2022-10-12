import React, { useState } from "react";
import "./MentorCard.css";

const MentorCard = ({ item }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="card">
      <img src={item.image} alt="card-img" />
      <div className="card-text">
        <h5 className="card-name">{item.name}</h5>
        <h6 className="card-title">{item.title}</h6>
        <p>
          {readMore ? item.desc : `${item.desc.substring(0, 55)}...`}
          <button className="card-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Modal gelecek" : "Devamını gör"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default MentorCard;
