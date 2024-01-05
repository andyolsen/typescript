class CyclicBufferV1<Type> {

    private data: Type[];
    private currentPos = 0;

    constructor(private length: number) {
        this.data = new Array<Type>(length);
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

let cb1 = new CyclicBufferV1<number>(6);
cb1.insert(3)
   .insert(12)
   .insert(19)
   .insert(1)
   .insert(2)
   .insert(7)
   .insert(5)
   .insert(10) 

let elem0 = cb1.get(0);
console.log(`Element 0 is ${elem0}`);
cb1.display();