import React from "react";
import { useJobSwire } from "../../context/JobSwireContext";
import MentorCard from "../MentorCard";
import "./Mentors.css"

const Mentors = () => {
  const { items } = useJobSwire();

  return (
    <>
    <h1>Mentorlarımız</h1>
     <div className="container-mentors">
      {items.map((item, key) => (
        <MentorCard key={key} item={item} />
      ))}
    </div>
    </>
   
  );
};

export default Mentors;
