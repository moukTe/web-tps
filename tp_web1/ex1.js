/*
 * Exercice 1 – Variables et portée
 *		- Déclarez 3 variables avec var, let, const.
 *		- Montrez la différence de portée dans un bloc {}.
 *		- Prévoir une question piège : que se passe-t-il si on réaffecte une const ?
 */

{
  var a = 50;
  let b = 100;
  const c = 500;

  console.log(a); // 50
  console.log(b); // 100
  console.log(c); // 50
}

console.log(a); // 50
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined

const d = 10;
d = 5; // TypeError: Assignment to constant variable.
