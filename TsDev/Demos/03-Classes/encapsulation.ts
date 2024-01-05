class Employee {
    
    private name: string;
    private salary: number;

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

let emp = new Employee('Andy', 10000);
console.log(emp.name);   // Error!
emp.salary = 10000000;   // Error (sadly 😄)
