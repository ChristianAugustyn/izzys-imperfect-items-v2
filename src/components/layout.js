/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./navbar/navbar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="pt-8 px-8 md:px-0">
        <NavBar />
        <main className="container mx-auto pb-20">{children}</main>
        <footer className="absolute bottom-0 text-center pt-12 pb-3 w-full">
          <p className="text-gray-400">
            Copyright ⓒ {new Date().getFullYear()}{" "}{data.site.siteMetadata.title}
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
