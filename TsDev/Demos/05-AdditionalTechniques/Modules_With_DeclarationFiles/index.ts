// This statement imports my-module.js and my-module.d.ts.
import { add, subtract, displayPoint } from './my-module'; 

let r1 = add(10, 20);
console.log(r1);

let r2 = subtract(10, 'wibble');
console.log(r2);

displayPoint({x:10, y:20});
displayPoint();
displayPoint({x:10, y: 20, color: 'red'});