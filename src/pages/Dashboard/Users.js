import React, { useEffect, useState } from 'react';
import {useQuery} from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import {useAuthState} from 'react-firebase-hooks/auth';
import {toast} from 'react-toastify';

const Users = () => {
    const [user, role] = useAuthState(auth);
    const {data: users, isLoading, refetch} = useQuery('users', () => fetch('http://localhost:5000/user')
    // {
    //     method: 'GET',
    //     Headers:{
    //         authorization: `Bearer ${localStorage.getItem('accessToken')}`;
    //     }
    // }
    .then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }

    // const [users, setUsers] = useState([]);
    // useEffect( () => {
    //     fetch('http://localhost:5000/user')
    //     .then(res=> res.json())
    //     .then(data => setUsers(data))
    // }, [users])

    const email = user.email;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`,
        {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
        )
        .then(res => res.json())
        .then(data => {
            console.log(data);
            refetch();
            toast('Successfully made an admin')
        })
    }

    return (
        <div>
            <h2>All Users: {users.length}</h2>
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
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.clientName}</td>
                                <td>{user.client}</td>
                                <td>{user.service}</td>
                                <td>{user.quantity}</td>
                                <td>
                                {role !=='admin' && <button
                                    onClick={makeAdmin}
                                    className='btn bg-red-900'>Admin</button>}
                                        
                                </td>
                                <td>
                                {/* <Link to='/payment'>
                                        <button className="btn btn-primary  font-bold my-3 p-2">Payment</button>
                                    </Link> */}
                                    <button className="btn btn-primary  font-bold my-3 p-2">Delete user</button>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;