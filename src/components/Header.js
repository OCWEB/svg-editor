import React from 'react';
import './Header.scss';


const Header = (props) => {
  return (
    <header>
      <img src={props.logo} alt="logo" />
      <div className="menu">{props.children}</div>
    </header>
    )
}

export default Header;
