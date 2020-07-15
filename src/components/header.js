import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SvgImageText from '../scripts/svgText';


class Header extends React.Component {
  constructor( props ) {
    super(props)
  }

  componentDidMount() {
    new SvgImageText();
  }

  render () {
    return(
      <>
        <header>
          <Link to="/">
            <svg viewBox="0 0 1550 300" preserveAspectRatio="xMidYMid meet">
              <defs>
                <mask id="text-mask-1">
                  <text id="bgText" x="0" y="270" shapeRendering="geometricPrecision" fill="#FFF">{this.props.siteTitle.toUpperCase()}</text>
                </mask>
              </defs>
              <g mask="url(#text-mask-1)">
                <image id="img1" href="https://source.unsplash.com/sp-p7uuT0tw/1920x1000/" width="150%" />
                <image id="img2" className="is-transparent" href="https://source.unsplash.com/featured/1920x1000/?nature,water" width="150%" />
                <image id="img3" className="is-transparent" href="https://source.unsplash.com/featured/1920x1000/?architecture" width="150%" />
                <image id="img4" className="is-transparent" href="https://source.unsplash.com/featured/1920x1000/?textures-patterns" width="150%" />
                <image id="img5" className="is-transparent" href="https://source.unsplash.com/featured/1920x1000/?experimental" width="150%" />
              </g>
            </svg>
          </Link>
        </header>
        <nav>
          <ul id="menubar" role="menubar">
            <li role="none">
              <Link id="one" className="menu-item" to="/" role="menuitem">Welcome</Link>
            </li>
            <li role="none">
              <Link id="two" className="menu-item" to="/social" role="menuitem">Social</Link>
            </li>
            <li role="none">
              <Link id="three" className="menu-item" to="/projects" role="menuitem">Projects</Link>
            </li>
            <li role="none">
              <Link id="four" className="menu-item" to="/bookmarks" role="menuitem">Bookmarks</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
