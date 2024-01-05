import React from "react";
import '../stylesheets/Header.css';
import fundaLogo from "../img/funda-logo-2.png";

function Header( {menu1, menu2, menu3, menu4, menu5, menu6} ){
    return(
        <div className="header-container">
            <img className="header-image"
                src={fundaLogo}
                alt="Logo Header"
            />
            <div className="menus">
                <div className="menu-item">{menu1}</div>
                <div className="menu-item">{menu2}</div>
                <div className="menu-item">{menu3}</div>
                <div className="menu-item">{menu4}</div>
                <div className="menu-item">{menu5}</div>
                <div className="menu-item">{menu6}</div>
            </div>
        </div>
    );
}

export default Header;