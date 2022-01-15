import React, { useState } from "react"
import Layout from "../../components/layout"
import ProductCard from "../../components/product-card/product-card"
import { graphql, navigate } from "gatsby"

const Scrunchies = ({ data }) => {
  const {
    allProduct: { nodes },
  } = data

  return (
    <Layout>
      <div className="container mx-auto flex flex-wrap">
        {nodes.filter(s => s.quantity > 0).map(s => (
          <ProductCard product={s}/>
        ))}
      </div>
    </Layout>
  )
}

export default Scrunchies

export const scrunchiesQuery = graphql`
  query {
    allProduct(filter: { type: { eq: "scrunchie" } }) {
      nodes {
        id
        imgUrl
        name
        price
        quantity
        collection
        type
        imgNode {
          childImageSharp {
            gatsbyImageData(
              width: 400
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`
