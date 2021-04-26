/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const axios = require('axios');

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const scrunchies = await axios.get(`https://izzysimperfectitems.ca/api/scrunchies`)
        .then(res => res.data)
        .catch(err => console.error(err));
    
        await scrunchies.forEach(scrunchie => {
            const node = {
                id: createNodeId(`Scrunchie-${scrunchie._id}`),
                mongoId: scrunchie._id,
                name: scrunchie.name,
                img: scrunchie.img_url,
                price: scrunchie.price,
                quantity: scrunchie.quantity,
                type: scrunchie.type,
                internal: {
                    type: scrunchie.type,
                    contentDigest: createContentDigest(scrunchie)
                }
            }
            actions.createNode(node)
        })
}