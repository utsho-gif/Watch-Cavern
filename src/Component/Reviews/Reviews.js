import React from 'react';

const Reviews = ({review}) => {
    const {name, gender, comment, image} = review;
    return (
        <div className='col'>
            <h2>{name}</h2>
            <img src={image} alt="" />
            <p>{gender}</p>
            <p>{comment}</p>
        </div>
    );
};

export default Reviews;