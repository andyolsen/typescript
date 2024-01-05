interface Predicate {
    (arg1: number): boolean;
}

function findIndex(array: number[], f: Predicate) {
    for (let i = 0; i < array.length; i++) {
        if (f(array[i]))
            return i;
    }
    return -1;
}

let i1 = findIndex([3, 12, 19, 1, 2, 7], n => n % 2 === 0);
let i2 = findIndex([3, 12, 19, 1, 2, 7], n => n % 5 === 0);

console.log(i1);
console.log(i2);