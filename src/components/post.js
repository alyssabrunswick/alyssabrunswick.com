import React from "react";
import { Link } from "gatsby";
import { parseImageUrl } from "notabase/src/utils";
import styled from "styled-components";
import { Forest3, NeutralDark, HeadlineStack } from "../styles/tokens";

export default ({ data }) => {
  const Post = styled(Link)`
    border: 4px solid ${Forest3};
    padding: 8px;
    color: ${NeutralDark};
    text-decoration: none;

    h2 {
      font-family: ${HeadlineStack};
      color: ${Forest3};
    }
  `;

  const Tags = styled.div`
    font-size: 0.75rem;
  `;

  const {
    title,
    tags,
    cover_image,
    publish_date,
    desc,
    read_time,
    url,
    // slug,
  } = data;
  let coverimageURL = parseImageUrl(cover_image[0], 1000);

  return (
    <Post to={url}>
      <img alt={`${title} cover`} src={coverimageURL} />
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: desc }}></p>
      <Tags>
        Tags: {tags && tags.join(", ")} • Published: {publish_date} •{" "}
        {read_time} MIN READ
      </Tags>
    </Post>
  );
};
