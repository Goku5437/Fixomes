import React from 'react';
import './SmallCard.css'; // Assuming you have a CSS file for styles

const SmallCard = ({ title, content }) => {
    console.log(title,content)
  return (
    <div className="Smallcard">
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SmallCard;
