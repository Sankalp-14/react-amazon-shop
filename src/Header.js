import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';

function Header() {
    
    const [{basket}] = useStateValue();

    return (
       
        <nav className="header">
             <Link to="/">
            <img className="header__logo" src="https://global-uploads.webflow.com/5d28e82dc1cfb8443bc135db/5da45de58d4d26257581ec60_amazon_PNG25.png" alt="" />
            </Link>    
         
            <div className="header__search">       
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                 <Link to="/login" className="header__link">
                 <div className="header__option">
                 <span className="header__optionLineOne">Hello Sankalp</span>
                 <span className="header__optionLineTwo">Sign In</span>
                 </div>
                 </Link>

                 <Link to="/" className="header__link">
                 <div className="header__option">
                 <span className="header__optionLineOne">Returns</span>
                 <span className="header__optionLineTwo">& Orders</span>
                 </div>
                 </Link>

                 <Link to="/" className="header__link">
                 <div className="header__option">
                 <span className="header__optionLineOne">Your</span>
                 <span className="header__optionLineTwo">Prime</span>
                 </div>
                 </Link>

                 <Link to="/checkout" className="header__link">
                     <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount" >{basket?.length}</span>
                     </div>
                 </Link>
            </div>
        </nav>
    
    )
}

export default Header
