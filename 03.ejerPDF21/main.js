//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const myUl = document.createElement("ul");

for (const countri of countries) {
  const newLi = document.createElement("li");
  newLi.innerHTML = countri;
  myUl.appendChild(newLi);
}
document.body.appendChild(myUl);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const pDelete = document.querySelector(".fn-remove-me");
document.body.removeChild(pDelete);

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const ul3 = document.createElement("ul");
for (const marca of cars) {
  const li3 = document.createElement("li");
  li3.innerHTML = marca;
  ul3.appendChild(li3);
}
const divRAro = document.querySelector(`[data-function="printHere"]`);
divRAro.appendChild(ul3);
document.body.appendChild(divRAro);

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const countri of countries2) {
  const div4 = document.createElement("div");
  div4.classList.add("fotos");
  div4.innerHTML = `
    <h4>${countri.title}</h4>
    <img src=${countri.imgUrl} alt=${countri.title}>
  `;
  document.body.appendChild(div4);
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

//preparamos el boton
const myBtn = document.createElement("button");
myBtn.classList.add("deleteLast");
myBtn.innerHTML = `Un boton para eliminar al ultimo`;

//funcion del boton
myBtn.addEventListener("click", (ev) => {
  //recuperamos los div con imagen , devuelve array de divs
  const divImg = document.querySelectorAll(".fotos");
  console.log(divImg);
  divImg[divImg.length - 1].remove();
});
document.body.appendChild(myBtn);

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
//recuperamos array
const divsTotal = document.querySelectorAll(".fotos");
//bucle para agregar botones
for (const parte of divsTotal) {
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = `Borrar este div`;
  deleteButton.addEventListener("click", (ev) => {
    parte.remove();
  });
  parte.appendChild(deleteButton);
}
//funcion de button
