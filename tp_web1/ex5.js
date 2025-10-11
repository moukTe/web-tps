/*
 * Exercice 5 – Objet simple
 *		- Créez un objet livre avec titre, auteur, année.
 *		- Ajoutez une méthode getInfo() qui retourne une phrase descriptive.
 */

let book = {
  titre: "Nineteen Eighty-Four",
  auteur: "George Orwell",
  annee: 1949,
  getInfo() {
    return `${this.titre} est un roman de ${this.auteur} publié en ${this.annee}`;
  }
};

console.log(book.getInfo());

