import React from "react";
import { GlobalWebsiteName} from "../../Global/Constants";
import { GlobalFooterMain} from "../../Global/Constants";


const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear}  {GlobalWebsiteName[language]}. {GlobalFooterMain[language]} </p>
    </footer>
  );
}

export default Footer;


