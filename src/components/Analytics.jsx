import React from "react";
import "./Analytics.css";
import Button from "./Button";

function Analytics() {
  return (
    <div className="analytics-container">
      <div className="analytics-left">
        <img
          src="https://images.pexels.com/photos/7567528/pexels-photo-7567528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
      <div className="analytics-right">
        <div className="analytics-header">
          <span>Get The Right Insight From Your Audience</span>
          <h1>Get detailed social analytics</h1>
        </div>
        <div className="analytics-description">
          <p>
            See all the clicks and views that go to your account, how many sales
            you get and get more relevant content analytics
          </p>
        </div>
        <Button text="Sign Up Free" />
      </div>
    </div>
  );
}

export default Analytics;
