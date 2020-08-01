import React from 'react'
import LOGO from '../../img/logo.png';

const Header = () => {
    return (
        <header className="center">
            <img src={LOGO} className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
        </header>
    )
}

export default Header
