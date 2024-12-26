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
