/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import "../sass/style.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query WPDataQuery {
      wp {
        generalSettings {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.wp.generalSettings.title} />
      <main>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
