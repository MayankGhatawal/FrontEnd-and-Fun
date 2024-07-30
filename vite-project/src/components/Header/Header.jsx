import React from 'react';
import './Header.css';
import logo from '../../image/mc.png'

function Header() {
    return(
        <nav>
            <img src={logo} alt="logo" />
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Header;