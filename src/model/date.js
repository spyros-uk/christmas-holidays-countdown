const SECONDS = 1000
const MINUTES = SECONDS * 60
const HOURS = MINUTES * 60
const DAYS = HOURS * 24

export { getDateDifferenceFromNow }

function getDateDifferenceFromNow(endDate) {
  const difference = endDate.getTime() - new Date().getTime()

  return {
    days: getTwoDigitNumber(getRemainingDays(difference)),
    hours: getTwoDigitNumber(getRemainingHours(difference)),
    minutes: getTwoDigitNumber(getRemainingMinutes(difference)),
    seconds: getTwoDigitNumber(getRemainingSeconds(difference))
  }
}

function getRemainingDays(dateDiff) {
  return Math.floor(dateDiff / DAYS)
}

function getRemainingHours(dateDiff) {
  return Math.floor((dateDiff % DAYS) / HOURS)
}

function getRemainingMinutes(dateDiff) {
  return Math.floor((dateDiff % HOURS) / MINUTES)
}

function getRemainingSeconds(dateDiff) {
  return Math.floor((dateDiff % MINUTES) / SECONDS)
}

function getTwoDigitNumber(num) {
  return num.toString().padStart(2, "0")
}
