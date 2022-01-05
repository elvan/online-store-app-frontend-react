import React from 'react';

const Rating = ({ rating, numberOfReviews }) => {
  const renderStars = () => {
    let stars = [];

    for (let i = 0; i < 5; i++) {
      let classes = 'text-dark ';

      if (rating >= i + 1) {
        classes += 'fas fa-star';
      } else if (rating >= i + 0.5) {
        classes += 'fas fa-star-half-alt';
      } else {
        classes += 'far fa-star';
      }

      stars.push(<i className={classes}></i>);
    }

    return stars;
  };

  return (
    <div className='rating'>
      <span>{renderStars()}</span>
      <span className='ms-1'>
        {rating} ({numberOfReviews})
      </span>
    </div>
  );
};

export default Rating;
