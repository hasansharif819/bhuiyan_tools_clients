import React from 'react';
import meeting from '../../../assets/summary/meeting.webp';

const Meeting = () => {
    return (
        <div>
        <h2 className='text-4xl font-bold mx-5 text-primary my-5'>Meeting</h2>
        <div className="hero min-h-screen bg-base-300">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={meeting} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">External Meeting Time</h1>
      <p className="py-6">This is annual meetings with our whole customers joined from differents countries. They are cordially invited from us.</p>
      <button className="btn btn-primary">Join with us</button>
    </div>
  </div>
</div>
</div>
    );
};

export default Meeting;