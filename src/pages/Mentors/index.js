import React from "react";
import { useJobSwire } from "../../context/JobSwireContext";
import MentorCard from "../MentorCard";
import "./Mentors.css"

const Mentors = () => {
  const { items } = useJobSwire();

  return (
    <div className="container-mentors">
      {items.map((item, key) => (
        <MentorCard key={key} item={item} />
      ))}
    </div>
  );
};

export default Mentors;
