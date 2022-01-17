/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./navbar/navbar"
import "./layout.css"

const Layout: FC = ({ children }) => {
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
      <div className="pt-8 px-0">
        <NavBar />
        <main className="pb-20">{children}</main>
        <footer className="absolute bottom-0 right-0 left-0 text-center pt-12 pb-3">
          <p className="text-gray-400">
            Copyright ⓒ {new Date().getFullYear()}{" "}
            {data.site.siteMetadata.title}
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
