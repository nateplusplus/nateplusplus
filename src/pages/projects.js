import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <h3>All the weird stuff I've made</h3>
      <ul>
        <li>
          <a href="https://samplesaurus.com/" target="_blank" rel="noopener noreferrer">Samplesaurus</a>
        </li>
        <li>
          <a href="https://mydailyplanter.com/" target="_blank" rel="noopener noreferrer">Daily Planter</a>
        </li>
      </ul>
    </section>

  </Layout>
)

export default IndexPage
