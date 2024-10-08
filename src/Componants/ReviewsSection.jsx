import React, { useState } from 'react';
import './ReviewsSection.css'; // CSS file
import { useInView } from 'react-intersection-observer';

const ReviewsSection = () => {
  const [rating, setRating] = useState(4.5);

  const handleRatingClick = (starValue) => {
    setRating(starValue);
    // Redirect to the Google reviews link of your place
    window.open('https://www.google.com/search?q=fixomes&sca_esv=a3951d48e92e48e8&sca_upv=1&sxsrf=ADLYWIIiUcgeChrCidx5x6CzGcgY8a0xLw%3A1726627545348&ei=2T7qZoz3FOLL0PEPyO_VsAI&ved=0ahUKEwjMx__rvMuIAxXiJTQIHch3FSYQ4dUDCA8&uact=5&oq=fixomes&gs_lp=Egxnd3Mtd2l6LXNlcnAiB2ZpeG9tZXMyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEdI6QVQowVYowVwAXgBkAEAmAEAoAEAqgEAuAEDyAEA-AEBmAIBoAIDmAMAiAYBkAYIkgcBMaAHAA&sclient=gws-wiz-serp', '_blank');
  };
  const { ref, inView } = useInView({
   
    threshold: 0.5,
  });

  return (
    <div className="reviews-section" ref={ref} 
    style={{
      transition: 'all 0.5s ease-in-out',
      transform: inView ? 'translateY(0)' : 'translateY(100px)',
      opacity: inView ? 1 : 0,
    }}>
      <div className="left-side">
        <h1>Our Google Reviews</h1>
        <h2 style={{textAlign:"center"}}> With 4 years of experience and more than 2,500 customers</h2>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star, index) => (
            <span
              key={index}
              className={star <= rating ? 'star filled' : 'star'}
              onClick={() => handleRatingClick(star)}
              onMouseEnter={() => setRating(star)}
              onMouseLeave={() => setRating(4.5)}
            >
              ★
            </span>
          ))}
        </div>
        <h1>4.9/5</h1>
      </div>
      <div className="right-side">
        <div className="review">
          <p>"Amazing service! They were quick, efficient, and super friendly. Would definitely recommend to anyone!"</p>
          <p><strong>- John Doe, 5 Stars</strong></p>
        </div>
        <div className="review">
          <p>"Prompt response and solved my issue with professionalism. Very satisfied with the service!"</p>
          <p><strong>- Jane Smith, 5 Stars</strong></p>
        </div>
        <div className="review">
          <p>"The technician arrived on time and provided excellent service. My go-to company from now on!"</p>
          <p><strong>- Sarah Williams, 5 Stars</strong></p>
        </div>
        
      </div>
    </div>
  );
};

export default ReviewsSection;
