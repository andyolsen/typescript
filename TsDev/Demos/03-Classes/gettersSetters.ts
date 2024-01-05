class Employee {

    constructor(private _name: string, private _salary: number) {}   
  
    get name() { 
        return this._name.toUpperCase();
    }
  
    set name(newName: string) { 
        this._name = newName;
    }
  
    get salary() {
        return this._salary;
    }

    get isHigherTax() {
        return this._salary >= 50000;
    }

    payRise(amount: number) {
        this._salary += amount;
    }
}

let emp = new Employee('Thomas', 10000);
emp.name = 'Tom';
console.log(`${emp.name}, ${emp.salary}, ${emp.isHigherTax}`);