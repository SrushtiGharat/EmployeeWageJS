const IS_PRESENT_FULL_TIME = 2;
const IS_PRESENT_PART_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_PER_MONTH = 20;
const MAX_WORKING_HRS_PER_MONTH = 100;

let empHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArray = new Array();

while(empHrs < MAX_WORKING_HRS_PER_MONTH && totalWorkingDays < WORKING_DAYS_PER_MONTH)
{
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let dailyWorkingHour = GetWorkingHrs(empCheck);
    if((dailyWorkingHour + empHrs) > MAX_WORKING_HRS_PER_MONTH)
    {
        break;
    }
    empDailyWageArray.push(CalculateWage(dailyWorkingHour));
    empHrs = empHrs + dailyWorkingHour;
    totalWorkingDays++;
}

let empWage = CalculateWage(empHrs);
console.log("Total Working Days : "+totalWorkingDays+"\nTotal working hours : "+empHrs+"\nDaily Employee Wage : "+empWage);

//Calculate Wage
function CalculateWage(empHrs)
{
    return empHrs*WAGE_PER_HOUR;
}

//Get Daily Working Hour
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