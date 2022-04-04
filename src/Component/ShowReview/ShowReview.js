import React from 'react';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

const showReview = ({review}) => {
    const {name, image, comment} = review;
    return (
        <div className='shadow-lg m-2 p-5 bg-body rounded'>
            <img className='mb-2' src={image} alt="" />
            <h4>{name}</h4>
            <p>{comment}</p>
            <p>Rating: <AiFillStar style={{color:'goldenrod'}}></AiFillStar><AiFillStar style={{color:'goldenrod'}}></AiFillStar><AiFillStar style={{color:'goldenrod'}}></AiFillStar><AiFillStar style={{color:'goldenrod'}}></AiFillStar><AiOutlineStar style={{color:'goldenrod'}}></AiOutlineStar></p>
        </div>
    );
};

export default showReview;