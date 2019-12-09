import React from "react";
import styled from "styled-components";
import { H1, H3 } from "./Typography";

export default function TimeCounter({ count, units }) {
  return (
    <Time>
      <H1>{count}</H1>
      <H3>{units}</H3>
    </Time>
  );
}

const Time = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
