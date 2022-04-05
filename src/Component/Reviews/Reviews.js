import React from "react";

const Reviews = ({ review }) => {
  const { name, comment, image } = review;
  return (
    <div className="col p-3 border border-2 border-primary rounded me-3">
      <h2>{name}</h2>
      <img className="mb-3" src={image} alt="" />
      <p>{comment}</p>
    </div>
  );
};

export default Reviews;
