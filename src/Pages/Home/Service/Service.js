import React from "react";

const Service = ({ course }) => {
  const { name, image, price, description } = course;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
        <div style={{ width: "240px" }} className="card">
      <div>
        <img src={image} className="card-img-top" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>Price: {price}</p>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
    </div>
  );
};

export default Service;
