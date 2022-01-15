/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const axios = require("axios")
const lodash = require("lodash")
const { createRemoteFileNode } = require("gatsby-source-filesystem")
const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
	  type Product implements Node {
      id: String
      name: String,
      imgUrl: String
      imgNode: File @link(from: "imgNode___NODE")
      price: Float
      quantity: Int
      type: String,
      sale: Float,
      size: String,
      collection: String
	  }
	`)
}

exports.sourceNodes = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {

  const products = await axios.get('http://localhost:5000/api/product')
    .then(res => res.data)
    .catch(err => console.error(err))

  products.forEach(p => {
    const node = {
      ...p,
      internal: {
        type: `Product`,
        contentDigest: createContentDigest(p)
      }
    }
    createNode(node)
  })
}


//creating image file nodes
exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  try {
    if (node.internal.type === "Product") {
      //need this for typing prodducts
      let imageNode = await createRemoteFileNode({
        url: node.imgUrl,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        cache,
        store,
      })

      if (imageNode) {
        node.imgNode___NODE = imageNode.id
      }
    }
  } catch (err) {
    console.error(err)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data: { allProduct: { nodes: productNodes } } } = await graphql(`
    query {
      allProduct {
        nodes {
          name
          id
          collection
        }
      }
    }
  `);

  productNodes.forEach(node => {
    createPage({
      path: `/products/${node.collection}/${node.id}`,
      component: path.resolve(`./src/templates/product-page.js`),
      context: {
        slug: `/products/${node.collection}/${node.id}`, id: node.id
      }
    })
  })
}
