const IS_PRESENT_FULL_TIME = 2;
const IS_PRESENT_PART_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_PER_MONTH = 20;
const MAX_WORKING_HRS_PER_MONTH = 100;

let totalEmpHrs = 0;
let totalEmpWage = 0;
let totalWorkingDays = 0;

let empDailyHrWageArray = new Array();

while(totalEmpHrs < MAX_WORKING_HRS_PER_MONTH && totalWorkingDays < WORKING_DAYS_PER_MONTH)
{
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let dailyWorkingHour = GetWorkingHrs(empCheck);
    if((dailyWorkingHour + totalEmpHrs) > MAX_WORKING_HRS_PER_MONTH)
    {
        break;
    }
    totalWorkingDays++;
    totalEmpHrs = totalEmpHrs+dailyWorkingHour;
    empDailyHrWageArray.push(
        {
            day : totalWorkingDays,
            dailyHr : dailyWorkingHour,
            dailyWage : CalculateWage(dailyWorkingHour)
        }
    )
}
console.log(empDailyHrWageArray);

//UC11-A/UC7-A - Calculate total wage and total hours worked
totalEmpWage = empDailyHrWageArray.filter(dailyHrWage => dailyHrWage.dailyWage > 0).reduce((totalWage,wage) => totalWage = totalWage+wage.dailyWage,0);
totalEmpHrs = empDailyHrWageArray.filter(dailyHrWage => dailyHrWage.dailyHr > 0).reduce((totalHr,hr) => totalHr = totalHr + hr.dailyHr,0);

console.log("Total Employee Wage : "+totalEmpWage);
console.log("Total Employee Hours"+totalEmpHrs);

//UC11-B/UC7-C - Show full working days using foreach
console.log("Full-Time Working Days : ");
empDailyHrWageArray.filter(dailyHrWage => dailyHrWage.dailyHr == 8).forEach(
    dailyHrWage => console.log(dailyHrWage.day));

//UC11-C - Show part working days using map
console.log("Part-Time Working Days : ");
let partTimeDays = empDailyHrWageArray.filter(dailyHrWage => dailyHrWage.dailyHr == 4).map(
    dailyHrWage => {return dailyHrWage.day});
console.log(partTimeDays.toString());

//UC11-D - No working days
console.log("No Working Days : ");
let noWorkDays = empDailyHrWageArray.filter(dailyHrWage => dailyHrWage.dailyHr == 0).map(
    dailyHrWage => {return dailyHrWage.day});
console.log(noWorkDays.toString());

//UC7-B - Show Day With Daily Wage using map
console.log("Day and Wage :");
let dayWage = empDailyHrWageArray.map(dailyHrWage => {return dailyHrWage.day+" : "+dailyHrWage.dailyWage});
console.log(dayWage);

//UC7-D - First occurence of full-time wage
console.log("First full - time work day : ");
let firstFullTime = empDailyHrWageArray.find(dailyHrWage => dailyHrWage.dailyHr == 8);
console.log(firstFullTime);

//UC7-G - No of days employee worked
let count = empDailyHrWageArray.length - noWorkDays.length;
console.log("No of days employee worked : "+count);

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

function CalculateWage(empHrs)
{
    return empHrs*WAGE_PER_HOUR;
}