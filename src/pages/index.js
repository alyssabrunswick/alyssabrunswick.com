import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Alyssa Brunswick" />
    <h1>Welcome</h1>
    <h3>The site is in the works!</h3>
    <p>
      Email{" "}
      <a href="mailto:alyssa.brunswick@gmail.com">alyssa.brunswick@gmail.com</a>{" "}
      if you need me.{" "}
    </p>
  </Layout>
);

export default IndexPage;
