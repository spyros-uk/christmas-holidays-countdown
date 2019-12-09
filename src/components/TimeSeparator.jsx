import React from "react"
import styled from "styled-components"

export default function TimeSeparator() {
  return <StyledTimeSeparator>:</StyledTimeSeparator>
}

const StyledTimeSeparator = styled.div`
  align-self: center;

  margin-left: 1vw;
  margin-right: 1vw;

  font-size: var(--separator-font-size);
  color: white;
`
