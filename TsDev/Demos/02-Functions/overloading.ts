// Overload #1.
function secondsToMidnight(secs: number) : number;

// Overload #2.
function secondsToMidnight(h: number, m: number, s: number) : number;

// Implementation.
function secondsToMidnight(secsOrH: number, m?: number, s?: number) : number {

    const NUM_SECS_IN_DAY = 60*60*24;

    if (m === undefined || s === undefined) {
        return NUM_SECS_IN_DAY - secsOrH;
    }
    else {
        return NUM_SECS_IN_DAY - (secsOrH*60*60 + m*60 + s); 
    }
}

// Client code.
const s1 = secondsToMidnight(82_800);      // 23:00:00
const s2 = secondsToMidnight(23, 49, 59);  // 23:49:59

console.log(s1);
console.log(s2);