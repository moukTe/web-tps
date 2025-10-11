//1.class person
class Person{
    constructor(public name: string, public age: number) {}
    greet() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
}}

//2.etudiant
class Etudiant extends Person {
    constructor(name: string, age: number , public school: string){
        super(name,age);
    }
}

//3.shape abstract
abstract class Shape {
    abstract area():number;
}

class Circle extends Shape{
    constructor(public r: number){
        super();
    }
    area(): number {
        return Math.PI * this.r ** 2;
    }
}

class Rectangle extends Shape {
    constructor(public w:number,public h:number){
        super();
    }
    area() : number{
        return this.w * this.h;
    }
}

//4.4. Crée une interface Drivable avec une méthode drive(), puis une classe Car qui l’implémente.
interface Drivable{
    drive():void;
}
class Car implements Drivable {
    constructor(public model : string){}
    drive(){
    console.log(`${this.model} is driving...`);
    }
}

const karhabti = new Car("Golf5");
karhabti.drive();
