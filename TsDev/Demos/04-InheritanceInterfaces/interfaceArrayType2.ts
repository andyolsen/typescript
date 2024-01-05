interface StringDictionary {
    [index: string]: string;
}

let capitalCities: StringDictionary = {};

capitalCities['Norway'] = 'Oslo';
capitalCities['UK'] = 'London';
capitalCities['Denmark'] = 'Copenhagen';

console.log(capitalCities['Norway']);