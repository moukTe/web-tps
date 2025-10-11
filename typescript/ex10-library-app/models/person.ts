export abstract class Person {
    constructor(
        public id: number,
        public nom: string
    ){}
}

export class User extends Person {
    role: string='User';
}

export class Admin extends Person {
    role: string='Admin';
}