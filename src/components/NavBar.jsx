import React, { useState } from "react";
import "./Navbar.css";
import linko from "../images/linko.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [showHam, setShowHam] = useState(true);

  const handleHam = () => {
    setOpen(!open);
    setShowHam(!showHam);
  };

  const logo = (
    <Link className="link">
      <div className="logo">
        <img src={linko} alt="logo" />
        <span>Snupy.Me</span>
      </div>
    </Link>
  );
  const regularLinks = (
    <div className="links">
      <li className="link-items">Features</li>
      <li className="link-items">Pricing</li>
      <li className="link-items">Blog</li>
      <li className="link-items">Integration</li>
      <li className="link-items">Help</li>
    </div>
  );

  const hamburgerLinks = (
    <div className="hamburger-links">
      <li className="hamlink-items">Features</li>
      <hr className="linediff" />
      <li className="hamlink-items">Pricing</li>
      <hr className="linediff" />
      <li className="hamlink-items">Blog</li>
      <hr className="linediff" />
      <li className="hamlink-items">Integration</li>
      <hr className="linediff" />
      <li className="hamlink-items">Help</li>
      <hr className="linediff" />
      <li className="hamlink-items">Login</li>
      <hr className="linediff" />
      <li className="hamlink-items">Sign Up</li>
    </div>
  );

  return (
    <div className="navbar-container">
      <div className="left-nav">
        {logo}
        {open ? hamburgerLinks : regularLinks}
        <MenuIcon className="hamburger-icon" onClick={handleHam} />
      </div>

      <div className="registration">
        <li className="link-items log-in">Log In</li>
        <Button text="Sign Up Free" />
      </div>
    </div>
  );
}

export default NavBar;
