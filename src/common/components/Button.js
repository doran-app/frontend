import React from "react";
import styled from "styled-components";

export const SmallButton = (text) => {
  return (
    <>
      <Small>{text}</Small>
    </>
  );
};

const Small = styled.button`
  background: var(--dark-orange-color);
`;
