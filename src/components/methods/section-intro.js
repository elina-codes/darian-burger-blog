/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const MethodSectionIntro = ({ children }) => {
  return (
    <>
      <section className="method__intro">
        <div className="wrapper">{children}</div>
      </section>
    </>
  )
}

export default MethodSectionIntro
