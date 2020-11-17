const IS_PRESENT_FULL_TIME = 2;
const IS_PRESENT_PART_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empCheck = Math.floor(Math.random() * 10) % 3;

let empHrs = GetWorkingHrs(empCheck);

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Daily Employee Wage : "+empWage);

function GetWorkingHrs(empCheck)
{
    switch(empCheck)
    {
    case IS_PRESENT_FULL_TIME:
       return FULL_TIME_HOURS;
       break;
    case IS_PRESENT_PART_TIME:
        return PART_TIME_HOURS;
        break;
    default:
        return 0;
        break;
    }
}