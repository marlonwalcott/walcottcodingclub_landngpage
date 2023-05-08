// Menu.js
import React, { Component } from "react";
import "./Header.css";
import "./HeaderMobile.css";

class Menu extends Component {
  render() {
    return (
   <div className="menu">
        <i class="fa-solid fa-bars"></i> <span class="mobilecallhide">Menu</span>
 </div>
    );
  }
}

export default Menu;
