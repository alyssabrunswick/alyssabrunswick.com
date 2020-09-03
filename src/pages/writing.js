import React from "react";
import { graphql } from "gatsby";
import Post from "../components/post";
import Layout from "../components/layout";
import styled from "styled-components";

const Blog = ({ data: { allPosts } }) => {
  const Grid = styled.div`
    display: grid;
    grid-template-columns:
      minmax(100px, 30vw)
      repeat(auto-fill, 200px) 20%;
  `;

  return (
    <Layout>
      <Grid>
        {allPosts.nodes.map((node) => (
          <Post data={node} />
        ))}
      </Grid>
    </Layout>
  );
};

export default Blog;
export const query = graphql`
  query {
    allPosts(
      filter: { status: { eq: "published" }, content_type: { eq: "article" } }
      sort: { fields: [publish_date], order: DESC }
    ) {
      nodes {
        title
        tags
        desc
        content_type
        status
        url
        read_time
        cover_image
        slug
        publish_date(fromNow: false)
      }
    }
  }
`;
