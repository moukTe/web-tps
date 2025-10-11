//1. interface user
interface User {
    id: number;
    nom: string;
    email?: string; //optional
    readonly isAdmin: boolean;
}

//2. objet user1
const user1: User = {
    id:1,
    nom:'mouk',
    isAdmin: false
}

//interface Admin hérite User +propriété permissions

interface Admin extends User {
    permissions : string[];
}

const admin1 : Admin = {
    id:2,
    nom:'narco',
    isAdmin: true,
    permissions: ['r','w','d']
}

console.log(admin1)