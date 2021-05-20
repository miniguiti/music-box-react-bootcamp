import React from 'react'
import logo from '../assets/images/logo.png'
import avatar from '../assets/images/avatar.png'

function NavBar() {
    return (
        <>
            <nav>
                <div className="container">
                    <img className="logo" src={logo} alt="Logo" />
                    <img src={avatar} alt="Avatar" className="avatar" />
                </div>
            </nav>
        </>
    );
}

export default NavBar;