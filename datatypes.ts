// Type inference -- TS understands the type from the value it is assigned by
let fname = "Sharath";

// Cannot have a number in fname because fname is initialized with string
// fname = 10;

//----------- STRING -----------

let firstName : string = "Sharath Chander";
console.log("Original Name:" + firstName);

let newName : string = firstName.toUpperCase();
console.log("Upper case Name:" + newName);

//----------- NUMBER -----------

let age : number = 25;
age = 25.5;
// age = "25";

let ageIntFromString : number = parseInt("100");
console.log("Parse Int:" + ageIntFromString);

//----------- BOOLEAN -----------

/*
let isValid : boolean;
error TS2454: Variable 'isValid' is used before being assigned
console.log(isValid);
*/
let isValid : boolean = false;

// ----------- ARRAYS -----------

// Any array
let empList = [];
empList = ["Sharath", "Chander", "Pugazhenthi"];

// string array
let deptList : string[]; // OR 
// let deptList : Array<string>;

let numList : Array<number>;
numList = [1,2,3,4,5];
let filterNumberList : number[] = numList.filter(x => x > 3);
console.log("Filter Number List: " + filterNumberList);

let findNum = filterNumberList.find(x => x === 5);
console.log("Find number in list: " + findNum);

let sum = numList.reduce((acc, num) => acc + num);
console.log("Reduce function for finding sum: " + sum);

// ----------- ENUM -----------

// using const here will remove all the information about the enum when compiling
const enum Color {
    Red, Green, Blue
}

let c: Color = Color.Blue;

// ----------- TUPLES -----------
let swapNum : [number, number];

function swapNumber(num1:number, num2:number) : [number, number] {
    return [num2, num1];
}

swapNum = swapNumber(10, 20);
console.log("Swap number 1: " + swapNum[1]);

/**
 * Error will be thrown
 * console.log("Swap number 1: " + swapNum[12]);
 */

// ----------- ANY -----------

// Assign any value
let dept: any = "IT";
dept = 101;

function add(n1:any, n2: any) : any{
    return n1 + n2;
}

let resAdd = add(1,"Hello");
console.log("ADD: "+ resAdd);

