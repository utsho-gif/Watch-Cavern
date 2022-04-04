import React from 'react';

const Reviews = ({review}) => {
    const {name, gender, comment} = review;
    return (
        <div className='col'>
            <h2>{name}</h2>
            <p>{comment}</p>
        </div>
    );
};

export default Reviews;