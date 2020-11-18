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
    empHrs = empHrs + dailyWorkingHour;    
}

// //UC7-A - Calculate Total Monthly Wage using Array Function
// let empWage = empDailyWageArray.reduce(function(a,b){ return a+b },0);  

//UC8 - Calculate Total Monthly Wage using Map
let empWage = Array.from(empDailyWageMap.values()).reduce(function(a,b){ return a+b },0);
console.log("Total Working Days : "+totalWorkingDays+"\nTotal working hours : "+empHrs+"\nDaily Employee Wage : "+empWage);

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