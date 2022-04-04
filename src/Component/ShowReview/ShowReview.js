import React from 'react';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

const showReview = ({review}) => {
    const {name, image, comment} = review;
    return (
        <div className='col-4 p-5'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>{comment}</p>
            <p>Rating: <AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiOutlineStar></AiOutlineStar></p>
        </div>
    );
};

export default showReview;