/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

const ReviewSectionResources = ({ review }) => {
  return (
    <>
      <section>
        <div className="wrapper">
          <div className="grid__item work__text">
            <h2 className="review__title fullwidth">More resources for {review.title}</h2>
            <ul className="fullwidth">
              {review.resources.map((resource, index) => (
                <li key={index}>
                  {resource.title ? `${resource.source}: ` : ''}
                  <a href={resource.url} target="blank" rel="noopener noreferrer">
                    {resource.title ? resource.title : `${resource.source}: `}
                  </a>{' '}
                  {resource.notes ? resource.notes : ''}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewSectionResources;
