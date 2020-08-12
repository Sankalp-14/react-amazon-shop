import React from 'react';
import './SecondHeader.css';
import { Link } from 'react-router-dom';

function SecondHeader() {
    return (
        <nav className="header__second">
         
            <div className="header__nav">
                <Link to="/" className="header__secnav" >
                <span>Prime Day Deals</span>
                </Link>
                <Link to="/mobiles" className="header__secnav">
                <span>Mobiles</span>
                </Link>
                <Link to="/computer" className="header__secnav">
                <span>Computers</span>
                </Link>
                <Link to="/electronic" className="header__secnav">
                <span>Electronis</span>
                </Link>
                <Link to="/book" className="header__secnav">
                <span>Books</span>
                </Link>
                <Link to="/customer" className="header__secnav">
                <span>Customer Service</span>
                </Link>
            </div>
            
        </nav>
    )
}

export default SecondHeader
