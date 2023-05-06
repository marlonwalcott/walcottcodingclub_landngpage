// Header.js
import React from "react";
import { WEBSITENAME } from "../../Global/Constants";

const Header = ({ language }) => {
   return (
    <div>
      <h1>{WEBSITENAME[language]}</h1>
    </div>
  );
};

export default Header;
