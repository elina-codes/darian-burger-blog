import React from 'react';

const ReviewSectionSteps = ({ title, review, children }) => {
  return (
    <>
      <section className="review__steps">
        <div className="wrapper wrapper--narrow">
          <h2 className="review__title">{title}</h2>
          <img src={review.images.second.src} alt={review.images.second.alt} />
          {children}
        </div>
      </section>
    </>
  );
};

export default ReviewSectionSteps;
