import React, { useEffect, useState } from 'react';
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/solid';
import { Link, useParams } from 'react-router-dom';
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
        const url = `https://damp-bayou-30389.herokuapp.com/purchase/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    }, [productId])

    
    const [counter, setCounter] = useState(0);
    const decrease = () => {
        if(counter <= service.minQuantity){
            return;
        }
        setCounter(counter - 50000);
    }

    const increase = () => {
        if(counter >= service.maxQuantity){
            return;
        }
        setCounter(counter + 50000);
    }
    
    const total =(counter * service.price);

    //handle Order
    const handleOrder = event => {
        event.preventDefault();
        
        const order = {
            id: productId,
            service: service.name,
            client: user.email,
            clientName: user.displayName,
            quantity: event.target.quantity.value,
            total: event.target.total.value,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        fetch('https://damp-bayou-30389.herokuapp.com/order', {
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
                    <h2 className="py-2">Minimum Quantity: {service.minQuantity} </h2>
                    <h2 className="py-2">Maximum Quantity: {service.maxQuantity} </h2>
        
                        <p className="py-2 text-3xl">
                        <button onClick={decrease} className='btn btn-xs'><ChevronDoubleDownIcon className="h-5 w-5 text-blue-500"/></button>
                                    <span className="text-xl"> Quantity: {counter}</span>
                        <button onClick={increase} className='btn btn-xs'><ChevronDoubleUpIcon className="h-5 w-5 text-blue-500"/></button>
                        </p>
                    
                    {/* stock end  */}
                    

                    <p className="py-6 text-3xl">Grand total: ${total} </p>
                    
                    <label
                        htmlFor="booking-modal"
                        
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
                        <input type="text" name="quantity" disabled value={counter} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="total" disabled value={total} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="address" placeholder='Enter your address' className="input input-bordered w-full max-w-xs" />

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