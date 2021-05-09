import React, { useState } from "react"
import Layout from "../components/layout"
import ProductCard from "../components/product-card/product-card"
import { graphql } from "gatsby"

const CutleryPouches = ({ data }) => {
  const {
    allCp: { nodes: cp },
  } = data

  return (
    <Layout>
      <div className="container mx-auto flex flex-wrap">
        {cp.map(s => (
            <ProductCard product={s} />
        ))}
      </div>
    </Layout>
  )
}

export default CutleryPouches

export const cutleryPouchesQuery = graphql`
  query {
    allCp {
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
