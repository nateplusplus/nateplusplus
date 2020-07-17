import React from "react"

import SEO from "../components/seo"

const SocialPage = () => (
  <>
    <SEO title="Home" />
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
  </>
)

export default SocialPage
