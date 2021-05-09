/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const axios = require("axios")
const lodash = require("lodash")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
    const products = {
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
      coasters: await axios
        .get(`https://izzysimperfectitems.ca/api/coasters`)
        .then(res => res.data)
        .catch(err => console.error(err)),
      bowlCozies: await axios
        .get(`https://izzysimperfectitems.ca/api/bowl-cozies`)
        .then(res => res.data)
        .catch(err => console.error(err)),
    }

    await Object.entries(products).forEach(([ category, categoryProducts]) => {
  	categoryProducts.forEach(p => {
  		const node = {
  			id: createNodeId(`${category}-${p._id}`),
  			mongoId: p._id,
  			name: p.name,
  			img: p.img_url,
  			price: p.price,
  			quantity: p.quantity,
  			type: lodash.camelCase(p.type),
  			internal: {
  			  type: lodash.camelCase(p.type),
  			  contentDigest: createContentDigest(p),
  			},
  		  }
  		  actions.createNode(node)
  	  })
    })
}
