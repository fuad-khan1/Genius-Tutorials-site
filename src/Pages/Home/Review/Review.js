import React from 'react';

const Review = ({review}) => {
    const {name, image, feedback}= review;
    return (
        <div className="g-5 col-sm-12 col-md-6 col-lg-4">
        <div style={{ width: "240px" }} className="card">
      <div>
        <img src={image} className="card-img-top " alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{feedback}</p>
      </div>
    </div>
    </div>
    );
};

export default Review;