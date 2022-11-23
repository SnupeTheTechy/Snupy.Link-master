import React from "react";
import "./Footer.css";
import linko from "../images/linko.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-nav">
        <div className="logo">
          <img src={linko} alt="logo" />
          <span>Snupy.Me</span>
        </div>
        <div className="links top-links">
          <li className="link-items">Features</li>
          <li className="link-items">Pricing</li>
          <li className="link-items">Blog</li>
          <li className="link-items">Integration</li>
          <li className="link-items">Help</li>
        </div>
        <div className="social">
          <FacebookIcon className="social-icon" />
          <InstagramIcon className="social-icon" />
          <TwitterIcon className="social-icon" />
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span>© 2022, Snupy.Me</span>
        </div>
        <div className="links link-flex">
          <li className="link-items">Terms</li>
          <li className="link-items">Cookies</li>
          <li className="link-items">Privacy</li>
        </div>
      </div>
    </div>
  );
}

export default Footer;
