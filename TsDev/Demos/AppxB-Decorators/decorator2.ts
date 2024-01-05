// This is a parameterized class decorator.
// A parameterized class decorator acts as a factory. It receives arguments from an applied decorator and returns the function to execute, to do the decoration work. 
function SecureParameterized(encrypt: boolean, digest: boolean) {
    console.log("SecureParameterized decorator factory called.");
    
		return function (ctor: Function) {
			console.log("SecureParameterized decorator called.");
			ctor.prototype.encrypt = encrypt;
			ctor.prototype.digest = digest;
		}	
}

@SecureParameterized(true, true)
class Passport {
    name: string;
	number: string;
	
    constructor(name: string, number: string) {
        console.log("Passport constructor called.");
		this.name = name;
		this.number = number;
    }
}

@SecureParameterized(false, true)
class Basket {
    name: string;
	value: number;
	
    constructor(name: string, value: number) {
        console.log("Basket constructor called.");
		this.name = name;
		this.value = value;
    }
}

// Client code.
let pp1 = new Passport("Mary", "123456789");
console.log(pp1);
console.log(`pp1 encrypt? ${pp1['encrypt']}`);
console.log(`pp1 digest? ${pp1['digest']}`);

let pp2 = new Passport("Joe", "987654321");
console.log(pp2);
console.log(`pp2 encrypt? ${pp2['encrypt']}`);
console.log(`pp2 digest? ${pp2['digest']}`);

let b1 = new Basket("Emily", 123.45);
console.log(b1);
console.log(`b1 encrypt? ${b1['encrypt']}`);
console.log(`b1 digest? ${b1['digest']}`);

let b2 = new Basket("Tom", 543.21);
console.log(b2);
console.log(`b2 encrypt? ${b2['encrypt']}`);
console.log(`b2 digest? ${b2['digest']}`);
