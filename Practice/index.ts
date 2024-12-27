// ------------------------------------------------------------------

// let a: number | string;
// a = "Hello";
// a = 23;
// console.log(a);

// ------------------------------------------------------------------

// const func = (n: number, m: number): number => {
//   console.log(n, m);
//   return n * m;
// };
// console.log(func(2, 3));

// ------------------------------------------------------------------

// type FunType = (n: number, m: number)=> number
// const func :FunType = (n, m) => {
//     return n * m;
//   };
// console.log(func(2, 3));

// ------------------------------------------------------------------

// const arr:Array<string> = ["Anirudh", "Rahul", "Krishna"]

// arr.forEach(((item)=> item.toUpperCase() ))
// console.log(arr.toString())

// const uppercasedArr = arr.map((item) => item.toUpperCase());

// console.log(uppercasedArr.toString());
// console.log(uppercasedArr);

// ------------------------------------------------------------------

// Tuple
// const arr : [number,number,number,] =[12,32,12,1]

// ------------------------------------------------------------------

// type Person = {
//   name: string;
//   //   age: number;
//   age?: number;
// };

// interface Job extends Person {
//   job: string;
// }

// const person: Job = {
//   name: "Anirudh",
//   //   age: 25,
//   job: "Software Developer",
// };

// console.log(person.name)

// type FunType = (n: number, m: number) => void;
// type FunTypeReturn = (n: number, m: number) => number;

// interface Func {
//   func: FunType;
//   funcReturn: FunTypeReturn;
// }

// const func: Func = {
//   func: (a, b) => console.log(a * b),
//   funcReturn: (n, m) => {return (n * m)},
// };

// // console.log("Print----->> ",func.func(3,2))
// console.log("Print----->> ",func.funcReturn(3,2))

// ------------------------------------------------------------------

// type FuncType = (...m: number[]) => number[];

// const func: FuncType =(...m)=>{
//     return m
// }

// ------------------------------------------------------------------

// type themeMode= "Light" | "Dark"

// const mode:themeMode = "asd"

// ------------------------------------------------------------------

// interface Person  {
//   name: string;
//   age: number;
// }

// const myObj : Person = {
//     name: "Anirudh",
//     age: 25,
// }

// const getData =(key : keyof Person) => {
//     return myObj[key]
// }

// console.log(getData("age"))

// ------------------------------------------------------------------

// UTILITY TYPE

// Partial<Type>

// type User = {
//   name: string;
//   age: number;
// };

// type User2 = Partial<User>

// Required<Type>

// type User = {
//   name?: string;
//   age?: number;
// };

// type User2 = Required<User>

// const user: User ={}
// const user: User2 ={}

// Readonly<Type>

// type User = {
//   name: string;
//   age: number;
// };

// const user: Readonly<User> = {
//   name: "Anirudh",
//   age: 100,
// };

// user.name = "asd";


// Record<Type>

// type Age = {
//   age: number;
// };

// type Name = "john" | "jane";

// const user : Record<Name, Age> ={
//     john:{
//         age:100
//     },
//     jane:{
//         age:100
//     }
// } 

