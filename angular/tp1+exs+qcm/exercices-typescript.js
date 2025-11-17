var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Variables avec différents types
var nom = "MELEK";
var age = 20;
var estEtudiant = true;
// Fonction typée pour la somme
function somme(a, b) {
    return a + b;
}
console.log("Somme de 5 et 3 =", somme(5, 3));
// Classe implémentant l'interface
var EtudiantClasse = /** @class */ (function () {
    function EtudiantClasse(id, nom, prenom, age) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    EtudiantClasse.prototype.afficherInfos = function () {
        console.log("ID: ".concat(this.id, ", Nom: ").concat(this.nom, " ").concat(this.prenom, ", Age: ").concat(this.age));
    };
    return EtudiantClasse;
}());
var etudiant1 = new EtudiantClasse(1, "MELEK", "TEMIMI", 20);
etudiant1.afficherInfos();
// Fonction générique
function creerTableau(valeurs) {
    return __spreadArray([], valeurs, true);
}
console.log(creerTableau([1, 2, 3]));
console.log(creerTableau(["a", "b", "c"]));
// Union et types optionnels
function afficherValeur(valeur, prefix) {
    if (prefix) {
        console.log(prefix, valeur);
    }
    else {
        console.log(valeur);
    }
}
afficherValeur(10);
afficherValeur("Angular", "Framework:");
// Enumération
var Couleur;
(function (Couleur) {
    Couleur["Rouge"] = "Rouge";
    Couleur["Vert"] = "Vert";
    Couleur["Bleu"] = "Bleu";
})(Couleur || (Couleur = {}));
var maCouleur = Couleur.Vert;
console.log("Ma couleur préférée:", maCouleur);
