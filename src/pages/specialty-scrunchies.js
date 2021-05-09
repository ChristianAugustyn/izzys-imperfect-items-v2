import React, { useState } from "react"
import Layout from "../components/layout"
import ProductCard from "../components/product-card/product-card"
import { graphql } from "gatsby"

const SpecialtyScrunchies = ({ data }) => {
  const {
    allBowScrunchie: { nodes: scrunchies },
  } = data

  return (
    <Layout>
      <div className="container mx-auto flex flex-wrap">
        {scrunchies.map(s => (
            <ProductCard product={s} />
        ))}
      </div>
    </Layout>
  )
}

export default SpecialtyScrunchies

export const specialtyScrunchiesQuery = graphql`
  query {
    allBowScrunchie {
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
