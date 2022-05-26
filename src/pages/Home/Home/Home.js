import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Meeting from '../Meeting/Meeting';
import Reviews from '../Reviews/Reviews';
import Summary from '../Summary/Summary';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div className='my-5'>
            <Banner></Banner>
            <Tools></Tools>
            <Summary></Summary>
            <Reviews></Reviews>
            <Meeting></Meeting>
            <Contact></Contact>
        </div>
    );
};

export default Home;