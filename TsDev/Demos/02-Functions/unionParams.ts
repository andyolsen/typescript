function displayAgeNextBirthday(ageParam: string | number) {
    
    let age: number;

    if (typeof ageParam === 'string') {
        age= Number.parseInt(ageParam);
    }
    else {
        age = ageParam;
    }
    console.log(`Age next birthday: ${age + 1}`)
}  

displayAgeNextBirthday('60');
displayAgeNextBirthday(60);