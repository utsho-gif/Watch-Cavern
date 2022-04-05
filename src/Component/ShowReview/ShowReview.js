import React from 'react';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
import './ShowReview.css'

const showReview = ({review}) => {
    const {name, image, comment, gender} = review;
    return (
        <div className='shadow-lg m-2 p-5 store'>
            <img className='mb-2' src={image} alt="" />
            <h4>{name}</h4>
            <p>{gender}</p>
            <p>{comment}</p>
            <p>Rating: <AiFillStar style={{color:'goldenrod'}}></AiFillStar><AiFillStar style={{color:'goldenrod'}}></AiFillStar><AiFillStar style={{color:'goldenrod'}}></AiFillStar><AiFillStar style={{color:'goldenrod'}}></AiFillStar><AiOutlineStar style={{color:'goldenrod'}}></AiOutlineStar></p>
        </div>
    );
};

export default showReview;