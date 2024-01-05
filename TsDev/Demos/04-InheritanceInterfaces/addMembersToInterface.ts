interface MyInterface {
    a: string
    f1() : void;
}

interface MyInterface {
    b: string
    f2() : void;
}

function f(obj: MyInterface) {
    obj.a;
    obj.b;
    obj.f1();
    obj.f2();
} 