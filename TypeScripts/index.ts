// let sum = 10;
// sum = 7
// let sub = 30_000
// console.log(sub,sum)
// console.log(1234345)

// let skill : (string|number)[]= ['sdf','asdf',234,234]

// import * as readline from 'readline';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter a character: ', (char: string) => {
//   console.log(`You entered: ${char}`);
//   rl.close();
// });



// type Callback = (num: number) => boolean;

// function myFilter(myArray: number[], callback: Callback): number {
//     const sum = myArray.reduce((acc, num) => acc + num, 0);

//     if (callback(sum)) {
//         return sum;
//     } else {
//         return 0; 
//     }
// }

// const isEven = (sum: number) => sum % 2 === 0;

// const myArray = [1, 2, 3, 4, 5];
// const result = myFilter(myArray, isEven);

// console.log(result);
// let s =0;
// myArray.map(elem => s +=elem)

// console.log(s)

//----------------------Basics-------------------------
// let name: string = "John";
// let age: number = 25;
// let isStudent: boolean = true;
// let numbers: number[] = [1, 2, 3, 4, 5];
// let person: [string, number] = ["Alice", 30];

//-----------function----
// function greet(name: string): string {
//     return `Hello, ${name}!`;
//   }
//   let greeting: string = greet("Alice");

//------------union types
// let value: string | number;
// value = "Hello";
// value = 42;

//--------optional 
// interface Car {
//     make: string;
//     model: string;
//     year?: number; 
//   }
//   let myCar: Car = { make: "Toyota", model: "Camry" };
  
//====================interface======================
// interface Person {
//     name: string;
//     age: number;
//   }
//   let user: Person = { name: "John", age: 25 };
  
//====================overloading======================
// class Class{
//    add(num1:number,num2:number):number;
//    add(num1:number,num2:number,num3:number):number;
//     add(num1:any,num2:any,num3?:any):any{
    
//         if(num3 !== undefined){
//             return num1+num2+num3
//         } else{
//             return num1+num2
//         }
//    }
// }
// const k = new Class()
// console.log(k.add(2,6,6))
// ------------------------overriding------------------------------
// class Car{
//     sound():void{
//         console.log('takakakaka')
//     }
// }
// class Cars extends Car{
//     sounds():void{
//         console.log('trunununun')
//     }
// }
// const ne = new Cars()
// ne.sounds()

//==========================return promise in typescript===========================================
// function fetchData(): Promise<string> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 2000);
//     });
// }
// fetchData().then(data => console.log(data));

//-----------------------------enums-------------------------------------------
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
// const move = Direction.Up;
// console.log(move); 

//==========================access modifiers===================================
// class Person {
//     public name: string;
//     private age: number;
  
//     constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age;
//     }
//     getAge(): number {
//       return this.age;
//     }
//   }
//   let john = new Person("John", 30);
//   console.log(john.name); 
//   console.log(john.getAge());

//--------------------------------generics
// function identity<T>(arg: T): T {
//     return arg;
//   }
//   let output1 = identity<string>("Hello");
//   let output2 = identity<number>(42);

    //=====================interface with class
    // interface Drivable {
    //     drive(): void;
    //   }
      
    //   class Car implements Drivable {
    //     drive(): void {
    //       console.log("The car is driving");
    //     }
    //   }
    //   let myCar = new Car();
    //   myCar.drive();

//--------------------readonly
// class Person {
//     readonly name: string;

//     constructor(name: string) {
//       this.name = name;
//     }
//   }
//   let john = new Person("John");

//===========================intersection type
// interface Name {
//     name: string;
//   }
//   interface Age {
//     age: number;
//   }
//   type PersonDetails = Name & Age;
//   let person: PersonDetails = { name: "John", age: 30 };
  //==========================utility operators========================

//---extract
//   type Colors = "red" | "green" | "blue";
// type PrimaryColors = Extract<Colors, "red" | "blue">; 

//----Exclude
// type Colors = "red" | "green" | "blue";
// type PrimaryColors = Exclude<Colors, "green">; // "red" | "blue"

//-----record
// type UserRoles = "admin" | "user" | "guest";

// const roles: Record<UserRoles, string> = {
//   admin: "Administrator",
//   user: "Regular User",
//   guest: "Guest User"
// };

//-----omit
// interface User {
//     name: string;
//     age: number;
//     email: string;
//   }
//   type UserWithoutEmail = Omit<User, "email">;
//   const user: UserWithoutEmail = { name: "John", age: 25 };
  
//-----pick
// interface User {
//     name: string;
//     age: number;
//     email: string;
//   }
//   type UserNameAndEmail = Pick<User, "name" | "email">;
//   const user: UserNameAndEmail = { name: "John", email: "john@example.com" };

//-----readonly
// interface User {
//     name: string;
//     age: number;
//   }
//   const user: Readonly<User> = { name: "John", age: 25 };
  
//----required
// interface User {
//     name?: string;
//     age?: number;
//   }
//   const user: Required<User> = { name: "John", age: 25 };
  
//-----partial
// interface User {
//     name: string;
//     age: number;
//   }
//   const updateUser = (user: User, updates: Partial<User>) => {
//     return { ...user, ...updates };
//   };
//   let user = { name: "John", age: 25 };
//   let updatedUser = updateUser(user, { age: 26 });
  //  m