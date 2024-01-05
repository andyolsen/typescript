function processData(str: string) : Promise<string> {

    console.log(new Date() + "init: " + str);

    let promise = task1(str, 3000)
		.then(res1 => {
			console.log(new Date() + "res1: " + res1);
			return task2(res1, 3000);
		})
		.then(res2 => {	
			console.log(new Date() + "res2: " + res2);
			return task3(res2, 3000);
		})
		.then(res3 => {
			console.log(new Date() + "res3: " + res3);
			return res3;
		});
	return promise;			
}

function task1(str: string, ms: number) : Promise<string> {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve(str.trim()), ms);
    });
}

function task2(str: string, ms: number) : Promise<string> {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve(str.toUpperCase()), ms);
    });
}

function task3(str: string, ms: number) : Promise<string> {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve("<<<" + str + ">>>"), ms);
    });
}

processData("   This is the day   ").then(res => {
  console.log(new Date() + "res:  " + res);
});