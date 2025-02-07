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

// // Partial<Type>

// type User = {
//   name: string;
//   age: number;
// };

// type User2 = Partial<User>

// // Required<Type>

// type User = {
//   name?: string;
//   age?: number;
// };

// type User2 = Required<User>

// const user: User ={}
// const user: User2 ={}

// // Readonly<Type>

// type User = {
//   name: string;
//   age: number;
// };

// const user: Readonly<User> = {
//   name: "Anirudh",
//   age: 100,
// };

// user.name = "asd";

// // Record<Type>

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

// // Pick<Type,Keys>
// interface OrderInfo {
//   readonly id: string;
//   city: string;
//   state: string;
//   country: string;
//   status: string;
// }

// type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;

// // Omit<Type,Keys>
// type Random = Omit<OrderInfo, "city" | "state" | "country">;

// // Exclude<Type, ExcludeUnion>
// type MyUnion = string | number | boolean;
// type Random = Exclude<MyUnion,number >;

// // Extract<Type, Union>
// type MyUnion = string | number | boolean;
// type Random = Extract<MyUnion,number >;

// // Parameters<Type>

// const myfunc = (a:number, b:number) =>{
//     console.log(a+b)
// }

// type Random = Parameters<typeof myfunc>

// // ReturnType<Type>

// const myfunc = (a:number, b:number) =>{
//     console.log(a+b)
// }

// type Random = ReturnType<typeof myfunc>

// ------------------------------------------------------------------

// // Generics

// type Person = {
//   name: string;
//   age: number;
// };

// const func = <T>(n: T): T => {
//   return n;
// };

// const person1 : Person = {
//     name: 'John',
//     age: 30
// }

// const ans = func<Person>(person1)

// ans.age
// -----------------------------
// const arr: Array<number>=[]

// const func = <T, U>(a: T, b: U): {a:T,b:U} => {
//   return { a, b };
// };

// const ans = func<number,string>(21,"Meow")
// console.log(ans.a)

// -----------------------Extends (inheritance)
// type Person = {
//   name : string
// }
// type Person2 = {
//   name : string,
//   age: number
// }

// const func = <T, U extends T>(a: T, b: U): {a:T,b:U} => {
//   return { a, b };
// };

// const ans = func<Person,Person2>({name:"Meow"},{name:"Ani", age:1})
// console.log(ans.a)

// ------------------------

// type Week = {
//   day: string;
//   time: number;
// };

// const week: Week[] = [
//   {
//     day: "Mon",
//     time: 1,
//   },
//   {
//     day: "Tue",
//     time: 2,
//   },
//   {
//     day: "Wed",
//     time: 3,
//   },
//   {
//     day: "Thu",
//     time: 4,
//   },
// ];

// const filterWeek = <T, U extends keyof T>(arr: T[], property: U, value: T[U]): T[] => {
//   return arr.filter(item => item[property] === value)
//   // return arr.map(item => item[property] === value)

// }

// const filterWeekByDay = filterWeek(week, "day", "Tue")
// console.log(filterWeekByDay)
