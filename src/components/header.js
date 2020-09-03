import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Header = ({ siteTitle }) => {
  const Header = styled.header`
    display: grid;
    grid-gap: 32px;
    grid-template-columns: 35% 62%;
    margin-bottom: 24px;
    padding: 24px;
  `;

  const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;

    ul {
      align-items: center;
      display: flex;
      justify-content: space-between;
      width: 50%;
    }
  `;

  return (
    <Header>
      <Link to="/">{siteTitle}</Link>
      <Nav>
        <ul className="list-unstyled">
          <li>
            <Link to="/writing">Writing</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/uses">Uses</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Nav>
    </Header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
