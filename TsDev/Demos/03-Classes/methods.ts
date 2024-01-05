class Employee {
    
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    } 

    payRise(amount: number) {
        this.salary += amount;
    }
  
    isHigherTax() {
        return this.salary >= 50000;
    }
}

let emp = new Employee('Tom', 10000);
emp.payRise(1000000);
console.log('Higher tax? ' + emp.isHigherTax());