import React from 'react';
import useReview from '../../hook/useReview';
import ShowReview from '../ShowReview/ShowReview';

const ReviewDetail = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='container'>
            <div className='row gx-4'>
            {
                reviews.map(review => <ShowReview key={review.id} review = {review}></ShowReview>)
            }
            </div>
            
        </div>
    );
};

export default ReviewDetail;