import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {MenuItem, StyledHeader} from '../styles/components'

const Header = ({ siteTitle }) => (
  <StyledHeader>
  <Link to='/'>
    <img src="https://i.postimg.cc/6q3pg48v/Logo.png" alt="logoPlatzi"/>
  </Link>
  <nav>
    <ul>
      <MenuItem margin>
        <Link to='/'>productos</Link>
      </MenuItem>
      <MenuItem margin>
        <a href="www.platzi.com">platzi</a>
      </MenuItem>
      <MenuItem>
        <Link to='/cart'><span><img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt=""/></span></Link>
      </MenuItem>
    </ul>
  </nav>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header