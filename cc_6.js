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

