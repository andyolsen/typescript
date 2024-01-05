// This is a parameterized method decorator. The function is a factory that receives the decorator args, and returns a function to enhance the targeted method.
function Log(prefix: string, suffix: string) {
    console.log("Log decorator factory called.");

	// TypeScript will call this function whenever you apply the Log decorator to a method. The arguments here tell you about the decorated method.
    return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
		console.log("Log decorator called.");

        // This is the original method body.
		var originalMethod = descriptor.value;
        
		// Change the method body to do some additional cool thangs.
		descriptor.value = function (...args: any[]) {
			
			// Here's some pre-logging baby.
            console.log(`${prefix} Before invoking ${propertyKey.toString()} with args ${args} ${suffix}`);
            
			// Here we call the original method. WE DON'T HAVE TO DO THIS if we don't want to.
			let result = originalMethod.apply(this, args);
			
            // Here's some post-logging man.
			console.log(`${prefix} After  invoking ${propertyKey.toString()}, returned ${result} ${suffix}`);
            
			return result;
        }
    }
}

class Greeter {

	@Log("<<<", ">>>")
	hello(name: string) {
		return "hei hei " + name;
	}

	@Log("[[[", "]]]")
	bye(name: string) {
		return "bye bye " + name;
	}
}

// Client code.
let g1 = new Greeter();
console.log( g1.hello("Messi") );
console.log( g1.hello("Bale") );
console.log( g1.bye("Gylfi") );
console.log( g1.bye("Wilf") );
