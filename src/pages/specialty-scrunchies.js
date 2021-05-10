import React, { useState } from "react"
import Layout from "../components/layout"
import ProductCard from "../components/product-card/product-card"
import { graphql } from "gatsby"

const SpecialtyScrunchies = ({ data }) => {
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

export default SpecialtyScrunchies

export const specialtyScrunchiesQuery = graphql`
  query {
    allProduct(filter: {type: {eq: "bowScrunchie"}}) {
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
