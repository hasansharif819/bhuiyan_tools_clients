import React from 'react';

const Tool = ({ product }) => {
    const {name, price, quantity,  img} = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {name}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <h2 className='text-3xl font-bold'>Price: ${price}</h2>
                                <h2 className='text-xl font-bold'>In stock: {quantity}</h2>
                                <div className="card-actions justify-end">
                        
                                </div>
                            </div>
                        </div>
    );
};

export default Tool;