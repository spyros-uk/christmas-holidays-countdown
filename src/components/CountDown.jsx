import React, { useState, useEffect } from "react"
import styled from "styled-components"

import TimeSeparator from "../components/TimeSeparator"
import TimeCounter from "./TimeCounter"

import { getDateDifferenceFromNow } from "../model/date"

export default function CountDown() {
  const LEAVE_DATE = new Date("Dec 19 2019 18:00:00 GMT+0300")
  const [dateDifference, setDateDifference] = useState(
    getDateDifferenceFromNow(LEAVE_DATE)
  )

  useEffect(() => {
    const intervalId = setInterval(
      () => setDateDifference(getDateDifferenceFromNow(LEAVE_DATE)),
      1000
    )

    return () => clearInterval(intervalId)
  })

  return (
    <TimeStamp>
      <TimeCounter count={dateDifference.days} units="days" />
      <TimeSeparator />
      <TimeCounter count={dateDifference.hours} units="hours" />
      <TimeSeparator />
      <TimeCounter count={dateDifference.minutes} units="minutes" />
      <TimeSeparator />
      <TimeCounter count={dateDifference.seconds} units="seconds" />
    </TimeStamp>
  )
}

const TimeStamp = styled.div`
  display: flex;
`
