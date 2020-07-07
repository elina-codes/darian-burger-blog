import React from 'react';
// import { Link } from "gatsby"

import reviews from '../data/reviews';
import Layout from '../components/layout';
import SEO from '../components/seo';
import GridLayout from '../components/grid_layout';

const IndexPage = () => (
  <Layout>
    <SEO title="Burger Reviews" />
    <section>
      <div className="wrapper">
        <h1 className="section__title">Blogs Burgers</h1>
        <p className="section__description">Burger reviews</p>
        <GridLayout gridItems={reviews} />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
