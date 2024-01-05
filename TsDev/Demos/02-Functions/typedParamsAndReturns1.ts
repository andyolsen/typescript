function calcTotalSalary(basic: number, 
                         bonus: number, 
                         director: boolean) : number {

    let earnings: number = basic + bonus;

    if (director) {
        earnings *= 2;
    }
    return earnings;
}

// This call is OK.
const sal1 = calcTotalSalary(20_000, 10_000, true);

// This call is not OK - wrong types of parameters.
const sal2 = calcTotalSalary(20_000, 10_000, "true");

// This call is not OK - wrong number of parameters.
const sal3 = calcTotalSalary(20_000, 10_000);