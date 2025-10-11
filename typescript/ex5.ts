//1. sum
function add(a: number, b: number): number {
return a+b
}

//2. greet
function greet(name: string, age?: number): void {
    if (age) console.log(`Hello ${name}, you are ${age} years old.`);
    else console.log('Hello '+name+'!');
}

//3. power
function power(base: number, exp: number = 1): number {
    return base ** exp
}

//4.combine : overload/surcharge
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
    return a + b;
}
