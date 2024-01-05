class Employee {
    
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }   
}

let emp1 = new Employee("Lydia", 43000);
console.log(`${emp1.name} earns ${emp1.salary}`);