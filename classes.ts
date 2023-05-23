import {Login, User} from './interfaces';

interface Address{
    street: string;
    city: string;
    zipcode: string;
}

class Employee implements Login{
    #id : number;
    protected name: string;
    protected address: Address;

    /**
        Employee(){}
     */
    constructor(id:number, name:string, address:Address){
        this.#id = id;
        this.name = name;
        this.address = address;
    }
    
    login(): User {
        let soundarya : User = {
            name: "Soundarya",
            age: 23,
            id: 1
        } 
        return soundarya;
    }

    
    
    get empId() : number {
        return this.#id;
    }

    
    set empId(v : number) {
        this.#id = v;
    }
    
    // Static data methods
    static getString() : string{
        return "hello";
    }
    
    getNameWithAddr(): string{
        // return this.name + " " + this.address;
        return `${this.name} ${this.address}`;
    }
}

class Manager extends Employee{
    constructor(id:number, name:string, address:Address){
        super(id, name, address);
    }

    changeAddress(newAddr:Address){
        this.address = newAddr;
    }

    getNameWithAddr(): string{
        return `${this.name} is a manager from ${this.address}`;
    }
}

/**
    john.id = 1;
    john.name = "John";
    john.address = "Milwaukee";
 */

let john = new Employee(1, "John", {street: "Oakland" ,city: "Milwaukee", zipcode:"53211"});
console.log(john.login());
console.log("getNameWithAddr(): " + john.getNameWithAddr());
console.log("GETTER ID: "+ john.empId);
john.empId = 10001;
console.log("GETTER ID: "+ john.empId);
console.log("getString(): " + Employee.getString() + "\n");
console.log("Interface value Login: \n");



let mike = new Manager(2, "mike", {street: "Water st" ,city: "Madison", zipcode:"50211"});
console.log(mike);
console.log("getNameWithAddr(): " + mike.getNameWithAddr());
