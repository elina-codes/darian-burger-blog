/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import "./section-topbanner.scss"
import bannerBg from "../../images/darian_bg.jpg"

const MethodLayout = ({ pageTitle }) => {
  return (
    <>
      <section
        className="single-page__header"
        style={{
          backgroundImage: `url(${bannerBg})`,
        }}
      >
        <div className="wrapper wrapper--short">
          <h1 className="single-page__header__title">{pageTitle}</h1>
        </div>
      </section>
    </>
  )
}

export default MethodLayout
