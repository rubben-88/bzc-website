import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return ( 
        <div className="navbar-wrapper">
            <nav className="navbar">
                <div className="head">
                    <img className="logo" src="images/logo.jpg" alt="BZC logo" />
                    <div className="text">
                        <h1 className='name'>Bornemse Zwemclub</h1>
                        <h5 className='slogan'>Een recreatieve zwemclub voor kinderen vanaf 6 jaar én volwassenen!</h5>
                    </div>
                </div>
                <div className="links">
                    <Link className="first" to="/">Home</Link>
                    <Link to="/groepen">Groepen</Link>
                    <Link to="/lesuren">Lesuren</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/fotos">Foto's</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;