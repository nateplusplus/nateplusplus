import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <h2>Oh, hey there!</h2>
      <p>I'm working on some changes to this site so scaling back in the meantime.</p>
      <p>Maybe I can interest you in some of these fun links instead?</p>
    </section>
    <section>
      <h3>Places to stalk me</h3>
      <ul>
        <li>
          <a href="https://github.com/nateplusplus" target="_blank" rel="noopener noreferrer">GitHub madness</a>
        </li>
        <li>
          <a href="https://codepen.io/nateplusplus" target="_blank" rel="noopener noreferrer">Codepen doodles</a>
        </li>
        <li>
          <a href="https://www.instagram.com/nateplusplus/" target="_blank" rel="noopener noreferrer">Later-grams</a>
        </li>
        <li>
          <a href="https://twitter.com/nateplusplus" target="_blank" rel="noopener noreferrer">That account I sometimes remember</a>
        </li>
        <li>
          <a href="#nofb" target="_blank" style={{ textDecoration: 'line-through' }} rel="noopener noreferrer">Facebook</a> <small>Nah, you don't need that.</small>
        </li>
      </ul>
    </section>
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
