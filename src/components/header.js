import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#86A397`,
      padding: `1rem`
    }}
  >
    <h1 style={{ margin: `1rem 1rem .5rem` }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
