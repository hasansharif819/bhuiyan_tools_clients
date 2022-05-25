import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        if(user){
            fetch(`http://localhost:5000/order?client=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
        }
    }, [user])

    //delete button 

    const handleUserDelete = _id => {
    console.log(_id)
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting product with id, ', _id);
            const url = `http://localhost:5000/order/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = orders.filter(order => order.id !== _id);
                        setOrders(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h2>Your orders: {orders.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            orders.map((order, index) => <tr
                                key={order._id}
                            >
                                <th>{index + 1}</th>
                                <td>{order.clientName}</td>
                                <td>{order.client}</td>
                                <td>{order.service}</td>
                                <td>{order.quantity}</td>
                                <td>
                                <button 
                                onClick={() => handleUserDelete(order._id)}
                                 className='btn bg-red-900'>Delete</button>

                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;