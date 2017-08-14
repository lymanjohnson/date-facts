const moment = require('moment');
const chalk = require('chalk');

// console.log(chalk.blue('Hello') + 'World' + chalk.red('!'));
// let time = moment();
// let year = time.year();
// let month = time.month();
// let day = time.days();
// let dayName = time.weekday();
// let hour = time.hours();
// let minute = time.minutes();
// let second = time.seconds();
// let leapyear = time.isLeapYear();
//
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(dayName);
// console.log(hour);
// console.log(minute);
// console.log(second);
//
// console.log(chalk.green("It is "+dayName+","));


let now = moment();
let date = now.format("dddd, MMMM DD YYYY, h:MM:SS a.");
let secondsOfDay = now.diff(moment().hours(0).minutes(0).seconds(0),"seconds");



console.log("It is",chalk.blue(date));
console.log("It is the",chalk.cyan(now.format("DDDo")),"day of the year.");
console.log("it is",chalk.green(secondsOfDay),"seconds into the day.");

if(now.isDST){console.log("It",chalk.green("is"),"daylight savings time.");}

else {console.log("It",chalk.red("is not"),"daylight savings time.");}

if(now.isLeapYear) {console.log("It",chalk.red("is"),"a leap year.");}

else {console.log("It",chalk.red("is not"),"a leap year.");}
