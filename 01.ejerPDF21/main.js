//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const myButton = document.querySelector(".showme");
console.log(myButton);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1 = document.querySelector("#pillado");
console.log(h1);

//1.3 Usa querySelector para mostrar por consola todos los p
const allP = document.querySelectorAll("p");
console.log(allP);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokes = document.querySelectorAll(".pokemon");
console.log(pokes);

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const heros = document.querySelectorAll('[data-function="testMe"]');
console.log(heros);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

for (let i = 0; i < heros.length; i++) {
  const hero = heros[i];
  if (i === 2) {
    console.log(hero);
  }
}
