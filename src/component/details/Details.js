import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/products.json';
import Product from '../product/Product';

const Details = () => {
    const {productKey} = useParams()
    const product = fakeData.find(pd => pd.key === productKey)
    return (
        <div>
            <h1>ID :{productKey}</h1>
            <Product showAddNow={false} product={product}></Product>
        </div>
    );
};

export default Details;