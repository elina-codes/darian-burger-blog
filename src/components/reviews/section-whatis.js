/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

const ReviewSectionWhatIs = ({ title, review, children }) => {
  return (
    <>
      <section className="review__whatis">
        <div className="grid wrapper half-half">
          <div className="grid__item work__text">
            <h2 className="review__title">{title}</h2>

            {children}
          </div>
          <div className="grid__item grid__image">
            <img src={review.images.main.src} alt={review.images.main.alt} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewSectionWhatIs;
