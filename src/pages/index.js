import React from 'react';
// import { Link } from "gatsby"

import reviews from '../data/reviews';
import Layout from '../components/layout';
import SEO from '../components/seo';
import GridLayout from '../components/grid_layout';
import burger from '../images/svg/icon-burger.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Burger Reviews" />
    <section>
      <div className="wrapper">
        <h1 className="section__title">
          <img src={burger} className="heading-icon" />
          Blogs Burgers
        </h1>
        <p className="section__description">Finding the best burger in Vancouver</p>
        <GridLayout gridItems={reviews} />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
