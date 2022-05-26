import React, { useEffect, useState } from 'react';
import {useQuery} from 'react-query';

import Loading from '../Shared/Loading';

const AllOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/order', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>All Orders: {orders.length}</h2>

        </div>
    );
    };

export default AllOrders;