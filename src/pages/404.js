import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/section-banner.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section id="not-found" className="banner not-found">
      <div className="wrapper">
        <h1 className="banner__title">NOT FOUND</h1>
        <h2 className="banner__subtitle">
          This page doesn&#39;t exist. Oh the disappointment!
        </h2>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
