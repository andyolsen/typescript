interface Loggable {
    log(msg: string) : void;
}

function useLoggableThing(loggable: Loggable) {
    loggable.log('Howdy');
}

// Implementing an interface in an object literal.
let obj = {
    log(msg: string) {
        console.log(`Object literal is logging message: ${msg}`);
    }
}
useLoggableThing(obj);

// Implementing an interface in a class.
class MyClass implements Loggable {
    log(msg: string) {
        console.log(`MyClass.log() is logging message: ${msg}`);
    }
}
useLoggableThing(new MyClass());