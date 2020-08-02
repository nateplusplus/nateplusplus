import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"

const IndexPage = () => {
  const pageData = useStaticQuery(graphql`
    query WPPageContentQuery {
      wpPage(slug: {eq: "homepage"}) {
        content
      }
      allWpPage(filter: {status: {eq: "publish"}, isFrontPage: {eq: false}}) {
        nodes {
          databaseId
          slug
          title
          content
        }
      }
    }
  `)

  return(
    <>
      <SEO title="Home" />
      <section dangerouslySetInnerHTML={{ __html : pageData.wpPage.content }} ></section>
      {/* <section>
        <p>Testing auto-generated Gatsby pages from WPGraphQL:</p>
        { pageData.allWpPage.nodes.map((node) => (
            <Link to={node.slug}>{node.title}</Link>
        )) }
      </section> */}
    </>
  )
}

export default IndexPage
