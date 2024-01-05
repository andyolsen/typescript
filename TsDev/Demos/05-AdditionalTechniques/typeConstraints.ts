function shorter<Type extends { length: number }>(arg1: Type, arg2: Type) {

    console.log(`Arg lengths ${arg1.length}, ${arg2.length}`);

    return arg1.length < arg2.length ? arg1 : arg2;
}

const r1 = shorter("Thomas", "Emily");
const r2 = shorter([10, 20], [30, 40, 50]);
const r3 = shorter({width: 100, length: 200}, {width: 300, length: 400});

console.log(r1);
console.log(r2);
console.log(r3);