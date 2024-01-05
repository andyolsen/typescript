class Employee {
    name: string = '';
    salary: number = -1;
}

let emp1 = new Employee();
emp1.name = "Paul";
emp1.salary = 42000;
console.log(`${emp1.name} earns ${emp1.salary}`);