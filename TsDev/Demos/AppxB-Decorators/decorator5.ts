// This is a class decorator that wraps the original ctor with additional semantic work.
function TimestampedInstanceParameterizedAndWrapped(date: boolean, time: boolean) {
    console.log("TimestampedInstanceParameterizedAndWrapped decorator factory called.");

	// This statement returns a function that creates a new ctor. The new ctor augments the original ctor.
	return function <T extends { new(...args: any[]): {} }>(ctor: T) {
		console.log("TimestampedInstanceParameterizedAndWrapped decorator called.");
        
		// Define a new ctor function.
		let newCtor: any = function (...args) {
            
			// Call the original ctor, to create a bare-bones instance.
			let obj: any = new ctor(...args);            
			
			// Do some additional work on the instance.
			let ts = new Date();
			obj.tsDate = date? ts.getDate() : "[n/a]";
			obj.tsTime = time? ts.getSeconds() : "[n/a]";
			
			// Return the instance.
			return obj;
        }
		
		// The new ctor has the same prototype as the original ctor.
        newCtor.prototype = ctor.prototype;
		
		// Return the new ctor. This is what TypeScript will invoke, to instantiate decorated types.
        return newCtor;
	}
}

@TimestampedInstanceParameterizedAndWrapped(false, true)
class Alarm {
    what: string;
    constructor(what: string) {
        console.log("Alarm constructor called.");
		this.what = what;
    }
}

// Client code.
let a1 = new Alarm("Caffeine level low");
console.log(a1);
console.log(`a1 tsDate: ${a1['tsDate']}`);
console.log(`a1 tsTime: ${a1['tsTime']}`);

setTimeout(() => {
	let a2 = new Alarm("Caffeine level critical!");
	console.log(a2);
	console.log(`a2 tsDate: ${a2['tsDate']}`);
	console.log(`a2 tsTime: ${a2['tsTime']}`);
}, 5000);
