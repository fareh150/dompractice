//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div1 = document.createElement("div");
document.body.appendChild(div1);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div2 = document.createElement("div");
const p1 = document.createElement("p");

div2.appendChild(p1);
document.body.appendChild(div2);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div3 = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const p2 = document.createElement("p");

  div3.appendChild(p2);
}

document.body.appendChild(div3);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const pDinamic = document.createElement("p");
pDinamic.innerHTML = `Soy Dinamico`;

document.body.appendChild(pDinamic);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const myH2 = document.querySelector(".fn-insert-here");
myH2.innerHTML = "Wubba Lubba dub dub";

/**
 * 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
 */

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");

for (const app of apps) {
  const li = document.createElement("li");
  li.innerHTML = `${app}`;
  ul.appendChild(li);
}
document.body.appendChild(ul);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const body1 = document.querySelector("body");
const nowRemove = document.querySelectorAll(".fn-remove-me");
for (const data of nowRemove) {
  body1.removeChild(data);
}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
//en dom , para especificar que exactamente quieres el div con esa clase , se puede poner el tipo de contenedor seguido de .clase asi no tendriamos conflicto con el h2 de la cabecera.
//const var81 = document.querySelector("div.fn-insert-here");
const var81 = document.querySelector("div");
console.log(var81);
const newp = document.createElement("p");
newp.innerHTML = "Voy en medio!";
var81.after(newp);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const var91 = document.querySelectorAll("div.fn-insert-here");

for (const divactual of var91) {
  const p9 = document.createElement("p");
  p9.innerHTML = "Voy dentro!";
  divactual.appendChild(p9);
}
