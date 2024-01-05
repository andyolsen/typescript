// This is a parameterized class decorator that extends the original ctor/class. 
// It's similar to the previous example, except that you can pass parameters into the decorator when you apply it.
function TimestampedInstanceParameterized(date: boolean, time: boolean) {
    console.log("TimestampedInstanceParameterized decorator factory called.");

	return function <T extends { new(...args: any[]): {} }>(ctor: T) {
		console.log("TimestampedInstanceParameterized decorator called.");
		return class extends ctor {
			tsDate = date? new Date().getDate() : "[n/a]";
			tsTime = time? new Date().getSeconds() : "[n/a]";
		}
	}
}

@TimestampedInstanceParameterized(false, true)
class Buzzer {
    what: string;
    constructor(what: string) {
        console.log("Buzzer constructor called.");
		this.what = what;
    }
}

// Client code.
let bz1 = new Buzzer("Coffeetime");
console.log(bz1);
console.log(`bz1 tsDate: ${bz1['tsDate']}`);
console.log(`bz1 tsTime: ${bz1['tsTime']}`);

setTimeout(() => {
	let bz2 = new Buzzer("Coffeetime again!");
	console.log(bz2);
	console.log(`bz2 tsDate: ${bz2['tsDate']}`);
	console.log(`bz2 tsTime: ${bz2['tsTime']}`);
}, 5000);
