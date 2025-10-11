// 1. Variable avec 2 types
let id: number | string = 123;
id = "ABC123";

// 2. Intersection de types
type A ={x:number};
type B = { y: number };
type AB= A & B ;
let point: AB = { x: 10, y: 20 };

// 3. Alias de type
type Status = "pending" | "done" | "canceled";
let taskStatus: Status = "done";

// 4. Assertion de type
let thing:unknown = 'MOUK';
if (typeof thing === "string") {
    console.log((thing as string).length);
}
