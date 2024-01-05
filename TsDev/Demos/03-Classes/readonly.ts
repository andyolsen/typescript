class Circle {

    readonly radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
}

let myCircle = new Circle(10);
console.log(myCircle.radius);   // OK
myCircle.radius = 42;           // Error