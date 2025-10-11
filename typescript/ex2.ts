
// 1. Variables de base
let nom : string = 'MELEK';
let age: number=20;
let isAdmin: boolean= true;

// 2. Tableau de nombres
let scores: number[]=[1,2,3];

// 3. Tuple (etudiant)
let student: [string, number] = ["melek", 20];


// 4. Enum Role
enum Role {
    User = "User",
    Admin = "Admin",
    SuperAdmin = "SuperAdmin"
}

let myRole: Role = Role.User;
console.log(nom, age, isAdmin, scores, student, myRole);