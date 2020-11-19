class EmployeePayrollData
{
    id;
    name;
    salary;

    constructor(id,name,salary)
    {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    toString()
    {
        return "Id : "+this.id+",  Name : "+this.name+",  Salary : "+this.salary;
    }
}

let employeeData = new EmployeePayrollData();
employeeData.id = 1;
employeeData.name = "Ram";
employeeData.salary = 2000;

console.log(employeeData.toString());