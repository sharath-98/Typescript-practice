export interface User{
    name : string;
    age : number;
    id : number;
    email? : string;
}

interface Employees extends User{
    salary: number
}

let sound: User = {
    name: "Soundarya",
    age: 23,
    id: 0
};

console.log("User interface: Sound => ")
console.log(sound);

let sharath: Employees = {
    salary: 0,
    name: "Sharath",
    age: 25,
    id: 0
}
sharath.age = 23;
sharath.id = 1;

console.log("Employees interface: Sharath => ")
console.log(sharath);


export interface Login{
    login():User;
}


