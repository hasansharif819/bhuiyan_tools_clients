import React, { useEffect, useState } from 'react';
import {useQuery} from 'react-query';

import Loading from '../Shared/Loading';

const AllOrders = () => {
    // const { data: allOrders, isLoading, refetch } = useQuery('allOrders', () => fetch('https://damp-bayou-30389.herokuapp.com/order', {
    //     method:'GET',
    //             headers: {
    //                 'content-type': 'application/json',
    //                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //             }
    // }).then(res => res.json()));
    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch('https://damp-bayou-30389.herokuapp.com/order',{
            method: 'GET',
            headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res =>res.json())
        .then(data => setOrders(data))
    }, [orders])

    const handleUserDelete = _id => {
        console.log(_id)
        const proceed = window.confirm('Are you sure you want to Cancel?');
        if (proceed) {
            console.log('deleting product with id, ', _id);
            const url = `https://damp-bayou-30389.herokuapp.com/order/${_id}`;
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
            <h2>All Orders: {orders.length}</h2>
            {/* <div>
                {
                    allOrders.map(order => <div
                        key={order._id}
                    >
                       <>
                       <h2>Name: {order.name}</h2>
                       </> 
                    </div>)
                }
            </div> */}

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
                                        className='btn bg-red-900'>Cancel</button>
                                </td>
                                
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>

        </div>
    );
    };

export default AllOrders;