const moment = require("moment")
const functions = require("./function")
const chalkFile = require("./chalk")
const chalk = require("chalk")


console.log("It is " + chalkFile.blue(moment().format("ddd," + " MMM " + "Do" + " YYYY," + " hh:mm:ss a.")));
console.log("It is the " + chalkFile.magenta(moment().format("DDDo")) + (" day of the year."));
console.log("It is " + chalkFile.cyan(functions.secondsIntoDay()) + (" seconds into the day."));
console.log("It " + chalkFile.green(functions.myDST()) + " during Daylight Savings Time.");
console.log("It " + chalkFile.red(functions.leapYear()) + " a leap year.");
