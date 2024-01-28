import React from 'react';
import { Link } from 'react-router-dom';
import portfolio_logo from '../../assets/images/portfolio_logo.jpeg';
import './../layout/layout.css'

export default function Layout(){
    return (
        <>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-cls">
            <img src={portfolio_logo} className="logo-cls"></img>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav nav-design">
                    <li className="nav-item">
                        <Link to="/" >Home</Link> 
                    </li>
                    <li className="nav-item">
                        <Link to="/about">About</Link> 
                    </li>
                    <li className="nav-item">
                        <Link to="/education">Education</Link> 
                    </li>
                    <li className="nav-item">
                        <Link to="/project">Project</Link> 
                    </li>
                    <li className="nav-item">
                        <Link to="/service">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}