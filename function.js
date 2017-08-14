const moment = require("moment")

function secondsIntoDay() {
let hour = (moment().format("HH") * 3600)
let minute = (moment().format("mm") * 60)
let seconds = (moment().format("ss") * 1)
let secondsIntoDay = (hour + minute + seconds)
return (secondsIntoDay)
}

function myDST() {
  if(moment(["YYYY, MMM, ddd"]).isDST() == true){
    return ("is not")
  } else(moment(["YYYY, MMM, ddd"]).isDST() == false)
    return ("is")
}

function leapYear() {
  if(moment(["YYYY, MMM, ddd"]).isLeapYear() == true){
    return ("is")
  } else(moment(["YYYY, MMM, ddd"]).isLeapYear() == false)
  return ("is not")
}

module.exports = {
  leapYear: leapYear,
  myDST: myDST,
  secondsIntoDay: secondsIntoDay
}
