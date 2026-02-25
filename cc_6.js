class Employee {
    constructor(name,department) {
        this.name = name;
        this.department = department;
        }
    describe(){
        return `${this.name} works in ${this.department}`;
    }
};

class Manager extends Employee{
    constructor(name,department,teamSize){
        super(name,department);
        this.teamSize = teamSize;
    }
    describe(){
        return `${this.name} manages a team of ${this.teamSize} people in ${this.department}`;
    }
};

const employees = [
    new Employee("John Birck","IT"),
    new Employee("Kim Young", "HR"),
    new Employee("Monique Santer", "Finance"),
    new Employee("Tim Short", "HR"),
    new Employee("Logan Kurk", "IT"),
    new Employee("Harvew Specter", "Finance"),
    new Employee("Louis Lit", "IT"),
    new Employee("Donna Ferman", "Finance"),
    new Employee("Wanda Loner","IT")
];
for (const emp of employees) {
    console.log(emp.describe());
};

const managers = [
    new Manager("Carl Nickelson","IT",4),
    new Manager("Lara Croft","HR",2),
    new Manager("Frank Looney","Finance", 3)
];
for (const mgr of managers) {
    console.log(mgr.describe());
};

class Company {
    constructor(){
        this.employees = [];
    }
    addEmployee(employee){
        this.employees.push(employee);
    }
    listEmployees(){
        for (const employee of employees) {
            comsole.log(employee.describe());
        }
    }
}

