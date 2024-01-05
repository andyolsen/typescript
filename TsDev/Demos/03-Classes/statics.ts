class Employee {

    private static _taxThreshold = 50000;

    constructor(private _name: string, private _salary: number) {
        this._name = _name;
        this._salary = _salary;
    }   
  
    get isHigherTax() {
        return this._salary >= Employee._taxThreshold;
    }

    static get taxThreshold() {
        return Employee._taxThreshold;
    }

    get name(): string { 
        return this._name.toUpperCase();
    }
  
    set name(newName: string) { 
        this._name = newName;
    }
  
    get salary(): number {
        return this._salary
    }

    payRise(amount: number) {
        this._salary += amount;
    }
}

console.log(`Tax threshold is ${Employee.taxThreshold}`);
