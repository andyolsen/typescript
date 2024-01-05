interface StringArray {
    [index: number]: string;
}

let cities: StringArray = {};
cities[0] = 'Oslo';
cities[1] = 'London';
cities[2] = 'Copenhagen';
console.log(cities[2]);