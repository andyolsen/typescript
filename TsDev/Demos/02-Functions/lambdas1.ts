// Declare a lambda. Note we could omit the return type here, cos TS can infer it.
const getFullName = (fn: string, ln: string): string => fn + ' ' + ln;

// Invoke lambda.
console.log(getFullName('Simon', 'Peter'));