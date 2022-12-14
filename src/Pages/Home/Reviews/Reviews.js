import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviewData.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
    return (
        <div className="container">
      <h2 id='reviews' className="text-primary mt-5 mb-3 ">Reviews</h2>
      <div className="row mx-auto">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
    );
};

export default Reviews;