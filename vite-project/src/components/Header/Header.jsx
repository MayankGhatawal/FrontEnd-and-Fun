import React from 'react';
import './Header.css';
import logo from '../../image/mc.png'
import tire from '../../image/menu.png'
function Header() {
    return(
        <nav>
            <img className='voti' src={logo} alt="logo" />
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            <a href="./head.html" target='_rel'><img className='imgage' src={tire} alt="menu"/></a>
            </ul>
        </nav>
    );
}

export default Header;