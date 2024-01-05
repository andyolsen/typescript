// This is a simple class decorator.
// A class decorator is applied to the constructor of the class and can be used to observe, modify, or replace a class definition.
// This example adds a property to the constructor's prototype object, so all instances of the decorated class will have this property.
function Secure(ctor: Function) {
    console.log("Secure decorator called.");
    ctor.prototype.secure = true;
}

@Secure
class CreditCard {
    number: string;
	expiryDate: string;
	cvv: string;
	
    constructor(number: string, expiryDate: string, cvv: string) {
        console.log("CreditCard constructor called.");
		this.number = number;
		this.expiryDate = expiryDate;
		this.cvv = cvv;
    }
}

class Person {
    name: string;
    constructor(name: string) {
        console.log("Person constructor called.");
		this.name = name;
    }
}

// Client code.
let cc1 = new CreditCard("1234567890123456", "0723", "123");
console.log(cc1);
console.log(`cc1 secure? ${cc1['secure']}`);     // true

let p1 = new Person("Paul");
console.log(p1);
console.log(`p1 secure? ${p1['secure']}`);       // undefined

