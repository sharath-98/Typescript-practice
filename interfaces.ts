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

// Object Destructuring
let {name : soundName} : User = sound;

console.log("Destructuring bash: " + soundName );

export interface Login{
    login():User;
}

// Array destructuring 
let [user1, user2, ...restUsers]: User[] = [
    { name: "Soundarya", age: 23, id: 3 },
    { name: "Sharath", age: 23,  id: 2  },
    { name: "Vishal",  age: 23, id: 1  }
];

console.log(user1);
console.log("\nREST USERS:");
console.log(restUsers);

let resFilter = restUsers.filter(user => user.id > 0);
console.log("\nFILTER: ");
console.log(resFilter);



