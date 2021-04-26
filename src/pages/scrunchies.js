import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Scrunchies = ({ data }) => {
  const {
    allScrunchie: { nodes: scrunchies },
  } = data

  console.log(scrunchies)

  return (
    <Layout>
      <div className='flex flex-row flex-wrap'>
          {
              scrunchies.map(s => (
                  <div className='flex flex-col m-3 w-28 h-28 bg-blue-100'>
                    {s.name}
                  </div>
              ))
          }
      </div>
    </Layout>
  )
}

export default Scrunchies

export const scrunchiesQuery = graphql`
  query {
    allScrunchie {
      nodes {
        id
        img
        mongoId
        name
        price
        quantity
        type
      }
    }
  }
`
