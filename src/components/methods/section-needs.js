/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const MethodSectionNeeds = ({ title, children }) => {
  return (
    <>
      <section className="method__needs">
        <div className="grid wrapper half-half">
          <h2 className="method__title grid__title">{title}</h2>
          {children}
        </div>
      </section>
    </>
  )
}

export default MethodSectionNeeds
