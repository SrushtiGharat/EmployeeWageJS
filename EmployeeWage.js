const IS_PRESENT_FULL_TIME = 2;
const IS_PRESENT_PART_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_PER_MONTH = 20;
const MAX_WORKING_HRS_PER_MONTH = 100;

let empHrs = 0;
let totalWorkingDays = 0;
let day = 0;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();
let empDailyHourMap = new Map();
let fullTimeDays = new Array();
let partTimeDays = new Array();
let noWorkDays = new Array();

while(empHrs < MAX_WORKING_HRS_PER_MONTH && totalWorkingDays < WORKING_DAYS_PER_MONTH)
{
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let dailyWorkingHour = GetWorkingHrs(empCheck);
    if((dailyWorkingHour + empHrs) > MAX_WORKING_HRS_PER_MONTH)
    {
        break;
    }
    totalWorkingDays++;
    empDailyWageArray.push(CalculateWage(dailyWorkingHour));
    empDailyWageMap.set(totalWorkingDays,CalculateWage(dailyWorkingHour));
    empDailyHourMap.set(totalWorkingDays,dailyWorkingHour);
    empHrs = empHrs + dailyWorkingHour;    
}

console.log("UC - 7");
// //UC7-A - Calculate Total Monthly Wage using Array Function
let empWageUC7 = empDailyWageArray.reduce(function(a,b){ return a+b },0);
console.log("Total Working Days : "+totalWorkingDays+"\nTotal working hours : "+empHrs+"\nDaily Employee Wage : "+empWageUC7);

//UC7-B - Day to Daily Wage Mapping
console.log("Day to Wage Map : ");
let dayToWageMap = empDailyWageArray.map(function(wage){return ++day +" : "+wage}); 
console.log(dayToWageMap);

//UC7-C - Days when employee worked full - time
console.log("Full Working Days : ");
let fullWorkingDays = dayToWageMap.filter(fullTimeWorkingDay);
console.log(fullWorkingDays);

//UC7-D - First Occurence Of Full-Time Work
console.log("First Occurence Of Full Time Work : ");
let firstFullTimeDay = dayToWageMap.find(fullTimeWorkingDay);
console.log(firstFullTimeDay);

//UC7-E - Check if every element of Full-Time Work array contains Full-Time Wage
console.log("Checking Full - Time Work array....");
let checkFullTimeArray = fullWorkingDays.every(fullTimeWorkingDay);
console.log(checkFullTimeArray);

//UC7-F - Check for Part-Time Work
console.log("Checking for Part - Time Work....");
let partTimeWork = dayToWageMap.some(partTimeWorkingDay);
console.log(partTimeWork);

//UC7-G - Total Days Worked Out Of Monthly-Working Days
console.log("No of days employee worked Full-Time/Part-Time");
let employeeWorkDays = empDailyWageArray.filter(function(wage){
    if(wage != 0)
        return wage;
}).length;
console.log(employeeWorkDays);

console.log("UC - 8 With day to wage map");
//UC8 - Calculate Total Monthly Wage using Map
let empWageUC8 = Array.from(empDailyWageMap.values()).reduce(function(a,b){ return a+b },0);
console.log("Total Working Days : "+totalWorkingDays+"\nTotal working hours : "+empHrs+"\nDaily Employee Wage : "+empWageUC8);

console.log("UC - 9 With arrow function");
//UC9-A - Calculate Total working hours and Total salary using arrow functions
let empHrsUC9 = Array.from(empDailyHourMap.values()).reduce((total,daily) => {return total+daily});
let empWageUC9 = empDailyWageArray.filter(wage => wage > 0).reduce((total,daily) => {return total+daily});
console.log("Total Working Days : "+totalWorkingDays+"\nTotal working hours : "+empHrsUC9+"\nDaily Employee Wage : "+empWageUC9);

//UC9-B - Show Full-time,Part-time and No Working Days
empDailyHourMap.forEach((value,key) => 
{ 
    if(value == 8) {fullTimeDays.push(key);}
    else if(value == 4) {partTimeDays.push(key);}
    else {noWorkDays.push(key);}
}
)
console.log("Full-Time working days : "+fullTimeDays);
console.log("Part-Time working days : "+partTimeDays);
console.log("No working days : "+noWorkDays);


//Checking Full- Time Work day...."
function fullTimeWorkingDay(dayWage)
{
    return dayWage.includes("160");
}

//Checking Part- Time Work day...."
function partTimeWorkingDay(dayWage)
{
    return dayWage.includes("80");
}

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