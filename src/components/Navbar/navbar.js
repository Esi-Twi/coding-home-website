import React from "react";
import {Link} from 'react-scroll'
import darkMode from '../../assets/dark-mode.png'
import './navbar.css'

function Navbar() {
    return(
        <nav className="navbar">
            <h1>Coding Home</h1>
            <div className="navbar--list">
                <Link className="navbar-item">Home</Link>
                <Link className="navbar-item">About</Link>
                <Link className="navbar-item">Skills</Link>
                <Link className="navbar-item">Services</Link>
                <Link className="navbar-item">Portfolio</Link>
                <Link className="navbar-item">Contact</Link>
                <button>
                    <img src={darkMode}/>
                </button>
            </div>
        </nav>
    )
}

export default Navbar