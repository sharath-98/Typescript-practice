class Employee{
    #id : number;
    protected name: string;
    protected address: string;

    /**
        Employee(){}
     */
    constructor(id:number, name:string, address:string){
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    
    public get empId() : number {
        return this.#id;
    }

    
    public set empId(v : number) {
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
    constructor(id:number, name:string, address:string){
        super(id, name, address);
    }

    changeAddress(newAddr:string){
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

let john = new Employee(1, "John", "Milwaukee");
console.log(john);
console.log("getNameWithAddr(): " + john.getNameWithAddr());
console.log("GETTER ID: "+ john.empId);
john.empId = 10001;
console.log("GETTER ID: "+ john.empId);
console.log("getString(): " + Employee.getString() + "\n");


let mike = new Manager(2, "mike", "Milwaukee");
console.log(mike);
console.log("getNameWithAddr(): " + mike.getNameWithAddr());
