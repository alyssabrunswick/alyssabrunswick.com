/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 144px);
    width: clamp(300px, 90vw, 95vw);
    margin: 0 auto;
  `;
  const Footer = styled.footer``;

  return (
    <div className="layout">
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer>© {new Date().getFullYear()}</Footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
