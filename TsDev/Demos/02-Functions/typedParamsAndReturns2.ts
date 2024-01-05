// The function return type is inferred to be number.
function calcTotalSalary(basic: number, 
                         bonus: number, 
                         director: boolean) {

    let earnings = basic + bonus;

    if (director) {
        earnings *= 2;
    }
    return earnings;
}

// sal1 type is inferred to be number.
const sal1 = calcTotalSalary(20_000, 10_000, true);
console.log(typeof sal1);