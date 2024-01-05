async function processData3(str: string) : Promise<Array<string>> {

    console.log(new Date() + "initial:   " + str);

    let results = await Promise.all([
		task4async(str, 3000),
		task5async(str, 3000),
		task6async(str, 3000)
	]);
    console.log(new Date() + "results:   " + results);
    return results;
}

async function task4async(str: string, ms: number) : Promise<string> {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve(str.trim()), ms);
    });
}

async function task5async(str: string, ms: number) : Promise<string> {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve(str.toUpperCase()), ms);
    });
}

async function task6async(str: string, ms: number) : Promise<string> {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve("<<<" + str + ">>>"), ms);
    });
}

processData3("   This is the day   ").then(endResult => {
    console.log(new Date() + "endResult: " + endResult);
});