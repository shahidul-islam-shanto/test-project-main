import React from 'react';
import './RemoveItem.css'

const ReviewItem = (props) => {
    console.log(props);
   const {name, price , key} = props.ItemProducts;
   const {handleRemove} = props
    return (
        <div className='review-area'>
            <h4>{name}</h4>
            <p>price: {price}</p>
            <button onClick={()=> handleRemove(key)} className='button'>Remove</button>
        </div>
    );
};

export default ReviewItem;