const IS_PRESENT_FULL_TIME = 2;
const IS_PRESENT_PART_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empCheck = Math.floor(Math.random() * 10) % 3;
let empHrs = 0;

switch(empCheck)
{
    case IS_PRESENT_FULL_TIME:
       empHrs = FULL_TIME_HOURS;
       break;
    case IS_PRESENT_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    default:
        empHrs = 0;
        break;
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Daily Employee Wage : "+empWage);
