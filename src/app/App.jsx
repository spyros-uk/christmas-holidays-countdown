import React from "react"

import GlobalStyle from "../components/GlobalStyle"
import Layout from "../components/Layout"
import CountDown from "../components/CountDown"
import Frame from "../components/Frame"
import Legend from "../components/Legend"

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Frame>
          <Legend />
          <CountDown />
        </Frame>
      </Layout>
    </>
  )
}
