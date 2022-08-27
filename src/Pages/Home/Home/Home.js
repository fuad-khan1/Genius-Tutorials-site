import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <h1 className='text-primary mt-5'>Fuad's Genius Tutorials</h1>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;