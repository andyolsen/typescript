async function processDataAsync(str: string) : Promise<string> {

    console.log(new Date() + "init: " + str);

    let res1 = await task1async(str, 3000);
    console.log(new Date() + "res1: " + res1);

    let res2 = await task2async(res1, 3000);
    console.log(new Date() + "res2: " + res2);

    let res3 = await task3async(res2, 3000);
    console.log(new Date() + "res3: " + res3);

    return res3;
}

async function task1async(str: string, ms: number) : Promise<string> {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve(str.trim()), ms);
    });
}

async function task2async(str: string, ms: number) : Promise<string> {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve(str.toUpperCase()), ms);
    });
}

async function task3async(str: string, ms: number) : Promise<string> {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve("<<<" + str + ">>>"), ms);
    });
}

processDataAsync("   This is the day   ").then(res => {
    console.log(new Date() + "res:  " + res);
});