// Header.js
import React from "react";
import { GlobalWebsiteName } from "../../Global/Constants";
import { MAINLOGOURL } from "../../Global/Constants";

const Header = ({ language }) => {
   return (
    <div>
      <h1>{GlobalWebsiteName[language]}</h1>
      <img className="sitelogo" src={MAINLOGOURL[language]}/>
    </div>
  );
};

export default Header;
