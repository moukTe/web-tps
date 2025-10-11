/*
 * Exercice 6 - Classe ES6
 *		- Créez une classe Etudiant avec : nom, note.
 *		- Ajoutez une méthode getMention() :
 *				≥16 : Très bien
 *				≥14 : Bien
 *				≥10 : Passable
 *				sinon : Échec
 *		- Instanciez 3 étudiants et affichez leur mention.
 */

class Etudiant {
  constructor(nom, note) {
    this.nom = nom;
    if (note < 0 || note > 20) {
      this.note = 0;
    } else {
      this.note = note;
    }
  }

  getMention() {
    if (this.note >= 16) {
      return "Très bien";
    } else if (this.note >= 14) {
      return "Bien";
    } else if (this.note >= 10) {
      return "Passable";
    } else {
      return "Echec";
    }
  }
}

// Instanciation de 3 étudiants version Berserk
const etu1 = new Etudiant("Guts", 18);
const etu2 = new Etudiant("Griffith", 15);
const etu3 = new Etudiant("Casca", 11);

// Affichage des mentions
console.log(`${etu1.nom}: ${etu1.getMention()}`); // Guts : Très bien
console.log(`${etu2.nom}: ${etu2.getMention()}`); // Griffith : Bien
console.log(`${etu3.nom}: ${etu3.getMention()}`); // Casca : Passable
