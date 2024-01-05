interface Shape {
    cx: number;   // Required.
    cy: number;   // Required
    w:  number;   // Required.
    h?: number;   // Optional.
}

function drawShape(s: Shape) {
    if (s.h === undefined) 
        console.log(`Origin (${s.cx}, ${s.cy}), width and height ${s.w}`);
    else
        console.log(`Origin (${s.cx}, ${s.cy}), width ${s.w}, height ${s.h}`);
}


// Implementing an interface in an object literal
drawShape({cx: 10, cy: 20, w: 100});                // OK
drawShape({cx: 10, cy: 20, w: 100, h: 200});        // OK

drawShape({cx: 10, cy: 20});                        // Error
drawShape({cx: 10, cy: 20, w: 100, color: 'red'});  // Error


// Implementing an interface in a class.
class Circle implements Shape {
    constructor(
        public cx: number, 
        public cy: number, 
        public w:  number) {}   
}
drawShape(new Circle(10, 20, 100));

class Rectangle implements Shape {
    constructor(
        public cx: number, 
        public cy: number, 
        public w:  number, 
        public h: number) {}   
}
drawShape(new Rectangle(10, 20, 100, 200));