import React from 'react';

const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className='rating'>
      {[...Array(fullStars)].map((_, index) => (
        <i key={index} className="fa-solid fa-star fullStars"></i>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <i key={index} className="fa-solid fa-star emptyStars"></i>
      ))}
    </div>
  );
};

export default Rating;