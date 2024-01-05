function getFullName(fname: string, ...othernames: string[]) {
    if (othernames.length === 0)
        return fname;
    else 
        return fname + ' ' + othernames.join(' ');
}

const fullName1 = getFullName('Andy');
console.log(fullName1);

const fullName2 = getFullName('Matthew', 'Mark', 'Luke', 'John');
console.log(fullName2);