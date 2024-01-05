interface FullTimeRemuneration {
    kind: 'fulltime',
    annualSalary: number
}

interface ContractRemuneration {
    kind: 'contract',
    dailyRate: number
}

type Remuneration = FullTimeRemuneration | ContractRemuneration;

function calcEffectiveSalary(r: Remuneration) {
    if (r.kind === 'fulltime') 
        return r.annualSalary;      
    else
        return r.dailyRate * 240;
}

const s1 = calcEffectiveSalary({kind: 'fulltime', annualSalary: 25000});
const s2 = calcEffectiveSalary({kind: 'contract', dailyRate: 200});

console.log(s1);
console.log(s2);