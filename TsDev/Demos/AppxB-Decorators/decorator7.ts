// This is property decorator. It makes use of a helper class named Validator, to keep track of all the @NotNull properties in all the classes.
function NotNull(targetProto: any, propertyKey: string) {
    Validator.registerNotNull(targetProto, propertyKey);
}

class Validator {
	
	// This map contains a list of all the @NotNull properties per class type.
	// The key is a class type (i.e. prototype).
	// The value is an array of @NotNull properties in that class type.
    private static mapNonNullables: Map<any, string[]> = new Map();

	// Add a property to the list of @NotNull properties for a class type.
    static registerNotNull(targetProto: any, property: any): void {
        let nonNullables: string[] = Validator.mapNonNullables.get(targetProto);
        if (!nonNullables) {
            nonNullables = [];
            this.mapNonNullables.set(targetProto, nonNullables);
        }
        nonNullables.push(property);
    }

	// A separate method that the client can call, to perform a validation check on the properties for a target object.
    static validate(target: any): boolean {
        
		// Get the prototype for the target object, from our map of nullable info.
		let nonNullProps: string[] = Validator.mapNonNullables.get(Object.getPrototypeOf(target));
        if (!nonNullProps) {
            return true;
        }
		
		// Check all the @NotNull properties for the target object, to see if they are null (boo) or not (hooray).
        let hasErrors: boolean = false;
        for (const property of nonNullProps) {
            let value = target[property];
            if (!value) {
                console.error(property + " value cannot be null");
                hasErrors = true;
            }
        }
        return !hasErrors;
    }
}
	
class DbConn {

    @NotNull
	server: string;
	
	@NotNull
	db: string;

	username: string;
	password: string;
	
	constructor(server: string, db: string, username: string = null, password: string = null) {
		this.server = server;
		this.db = db;
		this.username = username;
		this.password = password;
	}
}

// Client code.
let db1 = new DbConn("server1", "db1");
console.log(db1);
console.log(`db1 valid? ${Validator.validate(db1)}`);

let db2 = new DbConn("server2", null);
console.log(db2);
console.log(`db2 valid? ${Validator.validate(db2)}`);
