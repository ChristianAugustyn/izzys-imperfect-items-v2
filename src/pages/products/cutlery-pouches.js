import React, { useState } from "react"
import Layout from "../../components/layout"
import ProductCard from "../../components/product-card/product-card"
import { graphql } from "gatsby"

const CutleryPouches = ({ data }) => {
  const {
    allProduct: { nodes },
  } = data

  return (
    <Layout>
      <div className="container mx-auto flex flex-wrap">
        {nodes.map(s => (
            <ProductCard product={s} />
        ))}
      </div>
    </Layout>
  )
}

export default CutleryPouches

export const cutleryPouchesQuery = graphql`
  query {
    allProduct(filter: {type: {eq: "cp"}}) {
      nodes {
        id
        img
        mongoId
        name
        price
        quantity
        type
        imgNode {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
