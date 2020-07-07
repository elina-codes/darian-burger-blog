import React from 'react';

const ReviewSectionTips = ({ title, review, children }) => {
  return (
    <>
      <section className="review__tips">
        <div className="grid wrapper">
          <div className="grid__item grid__image">
            <h2 className="review__title">{title}</h2>
            {children}
          </div>
          <div className="grid__item work__text">
            <img src={review.images.third.src} alt={review.images.third.alt} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewSectionTips;
