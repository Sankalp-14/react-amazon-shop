import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, price, image}) {

    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
          dispatch({
              type: "REMOVE_FROM_BASKET",
              id: id,
          })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                

                {/* <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                  <div className="d-flex justify-content-center">
                      <div>
                          <span className="btn btn-black mx-1">-</span>
                          <span className="btn btn-black mx-1"></span>
                          <span className="btn btn-black mx-1">+</span>
                      </div>
                  </div>
              </div> */}


                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
