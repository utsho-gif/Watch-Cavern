import React from "react";
import useReview from "../../hook/useReview";
import image from "../../image/45mm-clover-sport-band-mockup-close-up.jpg";
import Reviews from "../Reviews/Reviews";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div>
      <div className="container">
        <div className="details-container me-5">
          <h2>
            <span className="text-danger">Watch</span> Dean
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro
            asperiores error voluptatum natus nisi molestias iste ratione
            blanditiis omnis nobis corrupti velit, architecto doloremque
            laudantium saepe, id sapiente quasi.
          </p>
          <button className="btn btn-outline-dark">Live Demo</button>
        </div>
        <div className="image-container">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="review-container my-5">
        <h2 className="text-primary">Customer Review</h2>
        <div className="container">
          {reviews.slice(0, 3).map((review) => (
            <Reviews key={review.id} review={review}></Reviews>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
