/*
 * Exercice 4 – Spread Operator
 *		- Fusionnez deux tableaux : [1,2,3] et [4,5,6] avec ... .
 *		- Faites une copie d’un objet puis modifiez une valeur.
 */

/** Fusionnez deux tableaux : [1,2,3] et [4,5,6] avec .... */
let tab1 = [1, 2, 3];
let tab2 = [4, 5, 6];

console.log(tab1);
console.log(tab2);

tab1 = [...tab1, ...tab2];

console.log(tab1);

/** Faites une copie d’un objet puis modifiez une valeur. */
let obj1 = { name: "Noor", age: 10, city: "Tunis" };
let obj2 = { ...obj1, age: 11 };

console.log(obj1); // { name: "Noor", age: 10, city: "Tunis" }
console.log(obj2); // { name: "Noor", age: 11, city: "Tunis" }
