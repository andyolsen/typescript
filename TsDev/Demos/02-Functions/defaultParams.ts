function calcTotalSalary(basic: number, 
                         bonus: number = 0.99, 
                         director: boolean = false) {

    let earnings = basic + bonus;
    
    if (director) {
        earnings *= 2;
    }
    return earnings;
}

const sal1 = calcTotalSalary(20_000);
console.log(sal1);

const sal2 = calcTotalSalary(20_000, 10_000);
console.log(sal2);

const sal3 = calcTotalSalary(20_000, 10_000, true);
console.log(sal3);

const sal4 = calcTotalSalary(20_000, undefined, true);
console.log(sal4);