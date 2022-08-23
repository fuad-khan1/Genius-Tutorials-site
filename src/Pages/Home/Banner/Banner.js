import React from 'react';
import banner from '../../../images/banner.jpg'

const Banner = () => {
    return (
        <div className='container'>
            <img className='w-100' src={banner} alt="" />
        </div>
    );
};

export default Banner;