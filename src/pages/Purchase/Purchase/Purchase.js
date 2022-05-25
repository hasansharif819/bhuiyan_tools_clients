import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const Purchase = () => {
    const navigate = useNavigate();
    const [products] = useProducts([]);

    const handlePurchase= id =>{
        navigate(`/purchase/${id}`);
    }
    
    
    return (
        <div className='my-5'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <div key={product._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={product.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {product.name}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <h2 className='text-3xl font-bold'>Price: ${product.price}</h2>
                                <p>Description: {product.description}</p>
                                <h2 className='text-xl font-bold'>In stock: {product.quantity}</h2>
                                <div className="card-actions justify-end">
                                <div className="card-actions m-2">
                                <Link to={`/purchase/${product._id}`}><button onClick={() => handlePurchase(product._id)} className='btn btn-primary text-2xl font-bold my-3 p-2'>Details</button></Link>

                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Purchase;