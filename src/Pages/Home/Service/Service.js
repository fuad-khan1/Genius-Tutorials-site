import React from "react";
import { Link } from "react-router-dom";

const Service = ({ course }) => {
  const { name, image, price, description } = course;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
        <div className="card">
      <div>
        <img src={image} className="card-img-top" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>Price: {price}</p>
        <p className="card-text">{description}</p>
        <Link to='/checkout' className="btn btn-primary">
          Check Out
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Service;
