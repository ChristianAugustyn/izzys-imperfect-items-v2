import React, { useState } from "react"
import Layout from "../components/layout"
import ProductCard from '../components/product-card/product-card'
import { graphql } from "gatsby"

const Scrunchies = ({ data }) => {
  const {
    allScrunchie: { nodes: scrunchies },
  } = data

  console.log(scrunchies)

  return (
    <Layout>
      <div className='flex flex-wrap -m-4'>
          {
              scrunchies.map(s => (
                  <ProductCard product={s}/>
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
