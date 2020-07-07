/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../common/header"
import Footer from "../common/footer"
import MethodLayoutBanner from "./section-topbanner"
import MoreProjects from "./section-more-methods"

import "../layout.scss"
import "./layout-method.scss"

const MethodLayout = ({ pageTitle, method, children }) => {
  const data = useStaticQuery(graphql`
    query SingleSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="method-layout">
        <MethodLayoutBanner pageTitle={pageTitle} />
        {children}
        <MoreProjects project={method} />
      </main>
      <Footer />
    </>
  )
}

MethodLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MethodLayout
