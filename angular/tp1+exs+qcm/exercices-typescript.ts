// Variables avec différents types
let nom: string = "MELEK";
let age: number = 20;
let estEtudiant: boolean = true;

// Fonction typée pour la somme
function somme(a: number, b: number): number {
    return a + b;
}
console.log("Somme de 5 et 3 =", somme(5, 3));

// Interface Etudiant
interface Etudiant {
    id: number;
    nom: string;
    prenom: string;
    age: number;
}

// Classe implémentant l'interface
class EtudiantClasse implements Etudiant {
    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public age: number
    ) {}

    afficherInfos(): void {
        console.log(`ID: ${this.id}, Nom: ${this.nom} ${this.prenom}, Age: ${this.age}`);
    }
}

const etudiant1 = new EtudiantClasse(1, "MELEK", "TEMIMI", 20);
etudiant1.afficherInfos();



// Fonction générique
function creerTableau<T>(valeurs: T[]): T[] {
    return [...valeurs];
}
console.log(creerTableau<number>([1,2,3]));
console.log(creerTableau<string>(["a","b","c"]));

// Union et types optionnels
function afficherValeur(valeur: string | number, prefix?: string) {
    if(prefix) {
        console.log(prefix, valeur);
    } else {
        console.log(valeur);
    }
}
afficherValeur(10);
afficherValeur("Angular", "Framework:");

// Enumération
enum Couleur {
    Rouge = "Rouge",
    Vert = "Vert",
    Bleu = "Bleu"
}
let maCouleur: Couleur = Couleur.Vert;
console.log("Ma couleur préférée:", maCouleur);
