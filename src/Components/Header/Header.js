import React, { useState } from 'react';
import './Header.css';
function Header() {
    const [toggle, setToggle] = useState(false);
    return (
        <header className="header">
            <div className="header__logo">
                <span><i className="fa fa-angle-left"></i></span>
                    <div className="logo">Muhammad Huzaifa</div>
                <span>/<i className="fa fa-angle-right"></i></span>
            </div>

            <div className={!toggle ? "menu menu-btn menuHide" : "menu menu-btn close"} onClick={()=>{setToggle(!toggle)}}> 
                <div className="btn-line"></div> 
                <div className="btn-line"></div> 
                <div className="btn-line"></div> 
            </div>
            <div className={!toggle ? "header__nav navHide": "header__nav"}>
                <ul>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact Me</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
