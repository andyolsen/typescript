function calcTotalSalary(basic: number, 
                         bonus: number = 0.0, 
                         director: boolean = false,
                         offshoreSlushFund?: number) {

    let earnings = basic + bonus;
    
    if (offshoreSlushFund !== undefined) {
        earnings += offshoreSlushFund;
    }

    if (director) {
        earnings *= 2;
    }

    return earnings;
}

const sal1 = calcTotalSalary(20_000, 10_000, false);
console.log(sal1);

const sal2 = calcTotalSalary(20_000, 10_000, false, 5_000_000);
console.log(sal2);