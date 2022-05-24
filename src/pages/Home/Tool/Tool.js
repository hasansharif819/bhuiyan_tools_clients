import React from 'react';

const Tool = ({ product }) => {
    const {name, price, quantity, description, img, minQuantity} = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <figure className="px-10 pt-10">
                {/* <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" /> */}
            </figure>
            <div className="items-center text-center">
                <h2 className="text-2xl font-bold">{name}</h2>
                <h4>Price: ${price}</h4>
                <p>In Stock: {quantity}</p>
                <div className="card-actions m-2">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;