// 1. Variables de base
var nom = 'MELEK';
var age = 20;
var isAdmin = true;
// 2. Tableau de nombres
var scores = [1, 2, 3];
// 3. Tuple (etudiant)
var student = ["melek", 20];
// 4. Enum Role
var Role;
(function (Role) {
    Role["User"] = "User";
    Role["Admin"] = "Admin";
    Role["SuperAdmin"] = "SuperAdmin";
})(Role || (Role = {}));
var myRole = Role.User;
console.log(nom, age, isAdmin, scores, student, myRole);
