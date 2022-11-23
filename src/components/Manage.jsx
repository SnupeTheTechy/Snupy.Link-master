import React from "react";
import "./Manage.css";
import Button from "./Button";

function Manage() {
  return (
    <div className="manage-container">
      <div className="manage-left">
        <div className="left-header">
          <span>Manage your links without hassle</span>
          <h1>Manage your links the way you love them.</h1>
        </div>
        <div className="left-description">
          <p>
            Organize all the links according to your needs, make your audience
            to find them easily. This is achieved with just a few clicks
          </p>
        </div>
        <Button text="Sign Up Free" />
      </div>
      <div className="manage-right">
        <img
          src="https://images.pexels.com/photos/3679490/pexels-photo-3679490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
    </div>
  );
}

export default Manage;
