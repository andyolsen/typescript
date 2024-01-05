// This is parameter decorator. It makes use of a helper class named Logger, to keep track of all the @LogParam properties in all the methods in all the classes.
function LogParam(targetProto: any, methodName: string, paramIndex: number) {
    Logger.registerParam(targetProto, methodName, paramIndex);
}

// This is method decorator. It enhances a @LogParams-decorated method, to do the work of logging each of its @LogParam-decorated parameters.
function LogParams(targetProto: any, methodName: string, descriptor: PropertyDescriptor) {
	console.log("LogParams decorator called.");

	var originalMethod = descriptor.value;
	descriptor.value = function (...args: any[]) {
		// Use the Logger helper class to log the @LogParam-decorated parameters for this method.
		Logger.log(targetProto, methodName, args);
		let result = originalMethod.apply(this, args);
		return result;
	}
}

class Logger {
	
   	// This map contains a list of all the @LogParam-decorated parameters for methods in classes.
	// The key is a class type (i.e. prototype).
	// The value is another map:
	//	 The key is a method name.
	//   The value is an array of indices, for parameters that are decorated with @LogParam.
	private static mapLoggedParams:  Map<any, Map<string, number[]>> = new Map();

	// Register a particular @LogParam-decorated parameter for a particular method in a particular target type.
    static registerParam(targetProto: any, methodName: string, paramIndex: number): void {
	
		// Get the mapr of methodNames-to-loggedParamIndices for a target prototype.
		let loggedParams: Map<string, number[]> = Logger.mapLoggedParams.get(targetProto);
		if (!loggedParams) {
			loggedParams = new Map();
			Logger.mapLoggedParams.set(targetProto, loggedParams);
		}
		
		// Get the loggedParamIndices for a method.
		let paramIndexes: number[] = loggedParams.get(methodName);
		if (!paramIndexes) {
			paramIndexes = [];
			loggedParams.set(methodName, paramIndexes);
		}
		
		// Add the specified parameter to the list of  loggedParamIndices for a method.
		paramIndexes.push(paramIndex);    
	}

	// Do the work of logging all the @LogParam-decorated parameters for a target object, for a particular method.
	static log(target: any, methodName: string , paramValues: any[]): void {
        let loggedParams: Map<string, number[]> = Logger.mapLoggedParams.get(target);
        if (!loggedParams) {
            return;
        }
        let paramIndexes: number[] = loggedParams.get(methodName);
        if (!paramIndexes) {
            return;
        }
        for (const [index, paramValue] of paramValues.entries()) {
            if (paramIndexes.indexOf(index) != -1) {
                console.log(`Method ${methodName}, parameter at index ${index} has value ${paramValue}`);
            }
        }
    }
}
	
class SomeClass {

	@LogParams
	someMethod(param1: string, @LogParam param2: number, @LogParam param3: string) {
		console.log(`${param1} ${param2} ${param3}`); 
	}
}

// Client code.
let sc1 = new SomeClass();
sc1.someMethod("Hello", 42, "Wibble");