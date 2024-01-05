function min<Type>(arr: Type[]): Type | undefined {

    console.log(`Called min() with an array of ${typeof arr[0]}`);

    let smallest: Type | undefined = arr[0];    
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

const r1 = min<number>([3, 12, 19, 1, 2, 7]);
const r2 = min([3, 12, 19, 1, 2, 7]);
const r3 = min(['Huey', 'Lewey', 'Dewey']);
const r4 = min([]);

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);