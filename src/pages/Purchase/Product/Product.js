import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Product.css';
import { toast } from 'react-toastify';

const Product = () => {
    const {productId} = useParams();
    const [user, loading, error] = useAuthState(auth);

    // search query 
    const [service, setService] = useState({});
    useEffect( () => {
        const url = `http://localhost:5000/purchase/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    }, [productId])

    const [products, setProducts] = useState({
        count: (100000)
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

    
    const total =(products.count * service.price);

    //handle Order
    const handleOrder = event => {
        event.preventDefault();
        
        const order = {
            id: productId,
            service: service.name,
            client: user.email,
            clientName: user.displayName,
            address: event.target.address.value,
            quantity: event.target.quantity.value,
            phone: event.target.phone.value
        }
        fetch('http://localhost:5000/order', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Your order is  successful.Thank you...`)
                    //to close the modal
                    
                }
                else {
                    toast.error(`Sorry!!! Your order is failed `)

                // to close the modal
                
                    
                }
            })


    }

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
                    
                    <label
                        htmlFor="booking-modal"
                        
                        // onClick={() => setTreatment(service)}
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    >Order Now</label>
                </div>
                
                
                

                {/* form start */}
                <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Product name: {service.name}</h3>
                    <form 
                    onSubmit={handleOrder} 
                    className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        
                        
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="address" placeholder='Enter your address' className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="quantity" placeholder="quantity" 
                        className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
                {/* form end */}

            </div>
        </div>
    );
};

export default Product;