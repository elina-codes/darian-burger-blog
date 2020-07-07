/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const MethodSectionWhatIs = ({ title, method, children }) => {
  return (
    <>
      <section className="method__whatis">
        <div className="grid wrapper half-half">
          <div className="grid__item work__text">
            <h2 className="method__title">{title}</h2>

            {children}
          </div>
          <div className="grid__item grid__image">
            <img src={method.images.main.src} alt={method.images.main.alt} />
          </div>
        </div>
      </section>
    </>
  )
}

export default MethodSectionWhatIs
