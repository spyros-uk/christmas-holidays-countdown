import styled from "styled-components"

export { H1, H2, H3, H4 }

const commonStyling = `
  margin: 0;
  color: white
`

const H1 = styled.h1`
  ${commonStyling}
  margin-bottom: .5rem;

  font-size: var(--h1-font-size);
`

const H2 = styled.h2`
  ${commonStyling}

  font-size: var(--h2-font-size);
`

const H3 = styled.h3`
  ${commonStyling}

  font-size: var(--h3-font-size);
`

const H4 = styled.h3`
  ${commonStyling}

  font-size: var(--h3-font-size);
  font-style: italic;
`
