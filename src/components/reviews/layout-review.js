/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../common/header';
import Footer from '../common/footer';
import ReviewLayoutBanner from './section-topbanner';
import MoreProjects from './section-more-reviews';

import '../layout.scss';
import './layout-review.scss';

const ReviewLayout = ({ pageTitle, review, children }) => {
  const data = useStaticQuery(graphql`
    query SingleSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="review-layout">
        <ReviewLayoutBanner pageTitle={pageTitle} />
        {children}
        <MoreProjects project={review} />
      </main>
      <Footer />
    </>
  );
};

ReviewLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default ReviewLayout;
