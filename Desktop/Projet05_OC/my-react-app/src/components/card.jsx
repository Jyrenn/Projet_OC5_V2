import React from "react";
import "../scss/card.scss";

const Card = ({ title, image }) => {
  return (
    <div className="card">
      <img src={image} className="card-image" alt="photo de la location" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

export default Card;
