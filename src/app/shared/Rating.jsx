import PropTypes from 'prop-types';
import React from 'react';

const Rating = ({ value, numberOfReviews }) => {
  const renderStars = () => {
    let starts = [];

    for (let i = 0; i < 5; i++) {
      let classes = 'text-dark ';

      if (value >= i + 1) {
        classes += 'fas fa-star';
      } else if (value >= i + 0.5) {
        classes += 'fas fa-star-half-alt';
      } else {
        classes += 'far fa-star';
      }

      starts.push(<i className={classes}></i>);
    }

    return starts;
  };

  return (
    <div className='rating'>
      <span>{renderStars()}</span>
      <span className='ms-1'>
        {value} ({numberOfReviews})
      </span>
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  numberOfReviews: PropTypes.number.isRequired,
};

export default Rating;
