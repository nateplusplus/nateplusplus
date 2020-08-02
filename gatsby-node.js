/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
    {
        allWpPage(filter: {status: {eq: "publish"}, isFrontPage: {eq: false}}) {
          nodes {
            databaseId
            slug
            title
            content
          }
        }
      }
    `).then(result => {
        result.data.allWpPage.nodes.forEach((node) => {
            createPage({
                path: node.slug,
                component: path.resolve(`./src/templates/page.js`),
                context: {
                    // Variables here are passed to the template GraphQL query
                    databaseId: node.databaseId,
                },
            })
        })
    })
}