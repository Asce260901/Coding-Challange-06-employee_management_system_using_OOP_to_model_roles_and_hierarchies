//Employee Class
class Employee {
    constructor(name,department) {
        this.name = name;
        this.department = department;
        }
    describe(){
        return `Employee ${this.name} is part of the ${this.department} department.`;
    }
};

//Manager Class
class Manager extends Employee{
    constructor(name,department,teamSize){
        super(name,department);
        this.teamSize = teamSize;
    }
    describe(){
        return `${this.name} manages the ${this.department} department wich counts with ${this.teamSize} regular employees.`;
    }
};


//Sample Employees
const employees = [
    new Employee("John Birck","IT"),
    new Employee("Kim Young", "HR"),
    new Employee("Monique Santer", "Finance"),
    new Employee("Tim Short", "HR"),
    new Employee("Logan Kurk", "IT"),
    new Employee("Harvey Specter", "Finance"),
    new Employee("Louis Lit", "IT"),
    new Employee("Donna Ferman", "Finance"),
    new Employee("Wanda Loner","IT")
];
//for (const emp of employees) {
//    console.log(emp.describe());
//};


//Sample Managers
const managers = [
    new Manager("Carl Nickelson","IT",4),
    new Manager("Lara Croft","HR",2),
    new Manager("Frank Looney","Finance", 3)
];
//for (const mgr of managers) {
//    console.log(mgr.describe());
//};


//Company Class
class Company {
    constructor(){
        this.employees = [];
    }
    addEmployee(employee){
        this.employees.push(employee);
    }
    listEmployees(){
        for (const employee of this.employees) {
            console.log(employee.describe());
        }
        return "Finished";
    }
};


//Constant to reduce writing time
const theCompany = new Company();

//Adding Employees to Company
for (const emp of employees) {
    theCompany.addEmployee(emp);
};

//Adding Managers to Company
for (const mgr of managers) {
    theCompany.addEmployee(mgr);  
};

//Employee List (Including Managers)
theCompany.listEmployees();