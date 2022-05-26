import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl font-bold text-primary'>User Reviews: {reviews.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 bg-base-200'>
            {
                reviews.map(review => <div
                    key={review._id}
                >
                    <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">User: {review.clientName}</h2>
    <p>{review.client}</p>
    <p>{review.reviews}</p>
    <h2 className="card-title text-center items-center justify-center">Ratings: {review.rating} star</h2>
    <div className="card-actions justify-end">
      <Link to='/dashboard/myreview'><button className="btn">Review</button></Link>
    </div>
  </div>
</div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Reviews;