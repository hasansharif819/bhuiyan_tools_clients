import React, { useState } from 'react';
import { toast } from 'react-toastify';


const UserRow = ({ user, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://damp-bayou-30389.herokuapp.com/user/admin/${email}`,
            {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }
        )
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    //delete user
    const [users, setUsers] = useState([]);
    const handleUserDelete = _id => {
        const proceed = window.confirm('Are you sure you want to remove user?');
        if (proceed) {
            // console.log('deleting product with id, ', _id);
            const url = `https://damp-bayou-30389.herokuapp.com/user/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = users.filter(order => order.id !== _id);
                        setUsers(remaining);
                    }
                })
        }
    }

    return (
        <tr>
            <th></th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td>
                <button
                    onClick={() => handleUserDelete(user._id)}
                    className='btn btn-xs'>Remove User</button>
            </td>       
             </tr>

    );
};

export default UserRow;