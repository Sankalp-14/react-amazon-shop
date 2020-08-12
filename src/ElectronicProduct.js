import React from 'react';
import { useStateValue } from './StateProvider';

function ElectronicProduct({id, title, price, image}) {

    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
       //add item to basket
       dispatch({
           type: 'ADD_TO_BASKET',
           item: {
               id:id,
               title:title,
               price:price,
               image:image
           }
       })
    }

    return (
        <div className="product">
        <img src={image} />
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                 <strong>Price:</strong>
                <small>$</small>
                <strong>{price}</strong>
            </p>
        </div>
        <button onClick={addToBasket}>Add to basket</button>
        
    </div>
    )
}

export default ElectronicProduct
