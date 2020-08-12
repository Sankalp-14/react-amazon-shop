import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

function Checkout() {
    
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png" alt="" />

            {basket?.length === 0 ?(
                <div><h2>Your Shopping Basket Is Empty</h2>
                <p>You have no items in your basket. To buy one or more items, click on "Add to basket" bellow to the item.</p>
                </div>
            ) : (
                <div><h2 className="checkout__title">Your Shopping Basket</h2>
                   {basket.map(item =>(
                       <CheckoutProduct 
                           id={item.id}
                           title={item.title}
                           price={item.price}
                           image={item.image}
                       />
                   ))}
                </div>
            )}  
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                   
                  <Subtotal />
                </div>
            )}  
        </div>
    )
}

export default Checkout
