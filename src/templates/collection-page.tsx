import { graphql } from 'gatsby'
import React, { FC } from 'react'
import Layout from '../components/layout'
import { Product } from '../models/product'
import ProductCard from '../components/product-card/product-card'

interface Props {
    data: {
        allProduct: {
            nodes: Product[]
        }
    }
}

const CollectionPage: FC<Props> = ({data}) => {
    const { nodes: products } = data.allProduct

    return (
        <Layout>
        <div className="container mx-auto flex flex-wrap">
            {products.filter(p => p.quantity > 0).map(p => (
                <ProductCard product={p}/>
            ))}
        </div>
        </Layout>
    )
}

export default CollectionPage

export const collectionQuery = graphql`
query ($collection: String!) {
    allProduct(filter: {collection: {eq: $collection}}) {
      nodes {
        name
        collection
        id
        imgUrl
        price
        quantity
        sale
        size
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