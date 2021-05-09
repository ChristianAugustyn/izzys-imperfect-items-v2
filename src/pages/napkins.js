import React, { useState } from "react"
import Layout from "../components/layout"
import ProductCard from "../components/product-card/product-card"
import { graphql } from "gatsby"

const Napkins = ({ data }) => {
  const {
    allNp: { nodes: np },
  } = data

  return (
    <Layout>
      <div className="container mx-auto flex flex-wrap">
        {np.map(s => (
            <ProductCard product={s} />
        ))}
      </div>
    </Layout>
  )
}

export default Napkins

export const NapkinsQuery = graphql`
  query {
    allNp {
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
