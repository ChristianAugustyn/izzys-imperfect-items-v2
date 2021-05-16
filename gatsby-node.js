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
		mongoId: String
		name: String,
		img: String
		imgNode: File @link(from: "imgNode___NODE")
		price: Float
		quantity: Int
		type: String
	  }
	`)
}

exports.sourceNodes = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  const products = await {
    scrunchies: await axios
      .get(`https://izzysimperfectitems.ca/api/scrunchies`)
      .then(res => res.data)
      .catch(err => console.error(err)),
    bowScrunchies: await axios
      .get(`https://izzysimperfectitems.ca/api/bow_scrunchies`)
      .then(res => res.data)
      .catch(err => console.error(err)),
    cutleryPouches: await axios
      .get(`https://izzysimperfectitems.ca/api/cutlery_pouches`)
      .then(res => res.data)
      .catch(err => console.error(err)),
    faceMasks: await axios
      .get(`https://izzysimperfectitems.ca/api/face_masks`)
      .then(res => res.data)
      .catch(err => console.error(err)),
    napkins: await axios
      .get(`https://izzysimperfectitems.ca/api/napkins`)
      .then(res => res.data)
      .catch(err => console.error(err)),
    bowlCozies: await axios
      .get(`https://izzysimperfectitems.ca/api/bowl-cozies`)
      .then(res => res.data)
      .catch(err => console.error(err)),
  }

  Object.entries(products).forEach(async ([category, categoryProducts]) => {
    categoryProducts.forEach(async p => {
      const node = {
        id: createNodeId(`${category}-${p._id}`),
        mongoId: p._id,
        name: p.name,
        img: p.img_url,
        price: p.price,
        quantity: p.quantity,
        type: lodash.camelCase(p.type),
        internal: {
          type: `Product`,
          contentDigest: createContentDigest(p),
        },
      }
      await createNode(node) //creates the parent node
    })
  })
}

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
        url: node.img,
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
          mongoId
          id
          type
        }
      }
    }
  `);

  productNodes.forEach(node => {
    createPage({
      path: `/products/${node.type}/${node.id}`,
      component: path.resolve(`./src/templates/product-page.js`),
      context: {
        slug: `/products/${node.type}/${node.id}`, id: node.id
      }
    })
  })
}
