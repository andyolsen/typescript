interface Loggable {
    log(msg: string) : void;
}

interface Serializable {
    serialize() : void;
}

class MyClass implements Loggable, Serializable {
    
    log(msg: string) : void {
        // Some implementation.
    }

    serialize() : void {
        // Some implementation.
    }
}