import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <h3>Cool web dev stuff</h3>
      <ul>
        <li>
          <a href="http://www.uigoodies.com/" target="_blank" rel="noopener noreferrer">UI Goodies</a>
        </li>
      </ul>
    </section>

  </Layout>
)

export default IndexPage
