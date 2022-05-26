import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';


const MyReview = () => {
    const [user] = useAuthState(auth);
    const handleOrder = event => {
        event.preventDefault();

        const review = {
            client: user.email,
            clientName: user.displayName,
            reviews: event.target.review.value,
            rating: event.target.rating.value
        }
        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Your review is  successful.Thank you...`)
                    //to close the modal

                }
                else {
                    toast.error(`Sorry!!! Your review is failed `)

                    // to close the modal


                }
            })
    }
    return (
        <div className='bg-base-500'>
            <h2 className='text-2xl font-bold text-secondary'>Make your review / feedback</h2>

            <form
                onSubmit={handleOrder}
                className='grid grid-cols-1 gap-3 justify-items-center mt-2'>


                <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                <input type="text" name="review" placeholder='Enter your review' className="input input-bordered w-full max-w-xs" />

                <input type="text" name="rating" placeholder="Ratings" className="input input-bordered w-full max-w-xs" />
                <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default MyReview;