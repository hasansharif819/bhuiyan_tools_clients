import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Tool from '../Tool/Tool';

const Tools = () => {
    const [products, setProducts] = useProducts([]);

    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])
    
    return (
        <div className='mx-3'>
            <h2 className='text-4xl font-bold mx-5 text-primary my-5'>Tools</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 bg-base-300'>
                {
                    products.slice(0, 6).map(product => <Tool
                        key={product._id}
                        product={product}
                    ></Tool>)
                }
            </div>
            <Link to='/purchase'>
            <button className="btn btn-primary text-2xl font-bold my-3 p-2">See More</button>
            </Link>
        </div>
    );
};

export default Tools;