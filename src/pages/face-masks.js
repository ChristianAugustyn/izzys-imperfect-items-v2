import React, { useState } from "react"
import Layout from "../components/layout"
import ProductCard from "../components/product-card/product-card"
import { graphql } from "gatsby"

const FaceMasks = ({ data }) => {
  const {
    allFm: { nodes: fm },
  } = data

  return (
    <Layout>
      <div className="container mx-auto flex flex-wrap">
        {fm.map(s => (
            <ProductCard product={s} />
        ))}
      </div>
    </Layout>
  )
}

export default FaceMasks

export const faceMasksQuery = graphql`
  query {
    allFm {
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
