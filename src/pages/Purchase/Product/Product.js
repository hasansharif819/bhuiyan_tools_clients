import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

const Product = () => {
    const productId = useParams();
    console.log(productId)

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
    // console.log('price', price)
    // const total =(products.count * price);
    // console.log('total',total)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h2 className="py-2 text-3xl">Name: </h2>
                    <h2 className="py-2 text-3xl">Price: $</h2>
                    <h2 className="py-2 text-3xl">In stock: </h2>
                    <div>
                        <input type='button' onClick={decrease} />
                        <input type='text' value={products.count} onChange={handleChange} />
                        <input type='button' onClick={() => setProducts({ count: products.count + 1 })} />

                    </div>
                    {/* stock end  */}
                    

                    <p className="py-6 text-3xl">Grand total: ${} </p>
                    
                    <button className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Product;