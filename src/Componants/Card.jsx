import React from 'react';
import './Card.css'; // Assuming you have a CSS file for styles

const Card = ({ title, content, image, idScroll }) => {
  return (
    <div className="card" >
      <div className="card-content">
        <a href={idScroll}><img src={image} alt="cleaning services" /></a>
      </div>
    </div>
  );
};

export default Card;
