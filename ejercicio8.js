const nuevoh3 = document.createElement("h3");
nuevoh3.textContent = "Titulo insertado con JS H3";
const primerParrafo = document.querySelector("p");
document.body.insertBefore(nuevoh3, primerParrafo);