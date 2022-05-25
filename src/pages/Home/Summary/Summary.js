import React from 'react';
import summary3 from '../../../assets/summary/summary3.jpg';
import review2 from '../../../assets/summary/review2.jpg';
import tools from '../../../assets/summary/tools.jpg';
import country from '../../../assets/summary/country.jpg';
import revenue1 from '../../../assets/summary/revenue1.webp';

const Summary = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold mx-5 text-primary my-5'>Business Summary</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 bg-base-300'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">We served 300+ customers</h2>
                    <p>Our customers are very polite to us and we always trying best to serve them.</p>
                </div>
                <figure><img src={summary3} alt="Shoes" /></figure>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">250M+ Annual revenue</h2>
                    <p>We are happy and satisfied with our revenue</p>
                </div>
                <figure><img src={revenue1} alt="Shoes" /></figure>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">87K+ Reviews</h2>
                    <p>Our customers are always trying to provide feedback</p>
                </div>
                <figure><img src={review2} alt="Shoes" /></figure>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">150+ tools</h2>
                    <p>We served 150+ different tools thats are necessary for daily using</p>
                </div>
                <figure><img src={tools} alt="Shoes" /></figure>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">250+ Countries</h2>
                    <p>We delevered products almost 250+ countries</p>
                </div>
                <figure><img src={country} alt="Shoes" /></figure>
            </div>
            </div>
        </div>
    );
};

export default Summary;