// ----------- Named Functions, optional and default param -----------

function add(a: number, b: number = 2, k? : number) : number {
    let c:number;
    k? c = a + b + k: c = a + b;
    console.log("Add: ", c);
    return c;
}

const addition = add(1,2);

// ----------- Void function -----------
function printHello(){
    console.log("hello word");
}

// ----------- Arrow function -----------
const subtract = (n1: number, n2: number) : number => {
    let c = n1 - n2;
    console.log("Subtract: ", c);
    return c;
}
const subtraction = subtract(1,2);

// ----------- REST Param function -----------

function add2(n1: number, n2:number, ...n3:number[]):number{
    return n1 + n2 + n3.reduce((acc, num) => acc + num);
}

console.log("REST param function: ", add2(1,2,...[1,2,3,4,5] ));
console.log("REST param function: ", add2(1,2,1,2,3,4,5));

// ----------- GENERIC function -----------

function getItems<T>(items: T[]): T[]{
    return new Array<T>().concat(items);
}

let concatNum = getItems([1,2,3,4]);
console.log("Generics: " + concatNum);
