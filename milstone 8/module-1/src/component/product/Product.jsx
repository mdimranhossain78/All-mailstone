import React from 'react';

const Product = ({product}) => {

    const {name, category, price, brand} = product

    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{category}</p>
                <p>price: {price}</p>
                <p>{brand}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;