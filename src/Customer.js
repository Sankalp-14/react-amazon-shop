import React from 'react';
import './Customer.css';
import { Link } from '@material-ui/core';


function Customer() {
    return (
        <div>
            <h1>Hello. What can we help you with?</h1>
            <br/>
            <br/>
            <Link to="/" className="nav__link">
            <nav className="nav">
                <p>Back To Home</p>
            </nav>
            </Link>
            <nav className="header__cus">
                <div className="header__navcus">
                    <Link to="" className="header__linkcus">
                        <div className="header__optioncus">
                        <span className="header__optionLineOnecus">Get to Know Us</span>
                        <span className="header__optionLineTwocus">About us</span>
                        <span className="header__optionLineTwocus">Careers</span>
                        <span className="header__optionLineTwocus">Press Releases</span>
                        <span className="header__optionLineTwocus">Amazon Cares</span>
                        <span className="header__optionLineTwocus">Gift and smile</span>
                    </div>
                    </Link>
                    <Link to="" className="header__linkcus">
                    <div className="header__optioncus">
                        <span className="header__optionLineOnecus">Connect With Us</span>
                        <span className="header__optionLineTwocus">Facebook</span>
                        <span className="header__optionLineTwocus">Twitter</span>
                        <span className="header__optionLineTwocus">Instagram</span>
                    </div>
                    </Link>

                    <Link to="" className="header__linkcus">
                        <div className="header__optioncus">
                        <span className="header__optionLineOnecus">Make Money With Us</span>
                        <span className="header__optionLineTwocus">Sell On Amazon</span>
                        <span className="header__optionLineTwocus">Sell Under Amazon Accelerator</span>
                        <span className="header__optionLineTwocus">Become an Affiliate</span>
                        <span className="header__optionLineTwocus">Fulfilment by Amazon</span>
                        <span className="header__optionLineTwocus">Advertise Your Products</span>
                        <span className="header__optionLineTwocus">Amazon Pay on Merchants</span>
                    </div>
                    </Link>

                    <Link to="" className="header__linkcus">
                        <div className="header__optioncus">
                        <span className="header__optionLineOnecus">Let Us Help You</span>
                        <span className="header__optionLineTwocus">COVID-19 and Amazon</span>
                        <span className="header__optionLineTwocus">Your Account</span>
                        <span className="header__optionLineTwocus">Returns Centre</span>
                        <span className="header__optionLineTwocus">100% Purchase Protection</span>
                        <span className="header__optionLineTwocus">Amazon App Download</span>
                        <span className="header__optionLineTwocus">Amazon Assistant Download</span>
                        <span className="header__optionLineTwocus">Help</span>
                    </div>
                    </Link>

                </div>

            </nav>

            <img className="customer__lastimg" src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/7a2ef2c8-d54c-4da8-beba-f4e12a0f10d5._UR1280,600_SX1500_FMjpg_.jpg" alt="" />
        </div>
        
    )
}

export default Customer
