/*
 * Exercice 7 – Tableaux avancés
 *		À partir du tableau: const notes = [12, 5, 17, 9, 20];
 *			1. Calculez la moyenne (avec reduce).
 *			2. Triez le tableau en ordre décroissant.
 *			3. Filtrez les notes ≥10.
 */

const notes = [12, 5, 17, 9, 20];

let moy =
  notes.reduce((sum, currentValue) => sum + currentValue, 0) / notes.length;
console.log(`Moyenne de notes = ${moy}`);

let notesTriees = [...notes].sort((a, b) => b - a);
console.log(`Notes triées en ordre décroissant: ${notesTriees}`);

let noteSupDix = notes.filter((note) => note >= 10);
console.log(`Notes >= 10: ${noteSupDix}`);
