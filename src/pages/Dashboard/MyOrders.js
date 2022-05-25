import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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

    return (
        <div>
            <h2>Your orders: {orders.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.clientName}</td>
                                <td>{order.client}</td>
                                <td>{order.service}</td>
                                <td>{order.quantity}</td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;