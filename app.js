const moment = require('moment');
const chalk = require('chalk');

// console.log(chalk.blue('Hello') + 'World' + chalk.red('!'));
let time = moment();
let year = time.years();
let month = time.months();
let day = time.days();
let dayName = time.weekday();
let hour = time.hours();
let minute = time.minutes();
let second = time.seconds();
let leapyear = time.isLeapYear();

console.log(year);
console.log(month);
console.log(day);
console.log(dayName);
console.log(hour);
console.log(minute);
console.log(second);
