import React, { useState } from 'react';
import { useEffect } from 'react';
import { getStoredCart, clearTheCart } from '../../utilities/fakedb';
import fakeData from '../../fakeData/products.json';
import ReviewItem from '../reviewItem/ReviewItem';


const Review = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const saveData = getStoredCart()
        const productKey = Object.keys(saveData)
       
        const cartProduct = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            // product.quantity = saveData[key];
        return product;
        })
        setCart(cartProduct);
    },[])

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        clearTheCart(key);
    }
    return (
        <div>  
            {
                cart.map(data => <ReviewItem
                    //  key = {data.key}
                     ItemProducts = {data}
                     handleRemove= {handleRemove}
                     >
                     </ReviewItem>)
            }
        </div>
    );
};

export default Review;