import React from "react"
// import { Link } from "gatsby"

import uxMethods from "../data/ux-methods"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridLayout from "../components/grid_layout"

const IndexPage = () => (
  <Layout>
    <SEO title="UX Methods" />
    <section>
      <div className="wrapper">
        <h1 className="section__title">UX Everything</h1>
        <p className="section__description">
          Below is a list of several UX methods that you can use in
          your UX strategy. <br/>Over the next several months, I am going to be adding
          more, so keep checking back :)
        </p>
        <GridLayout gridItems={uxMethods} />
      </div>
    </section>
  </Layout>
)

export default IndexPage
