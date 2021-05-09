import React, { useState } from "react"
import Layout from "../components/layout"
import ProductCard from "../components/product-card/product-card"
import { graphql } from "gatsby"

const BowlCozies = ({ data }) => {
  const {
    allBowlCozy: { nodes: bowlCozies },
  } = data

  return (
    <Layout>
      <div className="container mx-auto flex flex-wrap">
        {bowlCozies.map(s => (
            <ProductCard product={s} />
        ))}
      </div>
    </Layout>
  )
}

export default BowlCozies

export const bowlCoziesQuery = graphql`
  query {
    allBowlCozy {
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