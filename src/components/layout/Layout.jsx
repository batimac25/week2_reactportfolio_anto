import React from 'react';
import { Link } from 'react-router-dom';
import portfolio_logo from '../../assets/images/portfolio_logo.jpeg';
import './../layout/layout.css'

export default function Layout(){
    return (
        <>
        <a href="#" className="anto-nav-toggle-js anto-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
        <div className='title-bar-outer'>
        <div className='title-bar'>
              <div className='logo'>
                    <img src={portfolio_logo} width='100px' height='100px'></img>
              </div>
              <div className='menu-bar'>
                <nav id="anto-main-section-menu" role="navigation" className="navbar">
                <div id="navbar">
                    <Link to="/" >Home</Link>  <Link to="/about">About</Link>  <Link to="/education">Education</Link> 
                    <Link to="/project">Project</Link>  <Link to="/service">Services</Link>  <Link to="/contact">Contact</Link>
                </div>
                </nav>
              </div>
        </div>
        </div>
        </>
    );
}