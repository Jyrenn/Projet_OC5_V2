import React from "react";
import image from "../assets/Images/eric-muhr-P_XxsdVgtpQ-unsplash.png";
import "../scss/banner.scss";

function Banner() {
  return (
    <div className="banner">
      <img src={image} alt="photo paysage" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}
export default Banner;
