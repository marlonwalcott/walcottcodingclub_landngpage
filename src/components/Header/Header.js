// Header.js
import React from "react";
import { MAINLOGOURL } from "../../Global/Constants";
import CallToAction from "./CallToAction";
import "./Header.css";
import "./HeaderMobile.css";

const Header = ({ language }) => {
   return (
<div className="innercontainer">
  <div className="header-container">
      <div className="menu">Menu</div>
      <div className="logo-container">
        <img className="sitelogo" src={MAINLOGOURL[language]} alt="Site Logo" />
      </div>
      <div className="cta-container">
        <CallToAction />
      </div>
    </div>
</div>
  );
};

export default Header;
