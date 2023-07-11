//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const button1 = document.createElement("button");
button1.id = "btnToClick";
button1.innerHTML = `Dale`;
document.body.appendChild(button1);
button1.addEventListener("click", (ev) => {
  console.log(ev);
});

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

//error preguntar
const focus2 = document.querySelector(".focus");
focus2.addEventListener("focus", (ev) => {
  console.log(ev.target.value);
});

/** 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
 */
const input3 = document.querySelector(".value");
input3.addEventListener("input", (ev) => {
  console.log(ev.target.value);
});
