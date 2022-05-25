import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

const Product = () => {
    const {productId} = useParams();

    const [products, setProducts] = useState({
        count: (10000)
    })

    const handleChange = (e) => {

        setProducts({ count: parseInt(e.target.value) })
    }

    const decrease = (e) => {
        if (products.count <= 0) {
            return
        }
        setProducts({ count: products.count - 1 })
    }
    

    // search query 
    const [service, setService] = useState({});
    useEffect( () => {
        const url = `http://localhost:5000/purchase/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    }, [productId])

    
    const total =(products.count * service.price);

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={service.img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h2 className="py-2 text-3xl">Name: {service.name}</h2>
                    <h2 className="py-2 text-3xl">Price: ${service.price}</h2>
                    <h2 className="py-2 text-3xl">In stock: {service.quantity} </h2>
                    <div>
                        <input type='button' onClick={decrease} />
                        <input type='text' value={products.count} onChange={handleChange} />
                        <input type='button' onClick={() => setProducts({ count: products.count + 1 })} />

                    </div>
                    {/* stock end  */}
                    

                    <p className="py-6 text-3xl">Grand total: ${total} </p>
                    
                    <button className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Product;