import React from "react";
import "./FeatureCard.css";

function FeatureCard({ title, description, logo }) {
  return (
    <div className="featureCard-container">
      <div className="cardLogo">{logo}</div>
      <div className="cardHeading">{title}</div>
      <div className="cardDescription">{description}</div>
    </div>
  );
}

export default FeatureCard;
