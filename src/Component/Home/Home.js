import React from "react";
import { useNavigate } from "react-router-dom";
import useReview from "../../hook/useReview";
import image from "../../image/45mm-clover-sport-band-mockup-close-up.jpg";
import Reviews from "../Reviews/Reviews";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReview();
  const navigator = useNavigate();
  const clickHandler = () => {
    navigator("/reviews");
  };
  return (
    <div>
      <div className="container mb-4 resp">
        <div className="details-container me-5">
          <h1>
            <span className="text-danger">Watch</span> Cavern.
          </h1>
          <h4>
            At WatchCavern, we can guarantee you will find more watch brands than
            anywhere else.
          </h4>
          <button className="btn btn-outline-dark">Live Demo</button>
        </div>
        <div className="image-container">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="review-container my-5">
        <u className="mt-5">
          <h2 className="name mt-5">Customer Review</h2>
        </u>
        <div className="container respon">
          {reviews.slice(0, 3).map((review) => (
            <Reviews key={review.id} review={review}></Reviews>
          ))}
        </div>
        <button onClick={clickHandler} className="btn btn-outline-dark">
          Check Out Reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
