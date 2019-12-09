import React from "react";
import styled from "styled-components";

export default function Frame({ children }) {
  return <StyledFrame>{children}</StyledFrame>;
}

const StyledFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  position: relative;

  border: 1vmin solid rgba(255, 255, 255, 0.6);
  width: 90vw;
  height: 90vh;
`;
