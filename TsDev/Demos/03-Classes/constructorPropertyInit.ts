class Employee {
    
    constructor(private name: string, private salary: number) {} 

    payRise(amount: number) {
        this.salary += amount;
    }
  
    isHigherTax() {
        return this.salary >= 50000;
    }
}

let emp = new Employee('Andy', 10000);
emp.payRise(1000000);
console.log('Higher tax? ' + emp.isHigherTax());