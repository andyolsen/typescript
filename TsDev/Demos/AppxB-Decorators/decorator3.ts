// This is a class decorator that extends (i.e. subclasses) the original ctor/class, e.g. to add new properties to instances.
function TimestampedInstance<T extends {new(...args:any[]):{}}>(ctor: T) {
    console.log("TimestampedInstance decorator called.");

	// This syntax creates a class that extends the original constructor with a ts property.
    return class extends ctor {
        ts = new Date();
    }
}

@TimestampedInstance
class Car {
    make: string;
	model: string;
    constructor(make: string, model: string) {
        console.log("Car constructor called.");
		this.make = make;
		this.model= model;
    }
}

// Client code.
let c1 = new Car("Bugatti", "Divo");
console.log(c1);
console.log(`c1 ts: ${c1['ts']}`);

setTimeout(() => {
	let c2 = new Car("Mazda", "6");
	console.log(c2);
	console.log(`c2 ts: ${c2['ts']}`);
}, 5000);
