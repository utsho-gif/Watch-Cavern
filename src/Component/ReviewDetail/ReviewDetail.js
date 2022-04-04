import React from 'react';
import useReview from '../../hook/useReview';
import ShowReview from '../ShowReview/ShowReview';
import './ReviewDetail.css';

const ReviewDetail = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='m-5'>
            <div className='card-container'>
            {
                reviews.map(review => <ShowReview key={review.id} review = {review}></ShowReview>)
            }
            </div>
            
        </div>
    );
};

export default ReviewDetail;