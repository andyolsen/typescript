class CyclicBufferV2<Type> {

    private data: Type[];
    private length;
    private currentPos = 0;

    constructor(...data: Type[]) {
        this.data = new Array<Type>(length);
        for (let i = 0; i < data.length; i++) {
            this.data[i] = data[i];
        }
        this.length = data.length;
    }

    insert(value: Type) {
        this.data[this.currentPos] = value;
        if (++this.currentPos == this.length) {
            this.currentPos = 0;
        }
        return this;
    }

    get(index: number) : Type {
        return this.data[index];
    } 

    display() {
        for (let e of this.data) {
            console.log(e);
        }
    }
}

let cb2 = new CyclicBufferV2(3, 12, 19, 1, 2, 7);
cb2.insert(5);
cb2.insert(10);

let elem0 = cb2.get(0);
console.log(`Element 0 is ${elem0}`);
cb2.display();