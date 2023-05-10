import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="menuContainer">
      <button onClick={toggleMenu}>
        {isOpen ? 'Menu' : 'Menu'}
      </button>
      
      <div className={`fullscreenMenu ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <>
            <button className="closeButton" onClick={toggleMenu}>X Close</button>
            <ul>
              <li>Menu Item 1</li>
              <li>Menu Item 2</li>
              <li>Menu Item 3</li>
              <li>Menu Item 4</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Menu;
