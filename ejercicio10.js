const parrafoOriginal2 = document.querySelector("p");
const nuevoParrafo2 = document.createElement("p");
nuevoParrafo2.textContent = "Párrafo reemplazado";
parrafoOriginal2.replaceWith(nuevoParrafo2);