//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul1 = document.createElement("ul");
for (const album of albums) {
  const li1 = document.createElement("li");
  li1.innerHTML = album;
  ul1.appendChild(li1);
}
document.body.appendChild(ul1);
