import React from "react";
import styled from "styled-components";

export default function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: url("https://images.unsplash.com/photo-1495619744764-2cc11fcbe5f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80")
    no-repeat 50% 40%;
  background-size: cover;
  opacity: 0.9;
`;
