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
          <p>"I get excellent work by Fixomes, I called for  Chimney service  and refrigerator regarding problem. I got satisfactory Service with reasonable prices. I recommend this to get satisfied job by Fixomes."</p>
          <p><strong>- Harish Tewari, 4.7 Stars</strong></p>
        </div>
        <div className="review">
          <p>"I have hired them for AC service which they carried out very professionally. I think if you are using services like urban clap etc., you should give them a try instead as I found them very professional. They carry out the service neatly and  even cleanup any inevitable mess created during the process. Last but not least the charges are very nominal which will go easy on your pocket"</p>
          <p><strong>- Savitoj Singh, 5 Stars</strong></p>
        </div>
        <div className="review">
          <p>"a month ago
          Amazing deep cleaning service in Chandigarh! My home looks sparkling clean. The team was professional and efficient. Highly recommend!"</p>
          <p><strong>- Jitesh Bagdwal , 5 Stars</strong></p>
        </div>
        
      </div>
    </div>
  );
};

export default ReviewsSection;
