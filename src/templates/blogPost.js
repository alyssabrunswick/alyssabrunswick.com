import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { parseImageUrl } from "notabase/src/utils";

export default ({ data }) => {
  const {
    posts: { title, tags, publish_date, html, cover_image, read_time },
  } = data;
  let coverimageURL = parseImageUrl(cover_image[0], 1000);

  return (
    <Layout>
      <div id="main">
        <img alt={`${title} cover`} src={coverimageURL} />
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div>
          {" "}
          Tags: {tags && tags.join(", ")} • Published: {publish_date} •{" "}
          {read_time} MIN READ
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    posts(slug: { eq: $slug }) {
      html
      title
      tags
      publish_date
      url
      desc
      color
      cover_image
      read_time
    }
  }
`;
