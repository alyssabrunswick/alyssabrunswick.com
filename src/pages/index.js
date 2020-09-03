import React from "react";
import "../styles/styles.scss";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import { Coral3, Forest4 } from "../styles/tokens";

const IndexPage = () => {
  const Intro = styled.div`
    align-items: center;
    border: 10px solid ${Coral3};
    border-radius: 70% 70% / 80% 65%;
    color: ${Forest4};
    display: flex;
    flex-direction: column;
    height: calc(100vh - 300px);
    justify-content: center;
    margin: 0 auto;
    padding: 5%;
    width: 50%;
    text-align: center;

    h1 {
      font-size: 4em;
    }
  `;

  const MainLinks = styled.div``;

  return (
    <Layout>
      <SEO title="Alyssa Brunswick" />

      <Intro>
        <h1>Alyssa Brunswick</h1>
        <p>development | design | user experience</p>
      </Intro>
      <MainLinks>
        <p>Hi</p>
      </MainLinks>
    </Layout>
  );
};
export default IndexPage;
