import React from "react";
import Button from "./Button";
import "./GetStarted.css";

function GetStarted() {
  return (
    <div className="getstarted-container">
      <div className="getstarted-left">
        <div className="getstarted-heading">
          <h1>Get Started with Snupy.Me</h1>
        </div>
        <div className="getstarted-description">
          <p>
            Loved by thousands of artists, writers, musicians, podcasters,
            youtubers, gamers, devlopers, hobbyists, brands...
          </p>
        </div>
      </div>
      <div className="getstarted-right">
        <div className="button">
          <Button text="Sign Up Free" />
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
