import React, { useEffect, useState } from 'react';
import axios from 'axios';
import auth from '../../firebase.init';
import {useAuthState} from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import { Navigate } from 'react-router-dom';


const Profile = () => {
    const [user] = useAuthState(auth);
    // console.log(user)

    //handle update
    const handleUpdate = event => {
        event.preventDefault();
        
        const profile = {
            id: user?.uid,
            client: user?.email,
            clientName: user?.displayName,
            edu: event.target.edu.value,
            address: event.target.address.value,
            age: event.target.age.value,
            phone: event.target.phone.value,
            img: event.target.img.value
        }
        fetch('https://damp-bayou-30389.herokuapp.com/user', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(profile)
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

    //query using email
    const [items, setItems] = useState([]);

    // useEffect( () => {
    //     const getItems = async() => {
    //     const email = user?.email;
    //         const url = `http://localhost:5000/profile/client?=${email}`;
    //         const {data} = await axios.get(url)
    //         setItems(data);
    //         try{
    //             const {data} = await axios.get(url, {
    //                 headers: {
    //                     authorization: `bearer ${localStorage.getItem('accessToken')}`
    //                 }
    //             });
    //                 setItems(data);
    //         }
    //         catch(error){
    //             if(error.response.status === 401 || 403){
    //                 signOut(auth);
    //                 Navigate('/login');
    //             }

    //         }
    //     }
    //     getItems();
    // }, [user])
    useEffect( () =>{
        const url = `http://localhost:5000/profile/client?=${user?.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItems(data))
    }, [user])

// console.log(items);

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    {/* <img src={user?.photoURL} className="max-w-sm rounded-50% shadow-2xl" alt='' /> */}
    <div class="avatar online">
  <div class="w-24 rounded-full">
    <img src={user?.photoURL} alt='' />
  </div>
</div>
    <div>
    
        
      <h1 className="text-5xl font-bold">{user?.displayName}</h1>
      <p className="py-2">Email: {user?.email}</p>
      <p className="py-2">Phone: {items.phone}</p>
      <p className="py-2">Education: {items.edu}</p>
      <p className="py-2">Age: {items.age}</p>
      <p className="py-2">Address: {items.address}</p>
      <p className="py-2">From: {user?.providerId}</p>

      <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    >Update your profile</label>
    </div>
  </div>
  {/* form  */}
  <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h3 className="font-bold text-lg text-secondary">Product name: {service.name}</h3> */}
                    <form 
                    onSubmit={handleUpdate} 
                    className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        
                        
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="edu" placeholder='Education' className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="address" placeholder='Enter your address' className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="age" placeholder="Age" 
                        className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="url" name="img" placeholder='Enter valid image link' id="" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
</div>
    );
};

export default Profile;