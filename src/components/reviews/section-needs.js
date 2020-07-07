/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

const ReviewSectionNeeds = ({ title, children }) => {
  return (
    <>
      <section className="review__needs">
        <div className="grid wrapper half-half">
          <h2 className="review__title grid__title">{title}</h2>
          {children}
        </div>
      </section>
    </>
  );
};

export default ReviewSectionNeeds;
